import axios from "axios";

export const POST_USER = "POST_USER";

export const postUser = (token) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.post("http://localhost:3001/api/v1/user/profile", {}, config)
      .then((res) => {
        dispatch({ type: POST_USER, payload: res.data });
      })
      .catch((error) => {
        console.error("Error posting user:", error);
      });
  };
};
