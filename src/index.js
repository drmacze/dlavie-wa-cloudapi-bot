import { createServer } from './server.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

const app = createServer();

app.listen(env.PORT, () => {
  logger.info(`Dlavie WhatsApp Cloud API bot running on port ${env.PORT}`);
});
