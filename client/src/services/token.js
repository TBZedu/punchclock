const TOKEN_KEY = 'auth_token';

export const destroyToken = () => window.localStorage.removeItem(TOKEN_KEY);
export const getToken = () => window.localStorage.getItem(TOKEN_KEY);
export const saveToken = token => window.localStorage.setItem(TOKEN_KEY, token);

export default { destroyToken, getToken, saveToken }