const search = document.querySelector('#search');
const userinput = document.querySelector('#userInput');

search.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = userinput.value.trim();
  if (!input) {
    return;
  }
  const url = `/search?query=${input}`;
  fetch(url)
    .then(res => res.json())
    .then(console.log(data));
});
