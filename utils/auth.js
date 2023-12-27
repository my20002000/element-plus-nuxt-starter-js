import * as KJUR from 'jsrsasign';
const config = useRuntimeConfig()
const TOKEN_KEY = config.public.tokenkey;

const publicKey=config.public.publickey;
const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const verifyLogin = () => {
  var token=getToken();
  try{
    if(token){
      return KJUR.jws.JWS.verifyJWT(token, publicKey, {
        alg: ['RS256'],
      });
     }
  }catch{
    return false;
  }
  return false;
 
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken,verifyLogin };
