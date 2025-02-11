import { Component } from './core/common'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view');
    const header = new TheHeader().el
    const footer = new TheFooter().el

    this.el.append(
      header,
      routerView,
      footer
    );
  }
}