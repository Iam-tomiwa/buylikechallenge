import {useForm, FormProvider} from "react-hook-form";
import InputField from "../../components/Input";
import {useState, useEffect, useCallback} from "react";
import "./style.scss";
import AnimeCard from "../../components/AnimeCard";
import {Grid} from "@mui/material";
import axios from "axios";

const AnimeSearch = () => {
  const methods = useForm();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const onSubmit = data => {
    setSearchTerm(data.search);
  };

  const loadMoreItems = useCallback(async () => {
    if (!!searchTerm.trim()) {
      try {
        setIsFetching(true);
        const {data} = await axios.get(
          `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&page=${page}&limit=8`
        );
        console.log(data);
        setItems(prevItems => [...prevItems, ...data.results]);
        setHasMore(page < data.last_page);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          setError(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
          setError(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(error.message);
          console.log("Error", error.message);
        }
      }
    }
  }, [page, searchTerm]);

  useEffect(() => {
    const abortCont = new AbortController();
    loadMoreItems();

    // abort the fetch
    return () => abortCont.abort();
  }, [loadMoreItems]);

  return (
    <div className="anime-search-pg">
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
        {items.length > 0 && (
          <>
            <p>Showing Search Results For: {searchTerm}</p>
            <Grid container spacing={3}>
              {items.map(item => (
                <Grid item key={item.mal_id} xs={6} sm={4} md={3} lg={3}>
                  <AnimeCard item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        <br />
        {isFetching && <p className="clr-whiteClr">Fetching items...</p>}
        <br />
        {!isFetching && items.length > 0 && hasMore && (
          <button
            className="btn bg-whiteClr"
            onClick={() => setPage(prevPageNumber => prevPageNumber + 1)}
          >
            Load more
          </button>
        )}
        {error && <h4>{error}</h4>}
      </div>
    </div>
  );
};

export default AnimeSearch;
