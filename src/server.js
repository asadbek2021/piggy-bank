const app = require('./app');
const config = require('./config/config');

app.listen(config.PORT || 3000, () => {
  console.log('Sever is running!');
});
