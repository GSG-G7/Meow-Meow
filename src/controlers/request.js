
const fetch = require('node-fetch');

exports.post = (req, response) => {
  const value = req.body.input;
  const url = `https://api.thecatapi.com/v1/images/search??breed_ids=${value}&limit=4&key=${process.env.MEOW_API_KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(res => response.render('home', {
      cats: res,
      appName: 'Cat Photo App',
    }))
    .catch(err => response.status(500).render('serverError'));
};
