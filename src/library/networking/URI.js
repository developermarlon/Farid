export const END_POINT = 'https://appaunap.gcsof.com/api';
export const PORT = null;
/**
 * GET
 */
// Iniciar Sesión del Usuario
export const URL_GET_USER = 'Authen/GetLogin';
// Crear Usuario
export const URL_SET_USER = 'Usuario/PostUsuario';
// Obtener Country
export const URL_GET_COUNTRY = 'Pais/GetAllPais';
// Obtener Tipos de Documento
export const URL_GET_DOCUMENT_TYPE = 'TipoDocumento/GetAllTipoDocumento';
// Obtener STATE BY COUNTRY
export const URL_GET_STATE_BY_COUNTRY = 'Departamento/GetDepartamentoPais';
// Obtener CITY BY STATE
export const URL_GET_CITY_BY_STATE = 'Ciudad/GetCiudadDepartamento';

export const URL_GET_USER_PROFILE = 'Usuario/GetUsuarioId';

export const URL_SET_USER_PROFILE = 'Usuario/PostUsuario';
export const URL_SET_USER_PROFILE_CREDENTIAL = 'Usuario/PostUsuario';

export const URL_GET_CATEGORY_FOR_AVAILABLE = 'api/getCategoryForAvailable';
export const URL_GET_COUPON_FOR_CATEGORY_LOCATION =
  'api/getAllCouponForIdCategoryLocationCLI';
export const URL_GET_COUPON_FOR_ID_COUPON = 'api/getOneCouponForIdCouponCLI';
export const URL_GET_FAVORITE_COUPON_LIST =
  'api/getAllFavoriteCouponForIdClientCLI';
export const URL_GET_ALLY_FOR_ID_ALLY = 'api/getAllyForIdAllyCLI';
export const URL_GET_COUPON_CLIENT = 'api/getAllCouponClientCLI';
export const URL_GET_COUPON_CLIENT_HISTORY = 'api/getAllCouponClientCLI';

export const URL_GET_CLIENT_WALLET_POINTS =
  'api/getClientWalletForIdClientPoints';
export const URL_GET_COUPON_CLIENT_FOR_REFERENCE =
  'api/getOneCouponClientForReferenceCLI';
export const URL_GET_CLIENT_WALLET = 'api/getClientWalletForIdClient';

export const URL_GET_PROFILE_FULL_NAME_FOR_NICK_NAME =
  'api/getClientFullNameForNickName';

export const URL_GET_PROFILE = 'api/getClientProfileCLI';
/**
 * POST
 */
export const URL_SET_REGISTER = 'api/registerClient';
export const URL_SET_FAVORITE_COUPON = 'api/setFavoriteCouponCLI';
export const URL_SET_COUPON_CLIENT = 'api/setCouponClient';
export const URL_SET_PROFILE = 'api/setClientProfileCLI';
export const URL_SET_COUPON_CLIENT_PAYMENT = 'api/setCouponClientPayment';

export const URL_SET_RECOVERY = 'api/setRecovery';
