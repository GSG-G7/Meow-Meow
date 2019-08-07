
const fetch = require('node-fetch');

exports.post = (req, response) => {
  const value = req.body.input;
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&key=${process.env.MEOW_API_KEY}q=${value}`;
  fetch(url)
    .then(res => res.json())
    .then(res => response.render('home', {
      image: res[0].url,
    }))
    .catch(err => response.status(500).render('serverError'));
};
