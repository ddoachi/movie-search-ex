import { Store } from '../core/common'

interface State {
  photo: string
  name: string
  email: string 
  blog:  string
  github:  string
  repository:  string
}


export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Joohan Kim',
  email: 'ddoachi@gmail.com',
  blog: 'https://velog.io/@ddoachi/posts',
  github: 'https://github.com/ddoachi',
  repository: 'https://github.com/ddoachi/movie-search-ex'
})