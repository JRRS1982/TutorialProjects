import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (googleUserId) => {
  return {
    type: SIGN_IN,
    payload: googleUserId
  };
}


export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}
