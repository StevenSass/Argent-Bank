import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("auth",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Identifiant ou mot de passe incorrect");
      } else {
        console.error("Erreur non traitée:", error);
        alert("Une erreur s'est produite lors de la connexion");
      }
    }
  }
);

export const getUser = createAsyncThunk("user",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, config);
      return response.data.body;
    } catch (error) {
      throw error
    }
  }
);

export const putUser = createAsyncThunk("modifiedUser",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", data.postData, config);
      return response.data.body;
    } catch (error) {
      throw error
    }
  }
);