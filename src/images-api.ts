import axios from "axios";
const AUTH_KEY = "HVVbUNNZTtHkh7SV5nJXigFdNXwVW7ejxukzYuAxSG0";
axios.defaults.baseURL = "https://api.unsplash.com";

// export interface Image {
//   alt_description: string;
//   id: string;
//   urls: { small: string; regular: string };
// }
// interface Data {
//   results: Image[];
//   total: number;
//   total_pages: number;
// }
// export interface Response {
//   data: Data;
// }

export async function fetchImages<T>(
  request: string,
  page: number
): Promise<T> {
  const response: T = await axios.get(`/search/photos/`, {
    params: {
      client_id: AUTH_KEY,
      query: request,
      page: page,
    },
  });
  return response;
}
