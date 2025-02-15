import { Component } from '../core/common'

import chatStore from '../store/chatbot'

export default class ChatBot extends Component {
  render() {
    this.el.classList.add('chatbot')
    this.el.innerHTML = /* HTML */ `
      <div class="chats">
        <ul>
          ${chatStore.state.messages.map(msg => /* html */ `
            <li class="${msg.role}">
              ${msg.role === 'assistant' ? ( /* html */ `
                <div class="photo">
                  <span class="material-symbols-outlined">smart_toy</span>
                </div>
                `) : ''}
              ${msg.content}
            </li>
          `).join('')}
          ${chatStore.state.loading ? /* html */ `
            <li class="assistant">
                  <div class="photo">
                    <span class="material-symbols-outlined">smart_toy</span>
                  </div>
                  <div class="the-loader"></div>
            </li>
            ` : ''}
        </ul>
        <div class="input">
          <input />
          <button class="btn btn-primary">
            <span class="material-symbols-outlined icon--open">send</span>
          </button>
        </div>
      </div>
      <div class="btn btn-circle chat-starter">
        <span class="material-symbols-outlined icon--open">chat</span>
        <span class="material-symbols-outlined icon--close">close</span>
      </div>
    `

    const chatStarterEl = this.el.querySelector('.chat-starter')
    chatStarterEl?.addEventListener('click', () => {
      this.el.classList.toggle('chatbot--on')
      if (this.el.classList.contains('chatbot--on')) {
        window.addEventListener('click', () => {
          this.el.classList.remove('chatbot--on')
        })
      }
    })
  }
}