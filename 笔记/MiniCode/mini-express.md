## express 缺点
express 的缺点：
1. 重路由的中间件设计。在 `express` 中所有中间件都会通过 `path-to-regexp` 去匹配路由正则，造成一定的性能下降 (较为有限)。
2. `querystring` 默认中间件。在 express 中，每次请求都内置中间件解析 qs，造成一定的性能下降 (在 koa 中为按需解析)。
3. 无 Context 的设计。express 把数据存储在 `req` 中，当然也可自定义 `req.context` 用以存储数据。
4. `res.send` 直接扔回数据，无 `ctx.body` 灵活。
5. 源码较难理解，且语法过旧，无 koa 代码清晰。
6. `express` 默认集成了许多中间件，如 static

## 匹配中间件
```js
// 对中间件的一层抽象
class Layer {
  //
  // 当注册路由 app.use('/users/:id', () => {}) 时，其中以下两个想想为 path 和 handle
  // path: /users/:id
  // handle: () => {}
  constructor (path, handle, options) {
    this.path = path
    this.handle = handle
    this.options = options
    this.keys = []
    // 根据 path，生政正则表达式
    this.re = pathToRegexp(path, this.keys, options)
  }

  // 查看请求路径是否匹配该中间件，如果匹配，则返回匹配的 parmas
  match (url) {
    const matchRoute = regexpToFunction(this.re, this.keys, { decode: decodeURIComponent })
    return matchRoute(url)
  }
}
```

## 收集中间件
```js
class Application {
  // 注册应用级中间件，收集所有的应用级中间至 this._router.stack 中，后将实现洋葱模型
  use (path, ...fns) {
    this._router.use(path, ...fns)
  }

  // 处理 http 的各种 verb，如 get、post、
  // 注册匿名应用级中间件
  get (path, ...fns) {
    const route = this._router.route(path)
    // 对于该应用级中间件所涉及到的所有路由级中间件，在 Route.prototype.get 中进行处理
    route.get(...fns)
  }
}

class Router {
  constructor () {
    // 收集所有应用级中间件
    this.stack = []
  }

  dispatch (req, res, done) {
	  let index = 0
	  const stack = this.stack
	  const next = () => {
	    const layer = stack[index++]
	
	    // 如果最后一个
	    if (!layer) { done() }
	    layer.handle(req, res, next)
	  }
	  next()
  }

  // 应用级中间件洋葱模型的实现
  handle (req, res) {
	  const stack = this.stack
	  let index = 0
	
	  // 调用下一个应用级中间件
	  const next = () => {
	    let layer
	    let match
	
	    while (!match && index < this.stack.length) {
	      layer = stack[index++]
	      // 查看请求路径是否匹配该中间件，如果匹配，则返回匹配的 parmas
	      match = layer.match(req.url)
	    }
	    // 遍历中间件，如果无一路径匹配，则状态码为 404
	    if (!match) {
	      res.status = 404
	      res.end('NOT FOUND SHANYUE')
	      return
	    }
	    req.params = match.params
	    // 处理中间件的函数，如果中间件中调用了 next()，则往下走下一个中间件
	    layer.handle(req, res, next)
	  }
	  next()
  }

  // 
  // app.use('/users/', fn1, fn2, fn3)
  // 此处路径在 express 中可省略，则默认为所有路径，为了更好地理解源码，此处不作省略
  use (path, ...fns) {
    for (const fn of fns) {
      const layer = new Layer(path, fn)
      this.stack.push(layer)
    }
  }

  // 注册应用级路由中间件，是一个匿名中间件，维护一系列关于该路径相关的路由级别中间件，
  route (path) {
    const route = new Route(path)
    // 该匿名中间件的 handleRequest 函数为将应用级中间挂载下的所有路由中间件串联处理
    // 对于路由级中间件，完全匹配，即 /api 将仅仅匹配 /api
    const layer = new Layer(path, route.dispatch.bind(route), { end: true }) 
    layer.route = route
    this.stack.push(layer)
    return route
  }
}
```

