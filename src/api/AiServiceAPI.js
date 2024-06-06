import axios from "axios";
const guideBaseURL = import.meta.env.VITE_GUIDE_BASE_URL;
const recommendBaseURL = import.meta.env.VITE_RECOMMEND_BASE_URL;

export const AiGuideServiceApi = axios.create({
  baseURL: guideBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AiRecommendServiceApi = axios.create({
  baseURL: recommendBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** POSTING API */
export const AiWrite = async ({ data }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await AiGuideServiceApi.post(`/writing`, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
