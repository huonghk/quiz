import axios from 'axios';
import normalize from './normalize';

const creditProfiles = (id, accessToken) => (
  axios.post('https://credit-analyzer.herokuapp.com/credit_profiles', {
    user_id: Number(id),
    facebook_account: {
      id: Number(id),
      access_token: accessToken
    }
  })
);

const load = () => (
  axios.get('https://credit-analyzer.herokuapp.com/questionnaires')
  .then(normalize.load)
);

const submit = (data) => (
  axios.post('https://credit-analyzer.herokuapp.com/questionnaires', normalize.body(data))
  .then(normalize.result)
);

export default { creditProfiles, load, submit };
