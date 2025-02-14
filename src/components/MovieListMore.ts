import { Component } from '../core/common'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })

    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state;
      if (page < pageMax) {
        this.el.classList.remove('hide');
      } else {
        this.el.classList.add('hide');
      }
    })
  }


  render() {
    this.el.classList.add('btn', 'view-more', 'hide');
    this.el.innerHTML = 'View more ..';

    this.el.addEventListener('click', () => {
      searchMovies(movieStore.state.page + 1); 
    })
  }
}