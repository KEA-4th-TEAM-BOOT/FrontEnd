import axios from "axios";
const baseURL = import.meta.env.VITE_AI_BASE_URL;

export const AiServiceApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** POSTING API */
export const AiWrite = async ({ data }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await AiServiceApi.post(`/writing`, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
