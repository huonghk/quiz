import React from 'react';
import Presentation from './presentation';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onSelect = this.onSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.qid !== nextProps.qid) {
      this.setState({ clicked: false });
    }
  }
  onSelect() {
    this.setState({ clicked: true });
    const { qid, cid, onSelect } = this.props;
    onSelect(qid, cid);
  }
  render() {
    const { clicked } = this.state;
    const { onSelect } = this;
    const { value } = this.props;
    return (
      <Presentation value={value} clicked={clicked} onSelect={onSelect} />
    );
  }
}

Component.propTypes = {
  qid: React.PropTypes.number.isRequired,
  cid: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

Component.displayName = 'answer item';

export default Component;
