// Component

interface ComponentPayload {
  tagName?: string,
  props?: {
    [key: string]: unknown
  }
  state?: {
    [key: string]: unknown
  }
}

export class Component {
  public el
  public props
  public state

  constructor(payload: ComponentPayload = {}) {
    const { 
      tagName = 'div',
      state = {},
      props = {},
    } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

interface Route {
  path: string
  component: typeof Component
}
type Routes = Route[]

//// Router ////
function routeRender(routes: Routes) {
  if (!location.hash) {
    history.replaceState(null, '', '#/');
  }
  const routerView = document.querySelector('router-view');
  const [hash, queryString = ''] = location.hash.split('?');

  interface Query {
    [key: string]: string
  }

  // a=123&b=456
  const query = queryString
    .split('&')
    .reduce((acc: Query, cur: string) => {
      const [key, value] = cur.split('=')
      acc[key] = value
      return acc
    }, {} as Query)
    history.replaceState(query, '');

  const currentRoute = routes
    .find(route => new RegExp(`${route.path}/?$`).test(hash));

  if (routerView) {
    routerView.innerHTML = '';
    currentRoute && routerView.append(new currentRoute.component().el)
  }

  window.scrollTo(0, 0);
}

export function createRouter(routes: Routes) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes);
    })
    routeRender(routes);
  }
}

interface StoreObservers {
  [key: string]: SubscribeCallback[]
}

interface SubscribeCallback {
  (arg: unknown): void
}

//// Store ////
export class Store<S> {
  public state = {} as S
  private observers = {} as StoreObservers

  constructor(state: S) {
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (value) => {
          state[key] = value
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach(observer => observer(value))
          }
        }
      })
    }
  }
  subscribe(key: string, cb: SubscribeCallback) {
    Array.isArray(this.observers[key])
    ? this.observers[key].push(cb)
    : this.observers[key] = [cb]
  }
}