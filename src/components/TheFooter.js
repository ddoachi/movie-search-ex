import { Component } from '../core/common'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }

  render() {
    this.el.innerHTML = /* HTML */ `
      <div>
        <a href="https://github.com/ddoachi?tab=repositories">
        GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/ddoachi">
          ${new Date().getFullYear()}
          Joohan
        </a>
      </div>
    `
  }
}