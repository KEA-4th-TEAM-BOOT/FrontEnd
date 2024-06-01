import axios from "axios";

let ACCESS_TOKEN =
  localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
let REFRESH_TOKEN =
  localStorage.getItem("refreshToken") ||
  sessionStorage.getItem("refreshToken");

const baseURL = import.meta.env.VITE_USER_BASE_URL;

/** CREATE CUSTOM AXIOS INSTANCE */
export const UserApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${ACCESS_TOKEN}`,
    REFRESH_TOKEN: REFRESH_TOKEN,
  },
});

// 토큰 갱신
const refreshAccessToken = async () => {
  const response = await UserApi.patch(`/api/v1/auth/reissue`);
  ACCESS_TOKEN = response.data.accessToken;
  localStorage.setItem("accessToken", ACCESS_TOKEN);
  UserApi.defaults.headers.common["Authorization"] = `${ACCESS_TOKEN}`;
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
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/login`, {
      email,
      password,
    });
    ACCESS_TOKEN = response.data.accessToken;
    REFRESH_TOKEN = response.data.refreshToken;

    // Update UserApi headers
    UserApi.defaults.headers.common["Authorization"] = `${ACCESS_TOKEN}`;
    UserApi.defaults.headers.common["REFRESH_TOKEN"] = REFRESH_TOKEN;

    return response.data;
  } catch (error) {
    throw error;
  }
};

/** LOGOUT API */
export const logout = async () => {
  try {
    // 로그아웃 요청을 보내기 전에 저장소에서 값을 가져오기
    const accessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    const refreshToken =
      localStorage.getItem("refreshToken") ||
      sessionStorage.getItem("refreshToken");

    const response = await UserApi.post(`/api/v1/auth/logout`, null, {
      headers: {
        Authorization: `${accessToken}`,
        REFRESH_TOKEN: refreshToken,
      },
    });

    // 로그아웃 성공 후 저장소에서 토큰 제거
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("recoil-persist");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");

    return response;
  } catch (error) {
    console.error("Logout error:", error);
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
  const response = await UserApi.patch(`/api/v1/user`, data);
  return response.data;
};

/** 회원탈퇴 API */
export const deleteUser = async () => {
  await UserApi.delete(`/api/v1/user`);
};
