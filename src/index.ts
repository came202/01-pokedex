import { appServer } from "./app";

let port = process.env.port || 5000;

async function start(port: number | string) {
  appServer.listen(port);
  console.log(`listening on port ${port}`)
}

start(port);

export default start;
