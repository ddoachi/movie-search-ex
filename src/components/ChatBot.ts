import { Component } from '../core/common'

import chatStore from '../store/chatbot'

export default class ChatBot extends Component {
  render() {
    this.el.classList.add('chatbot')
    this.el.innerHTML = /* HTML */ `
      <div class="chats">
      </div>
      <div class="btn btn-circle chat-starter">
        <span class="material-symbols-outlined icon--open">chat</span>
        <span class="material-symbols-outlined icon--close">close</span>
      </div>
    `
  }
}