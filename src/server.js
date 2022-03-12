const app = require('./app');
const config = require('./config/config');
const { logger } = require('./tools/Logger');

app.listen(config.PORT || 3000, () => {
  logger.info('Sever is running!');
});
