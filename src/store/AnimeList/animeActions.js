import {
  FETCH_ANIME,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_ERROR,
  CLEAR_LIST,
} from "./animeTypes";
import axios from "axios";

const fetchAnimeRequest = () => ({
  type: FETCH_ANIME,
});
const fetchAnimeSuccess = data => ({
  type: FETCH_ANIME_SUCCESS,
  payload: data,
});
const fetchAnimeError = error => ({
  type: FETCH_ANIME_ERROR,
  payload: error,
});

export const clearAnimeList = () => ({
  type: CLEAR_LIST,
});

export const fetchAnime = (searchTerm, page) => {
  return async dispatch => {
    dispatch(fetchAnimeRequest());
    try {
      const {data} = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&page=${page}&limit=8`
      );
      const hasMore = page < data.last_page;
      if (hasMore) dispatch(fetchAnimeSuccess(data));
      console.log(hasMore);
    } catch (error) {
      let errMsg;
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        errMsg = error.response.data.message;
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        errMsg = error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        errMsg = error.message;
        console.log("Error", error.message);
      }
      dispatch(fetchAnimeError(errMsg));
    }
  };
};
