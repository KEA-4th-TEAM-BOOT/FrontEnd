import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType") || "Bearer";
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

const baseURL = process.env.REACT_APP_USER_BASE_URL;

/** CREATE CUSTOM AXIOS INSTANCE */
export const UserApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
    REFRESH_TOKEN: REFRESH_TOKEN,
  },
});

// 토큰 갱신
const refreshAccessToken = async () => {
  const response = await UserApi.patch(`/api/v1/auth/reissue`);
  ACCESS_TOKEN = response.data.accessToken;
  localStorage.setItem("accessToken", ACCESS_TOKEN);
  UserApi.defaults.headers.common[
    "Authorization"
  ] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
};

// 토큰 유효성 검사
UserApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      return UserApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

/** LOGIN API */
export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/login`, {
      email,
      password,
    });
    ACCESS_TOKEN = response.data.accessToken;
    REFRESH_TOKEN = response.data.refreshToken;

    localStorage.setItem("accessToken", ACCESS_TOKEN);
    localStorage.setItem("refreshToken", REFRESH_TOKEN);
    localStorage.setItem("tokenType", TOKEN_TYPE);

    // Update UserApi headers
    UserApi.defaults.headers.common[
      "Authorization"
    ] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
    UserApi.defaults.headers.common["REFRESH_TOKEN"] = REFRESH_TOKEN;

    return response.data;
  } catch (error) {
    throw error;
  }
};

/** 회원조회 API */
export const fetchUser = async () => {
  const response = await UserApi.get(`/api/v1/user`);
  return response.data;
};

/** 회원수정 API */
export const updateUser = async (data) => {
  const response = await UserApi.put(`/api/v1/user`, data);
  return response.data;
};

/** 회원탈퇴 API */
export const deleteUser = async () => {
  await UserApi.delete(`/api/v1/user`);
};
