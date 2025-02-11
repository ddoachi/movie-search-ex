import { Component } from './core/common'
import TheHeader from './components/TheHeader'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view');
    const header = new TheHeader().el

    this.el.append(
      header,
      routerView);
  }
}