import axios from "axios";

let ACCESS_TOKEN =
  localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
let REFRESH_TOKEN =
  localStorage.getItem("refreshToken") ||
  sessionStorage.getItem("refreshToken");

const baseURL = import.meta.env.VITE_POST_BASE_URL;

/** CREATE CUSTOM AXIOS INSTANCE */
export const PostApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${ACCESS_TOKEN}`,
    REFRESH_TOKEN: REFRESH_TOKEN,
  },
});

/** POSTING API */
export const create_post = async ({ data }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await PostApi.post(`/api/v1/post/`, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
