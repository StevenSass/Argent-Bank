import axios from "axios";
import { tokenUser } from "./token.action";
import { postUser } from "./user.action";
import { isEmpty } from "../utils/isEmpty";

export const POST_LOGIN = "POST_LOGIN";

export const getUser = (data) => {
  return async (dispatch) => {
    return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
      dispatch({ type: POST_LOGIN, payload: res.data });
      localStorage.setItem("token", res.data.body.token)
      dispatch(tokenUser(res.data.body.token))
      if (!isEmpty(res.data.body.token)) {
        dispatch(postUser(res.data.body.token));
      }
    });
  };
};

