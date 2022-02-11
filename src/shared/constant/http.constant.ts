import { Http } from '../model/http.model';

export const HTTP_200: Http = {
  code: 200,
  description: 'Ok'
}

export const HTTP_400: Http = {
  code: 400,
  description: 'Bad Request',
}

export const HTTP_404: Http = {
  code: 404,
  description: 'Not Found',
}

export const HTTP_501: Http = {
  code: 501,
  description: 'Internal Server Error',
}

export const HTTP_503: Http = {
  code: 503,
  description: 'Service Unavailable',
}