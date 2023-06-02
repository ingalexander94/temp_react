import { setPhotographer, unsetPhotographer } from "./auth.slice";

export const loginPhotographer = (photographer) => {
  return (dispatch) => {
    dispatch(setPhotographer(photographer));
  };
};

export const logoutPhotographer = () => {
  return (dispatch) => {
    dispatch(unsetPhotographer());
  };
};
