const search = document.querySelector('#search');
const userinput = document.querySelector('#userInput');
const url = '/search';
search.addEventListener('submit', (e) => {

  e.preventDefault();
  const input = userinput.value.trim();
  if (!input) {
    return;
  }
  fetch('/search', {
      method:"POST",
      headers : {'Content-Type':'application/json'},
      body:JSON.stringify({input})
  })
    .then(res => res.json())
    .then(data=> console.log(data));
});
