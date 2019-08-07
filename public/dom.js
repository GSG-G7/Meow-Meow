// const search = document.querySelector('#search');
// const userinput = document.querySelector('#userInput');


// const image1 = document.getElementById('image');

// const displayData = (data) => {
//     image1.src = data[0].url
// }

// search.addEventListener('submit', (e) => {

//   e.preventDefault();
//   const input = userinput.value.trim();
//   console.log(input)
//   if (!input) {
//     return;
//   }
//    fetch('/search', {
//       method:"POST",
//       headers : {'Content-Type':'application/json'},
//       body:JSON.stringify({input})
//   })
//     .then(res => res.json())
//     .then(data=> displayData(data))      
// });

