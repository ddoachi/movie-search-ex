import { Store } from '../core/common'

interface State {
  chatText: string
  message: Message[]
  loading: boolean
}

interface Message {
  role: 'assitant' | 'user'
  content: string
}

const defaultMessages = [
  { role: 'assistant', content: '좋아하는 영화 장르나 제목을 알려주세요.'}
]

const store = new Store({
  chatText: '',
  messags: defaultMessages,
  loading: false
})

export default store
export const sendMessages = () => {
  if (!store.state.chatText.trim()) return
  if (store.state.loading) return
}
export const resetMessages = () => {}