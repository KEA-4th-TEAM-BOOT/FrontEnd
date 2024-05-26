import axios from "axios";
import Content from "./../components/homeSection/FormerContent";

let ACCESS_TOKEN =
  localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
let REFRESH_TOKEN =
  localStorage.getItem("refreshToken") ||
  sessionStorage.getItem("refreshToken");

const baseURL = process.env.REACT_APP_POST_BASE_URL;

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
export const create_post = async ({ title, content }) => {
  try {
    const response = await PostApi.post(`/api/v1/post/`, title, content);

    return response.data;
  } catch (error) {
    throw error;
  }
};
