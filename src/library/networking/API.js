/**
 * Dependencies
 */
import QueryString from 'query-string';
/**
 * Code Business
 */
import { END_POINT, PORT } from './URI';
/**
 * Func: APIFetch
 *
 * @param {string} pEndPoint EndPoint
 * @param {mixed} pOptions Options
 * @param {string} pQuery Query
 * @returns {mixed} APIFetch
 */
async function APIFetch(pEndPoint, pOptions = {}, pQuery = null) {
  /*
  pEndPoint = pEndPoint.indexOf('http') !== -1 ? pEndPoint :
      `${END_POINT}:${PORT}/${pEndPoint}`;
  */
  pEndPoint = PORT ? `${END_POINT}:${PORT}/${pEndPoint}` : `${END_POINT}/${pEndPoint}`;
  pQuery = pQuery === null ? null : QueryString.stringify(pQuery);
  const GET_PROMISE = async () => {
    try {
      const FETCH_OPTIONS = APIOptions(pOptions);
      const FETCH_END_POINT = APIEndpoint(pEndPoint, pQuery);
      const RESPONSE = await fetch(FETCH_END_POINT, FETCH_OPTIONS)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return responseError(response.status);
        })
        .then((json) => {
          return json;
        });
        // .catch((e) => {
        //   throw e;
        // })
      return RESPONSE;
      /*
          const RESPONSE = await fetch(FETCH_END_POINT, FETCH_OPTIONS);
          return RESPONSE.json(); 
      */
    } catch (e) {
      throw e;
    }
  };
  return GET_PROMISE();
}
function responseError(errorCode) {
  switch (errorCode) {
    case 400:
    case 401:
      return {
        code: errorCode,
        heading: "Error de Autenticación",
        message: "Por favor vuelve a iniciar sesión",
      };
    case 500:
      return {
        code: errorCode,
        heading: "Error Interno",
        message: "Ocurrio un error en el servidor, por favor intenta de nuevo",
      };
    default:
      return {
        code: errorCode,
        heading: "Error Interno",
        message: "Ocurrio un error en el servidor, por favor intenta de nuevo",
      };
  }
}
/**
 * Func: APIEndpoint
 *
 * @param {string} pEndPoint EndPoint
 * @param {string} pQuery Query
 * @returns {mixed} APIFetch
 */
function APIEndpoint(pEndPoint, pQuery) {
  if (pQuery) {
    pQuery = `?${pQuery}`;
  }
  pQuery = pQuery === null ? '' : pQuery;
  return `${pEndPoint}${pQuery}`;
}
/**
 * Func: APIOptions
 *
 * @param {mixed} pOptions Options
 * @returns {mixed} APIOptions
 */
function APIOptions(pOptions = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    BODY = false
  } = pOptions;

  const NEW_OPTIONS = {
    method,
    headers,
    credentials: 'include'
  };
  if (BODY) {
    NEW_OPTIONS.body = BODY;
  }
  return NEW_OPTIONS;
}
/**
 * Export Default
 */
export {
  APIFetch
};
