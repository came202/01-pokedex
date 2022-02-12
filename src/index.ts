import { appServer } from "./app";
import { generateSwagger } from './core/config/swagger/swagger.conf';

const port = process.env.port || 5000;

async function start(port: number | string) {
  const swagger = await generateSwagger();
  appServer.use(swagger);
  appServer.listen(port);
  console.log(`listening on port ${port}`)
}

start(port);

export default start;
