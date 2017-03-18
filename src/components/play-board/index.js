import React from 'react';
import resources from '../../resources';
import Presentation from './presentation';
import Loading from './loading';

const answers = [];
let total = 0;
const delay = () => (
  new Promise((resolve) => setTimeout(resolve, 5000))
);

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      current: 0,
      questions: [],
      submitting: false,
    };
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    Promise.all([delay(), resources.load()])
    .then(response => {
      const questions = response[1];
      total = questions.length;
      this.setState({ questions });
      // test
      // total = 2;
      // this.setState({ questions: questions.slice(0, 2) });
    })
    .catch(() => {})
    .then(() => {
      this.setState({ ready: true });
    });
  }
  onSelect(qid, cid) {
    answers.push({
      qid, cid,
    });
    const current = this.state.current;
    if (current < total - 1) {
      setTimeout(() => {
        this.setState({
          current: current + 1,
        });
      }, 200);
    } else {
      this.onSubmit();
    }
  }
  onSubmit() {
    this.setState({ submitting: true });
    resources.submit(answers)
    .then(response => {
      this.props.onFinish(response);
    });
  }
  render() {
    const { ready, current, questions, submitting } = this.state;
    const { onSelect } = this;
    return (
      ready ? (
        <Presentation
          ready={ready}
          current={current} question={questions[current]} onSelect={onSelect}
          submitting={submitting}
        />
      ) : <Loading />
    );
  }
}

Component.propTypes = {
  onFinish: React.PropTypes.func.isRequired,
};

Component.displayName = 'play board';

export default Component;
