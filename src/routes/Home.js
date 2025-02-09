import { Component } from '../core/common'

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
      <h1>Hello World!</h1>
    `
  }
}