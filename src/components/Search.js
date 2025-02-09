import { Component } from '../core/common'

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter a movie title" />
      <button class="btn btn-primary">
        Search!
      </button>
    `
    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', (e) => {
      //
    });

    inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        //
      }
    });

    const btnEl = this.el.querySelector('button');
    btnEl.addEventListener('click', () => {
      //
    })
  }
}