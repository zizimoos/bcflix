import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "c39f66305cb6bd411613ca999ce32f56";
  config.params["language"] = "en-US";
  return config;
});

export const movieApi = {
  popular: () => api.get("movie/popular"),
  upComing: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  nowPlaying: () => api.ger("movie/now_playing"),
  latest: () => api.get("movie/latest"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", { params: { query: encodeURIComponent(term) } }),
};

export const tvApi = {
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: { append_to_response: "videos" },
    }),
  search: (term) =>
    api.get("search/tv", { params: { query: encodeURIComponent(term) } }),
};
