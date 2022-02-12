import { oas } from 'koa-oas3';

export async function generateSwagger() {
  try {
    const swagger = await oas({
      file: `${__dirname}/../../../../api.yaml`,
      endpoint: '/swagger/docs.json',
      uiEndpoint: '/swagger/docs',
      validatePaths: [],
    });
    return swagger;
  } catch (error) {
    console.log(error);
  }
} 