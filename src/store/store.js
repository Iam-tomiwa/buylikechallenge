import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import animeReducer from "./AnimeList/animeReducer";

let store = createStore(animeReducer, applyMiddleware(thunk));
export default store;
