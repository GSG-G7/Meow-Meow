
const fetch = require('node-fetch');


exports.post = (req,res)=> {
    console.log(req.method)
    const value =req.body.input;
    console.log(value);
    // const url = `https://api.thecatapi.com/v1/images/search?key=${process.env.MEOW_API_KEY}q=${value}`
    // fetch(url)
    // .then(res=> res.json())
    // .then(json=> console.log(json))
} 



    

