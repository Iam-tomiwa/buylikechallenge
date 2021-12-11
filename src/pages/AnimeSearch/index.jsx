import {useForm, FormProvider} from "react-hook-form";
import InputField from "../../components/Input";
import {useState, useEffect, useCallback} from "react";
import "./style.scss";
import AnimeCard from "../../components/AnimeCard";
import {Grid} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {fetchAnime, clearAnimeList} from "../../store/AnimeList/animeActions";

const AnimeSearch = () => {
  const methods = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const items = useSelector(state => state.data);
  const error = useSelector(state => state.error);
  const isFetching = useSelector(state => state.loading);
  const totalPages = useSelector(state => state.totalPages);
  const dispatch = useDispatch();

  const onSubmit = data => {
    setSearchTerm(data.search);
    dispatch(clearAnimeList());
  };

  const loadAnime = useCallback(() => {
    if (!!searchTerm.trim()) {
      dispatch(fetchAnime(searchTerm, page));
    }
  }, [dispatch, page, searchTerm]);

  useEffect(() => {
    const abortCont = new AbortController();
    loadAnime();
    // abort the fetch
    return () => abortCont.abort();
  }, [loadAnime]);

  return (
    <div className="anime-search-pg">
      <div className="form-header">
        <div className="inner">
          <FormProvider {...methods}>
            <form
              className="search-form"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <InputField
                type="search"
                name="search"
                placeholder="Search for an anime, e.g Naruto"
                id="search"
                className="filter-field"
                disabled={isFetching}
              />
              <button
                disabled={isFetching}
                aria-label="search"
                type="submit"
                className="btn-noBg"
              >
                Go
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="inner">
        {items.length > 0 && (
          <>
            <p>Showing Search Results For: {searchTerm}</p>
            <Grid container spacing={3}>
              {items.map((item, i) => (
                <Grid item key={item.mal_id + i} xs={6} sm={4} md={3} lg={3}>
                  <AnimeCard item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        <br />
        {isFetching && <p className="clr-whiteClr">Fetching items...</p>}
        <br />
        {!isFetching && items.length > 0 && page < totalPages && (
          <button
            className="btn bg-whiteClr"
            onClick={() => setPage(prevPageNumber => prevPageNumber + 1)}
          >
            Load more
          </button>
        )}
        {error && <h4 className="clr-redClr">{error}</h4>}
      </div>
    </div>
  );
};

export default AnimeSearch;
