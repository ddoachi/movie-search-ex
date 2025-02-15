import { Component } from '../core/common'

import chatStore, { sendMessages } from '../store/chatbot'

export default class ChatBot extends Component {
  constructor() {
    super()
    chatStore.subscribe('messages', () => this.render())
    chatStore.subscribe('loading', () => this.render())
  }
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

    const inputEl = this.el.querySelector('input')
    inputEl?.addEventListener('keydown', (event) => {
      if (event instanceof KeyboardEvent && event.key === 'Enter') {
        sendMessages()
      }
    })

    const buttonEl = this.el.querySelector('.input .btn')
    buttonEl?.addEventListener('click', () => {
      sendMessages()
    })

    const chatStarterEl = this.el.querySelector('.chat-starter')
    chatStarterEl?.addEventListener('click', (event) => {
      event.stopPropagation()
      this.el.classList.toggle('chatbot--on')
      const offChats = () => this.el.classList.remove('chatbot--on')
      if (this.el.classList.contains('chatbot--on')) {
        window.addEventListener('click', offChats)
        setTimeout(() => inputEl?.focus(), 300) // wait for the animation
      } else {
        window.removeEventListener('click', offChats)
      }
    })

    const chatsEl = this.el.querySelector('.chats')
    chatsEl?.addEventListener('click', (event) => {
      event.stopPropagation()
    })
  }
}