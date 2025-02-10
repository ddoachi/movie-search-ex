import { Component } from '../core/common'
import movieStore from '../store/movie'
import { getMovieDetails } from '../store/movie'

export default class Movie extends Component {
  async render() {
    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie)
  }
}