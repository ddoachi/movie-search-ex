import { Store } from '../core/common'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: 'Search for the movie title!',
  movie: {},
})

export default store;
export const searchMovies = async page => {
  store.state.loading = true;
  store.state.page = page;
  if ( page === 1 ) {
    store.state.movies = [];
    store.state.message = '';
  }
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=f25e888&s=${store.state.searchText}&page=${page}`);
    const { Search, totalResults, Response, Error } = await res.json();
    if ( Response === "True") {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log('searchMovies error:', error);
    store.state.page = 1;
  } finally {
    store.state.loading = false;
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(`https://www.omdbapi.com?apikey=f25e888&i=${id}`)
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
}