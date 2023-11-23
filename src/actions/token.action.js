export const TOKEN_USER = "TOKEN_USER";

export const tokenUser = (data) => {
  return async (dispatch) => {
    return dispatch({ type: TOKEN_USER, payload: data });
  };
};