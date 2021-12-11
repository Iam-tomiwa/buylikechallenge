import {
  FETCH_ANIME,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_ERROR,
  CLEAR_LIST,
} from "./animeTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
  totalPages: 0,
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ANIME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.results],
        totalPages: action.payload.last_page,
        error: "",
      };

    case FETCH_ANIME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
        totalPages: action.payload.last_page,
      };

    case CLEAR_LIST:
      return {
        data: [],
        isLoading: false,
        error: "",
        totalPages: 0,
      };
    default:
      return {...state};
  }
};

export default animeReducer;
