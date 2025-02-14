import { Store } from '../core/common'

export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

interface State {
  searchText: string
  page: number
  pageMax: number
  movies: SimpleMovie[]
  loading: boolean
  message: string
  movie: DetailedMovie
}

const store = new Store<State>({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: 'Search for the movie title!',
  movie: {} as DetailedMovie
})

export default store;
export const searchMovies = async (page: number) => {
  store.state.loading = true;
  store.state.page = page;
  if ( page === 1 ) {
    store.state.movies = [];
    store.state.message = '';
  }
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
         title: store.state.searchText,
         page
      })
    })
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

export const getMovieDetails = async (id: string) => {
  try {
    // const res = await fetch(`https://www.omdbapi.com?apikey=f25e888&i=${id}&plot=full`)
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id,
      })
    })
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
}