import { createRouter } from '../core/common'
import Home from './Home'
import Movie from './Movie'

export default createRouter([
  {path: '#/', component: Home },
  {path: '#/movie', component: Movie }
  {path: '#/about', component: About }
])
