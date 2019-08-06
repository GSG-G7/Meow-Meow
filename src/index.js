const app = require('./app');
const port = app.get('port');

app.listen(port, () => {
  console.log(`Server is up to http://localhost:${port}`);
})