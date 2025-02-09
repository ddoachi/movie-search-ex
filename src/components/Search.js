import { Component } from '../core/common'

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter a movie title" />
      <button class"btn btn-primary">
        Search!
      </button>
    `
  }
}