import { Component } from '../core/common'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }

  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = /* HTML */ `
      <div>
        <a href=${repository}>
        GitHub Repository
        </a>
      </div>
      <div>
        <a href=${github}>
          ${new Date().getFullYear()}
          Joohan
        </a>
      </div>
    `
  }
}