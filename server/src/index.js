import Koa from '@nwing/koa';
import Logger from '@nwing/logger';
import router from './features';

const logger = new Logger('index');
(async () => {
  const staticPath = '.';
  await Koa('8080', { router, static: staticPath });
  logger.info('server listened on: 8080');
})();
