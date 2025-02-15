import { Store } from '../core/common'

interface State {
  chatText: string
  messages: Message[]
  loading: boolean
}

interface Message {
  role: 'assitant' | 'user'
  content: string
}

const defaultMessages = [
  { role: 'assistant', content: '좋아하는 영화 장르나 제목을 알려주세요.'},
  { role: 'user', content: '재미있는 액션 영화를 추천해 줘.'},
  { role: 'assistant', content: '키아누 리브스가 주연으로 출연한 영화 존윅을 추천합니다.'},
]

const store = new Store({
  chatText: '',
  messages: defaultMessages,
  loading: true
})

export default store
export const sendMessages = async () => {
  if (!store.state.chatText.trim()) return
  if (store.state.loading) return

  store.state.loading = true
  store.state.messages = [
    ...store.state.messages,
    {role: 'user', content: store.state.chatText}
  ]

  try {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({
        messages: store.state.messages
      })
    })

    const message = await res.json()
    store.state.messages = [
      ...store.state.messages,
      message
    ]

    store.state.chatText = ''
  } catch (error) {
    console.log('sendMessage error:', error)
  } finally {
    store.state.loading = false
  }

}
export const resetMessages = () => {
  store.state.messages = defaultMessages
}