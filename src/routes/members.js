import axios from 'axios';
const method = 'https';
const host = 'api.meetup.com';
const sig = process.env.SIG;
const sigId = process.env.SIG_ID;
const uelName = 'BarranquillaJS';
const params = {
  'photo-host': 'secure',
  sig,
  sig_id: sigId,
};

export function get(req, res, next) {
  axios.get(`${method}://${host}/${uelName}/members`, {
    params
  }).then(response => {
    console.warn(response);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  }).catch(err=> {
    console.warn(err);
  });
}
