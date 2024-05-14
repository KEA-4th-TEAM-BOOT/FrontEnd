import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
  },
  withCredentials: true, // CORS에서 자격 증명 사용을 위해 추가
});

/** LOGIN API */
export const login = async ({ email, password }) => {
  const data = { email, password };
  const response = await AuthApi.post(`/auth/login`, data);
  return response.data;
};

/** SIGNUP API */
export const signUp = async ({
  username,
  email,
  password,
  nickname,
  blogUrl,
}) => {
  const data = { username, email, password, nickname, blogUrl };
  const response = await AuthApi.post(`/auth/register`, data);
  return response.data;
};
