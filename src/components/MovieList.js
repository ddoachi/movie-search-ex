import { Component } from '../core/common'
import movieStore from '../store/movie'

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => {
      this.render();
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
    `

    const movieEl = this.el.querySelector('.movies');
    movieEl.append(
      movieStore.state.movies.map(movie => {
        return movie.Title
      })
    )

  }

}