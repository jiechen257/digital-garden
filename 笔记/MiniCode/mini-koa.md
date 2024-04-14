## 原生的 http 框架

```js
const http = require('http')
const server = http.createServer((req, res) => { res.end('hello world') })
server.listen(3000)
```

## 洋葱模型示例

```js
const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
	console.log('middleware 1 start')
	await next()
	console.log('middleware 1 start')
})

app.use(async (ctx, next) => {
	console.log('middleware 2 start')
	await next()
	console.log('middleware 2 end')
	ctx.body = 'hello world'
})

app.listen(3000)
// middleware 1 start
// middleware 2 start
// middleware 2 end
// middleware 1 end
```

三个组成：
- Application: 基本服务框架
- Context: 框架对请求和响应上下文的封装
- Middleware：中间件

## Application 应用的构建

首先实现基础的服务框架

```js
const http = require('http')

class Application {
	constructor () {
		this.middleware = null	
	}

	listen (...args) {
		const server = http.createServer(this.middleware)	
		server.listen(..args)
	}

	use (middleware) {
		this.middleware = middleware
	}
}
```

## Context 上下文的组装

> 注意到 koa 中是使用 `ctx.body` 来写入响应

- 使用 `Context(req, res)` 封装 `request/response` ，构造 Context 对象

```js
const http = require('http')

class Application {
	constructor () {}
	use () {}

	listen (...args) {
		const server = http.createServer((req, res) => {
			// 存储上下文
			const ctx = new Context(req, res)	
			
			this.middleware(ctx)
			
			// ctx.body 写入等价
			ctx.res.end(ctx.body)
		})	
	}
}

class Context {
	constructor (req, res) {
		this.req = req
		this.res = res	
	}
}
```

## Middleware 中间件的集成

现实场景中，middleware 肯定是多个，如错误处理、日志、权限校验、限流等

那么 `app.middlewares` 肯定是一个数组，为了整合每个中间件的逻辑使用，使用一个 `compose` 进行聚合

```js
const http = require('http')

class Application {
  constructor () {
    this.middlewares = []
  }

  listen (...args) {
    const server = http.createServer(async (req, res) => {
      const ctx = new Context(req, res)

      // 对中间件回调函数串联，形成洋葱模型
      // 1. 路由解析
      // 2. Body解析
      // 3. 异常处理
      // 4. 统一认证
      // 5. 等等...
      const fn = compose(this.middlewares)
      await fn(ctx)

      ctx.res.end(ctx.body)
    })
    server.listen(...args)
  }

  use (middleware) {
    // 中间件回调函数变为了数组
    this.middlewares.push(middleware)
  }
}
```

每个中间件的 `next` 是执行下一个中间件，我们怎么知道下一个 next 的下一个 next 是什么？
—— 递归

```js
// compose函数
function compose (middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if (i === middlewares.length) {
        return
      }
      return middleware(ctx, () => dispatch(i+1))
    }
    return dispatch(0)
  }
}
```

## 异常处理

```js

// 全局处理
try {
  const fn = compose(this.middlewares)
  await fn(ctx)
} catch (e) {
  console.error(e)
  ctx.res.statusCode = 500
  ctx.res.write('Internel Server Error')
}

// 使用中间件进行处理
app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    // 1. 异常结构化
    // 2. 异常分类
    // 3. 异常级别
    // 4. 异常上报
  }
})
```

## 综上

```js
// [http 模块](https://nodejs.org/api/http.html)，构建 Node 框架的核心 API
const http = require('http')

// koa 团队通过额外实现一个库: [koa-compose](https://github.com/koajs/compose)，来完成洋葱模型的核心，尽管 koa-compose 的核心代码只有十几行
// 以下是洋葱模型的核心实现，可参考 [简述 koa 的中间件原理，手写 koa-compose 代码](https://github.com/shfshanyue/Daily-Question/issues/643)
function compose (middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if (i === middlewares.length) {
        return
      }
      //
      // app.use((ctx, next) => {})
      // 取出当前中间件，并执行
      // 当在中间件中调用 next() 时，此时将控制权交给下一个中间件，也是洋葱模型的核心
      // 如果中间件未调用 next()，则接下来的中间件将不会执行
      return middleware(ctx, () => dispatch(i+1))
    }
    // 从第一个中间件开始执行
    return dispatch(0)
  }
}


// 在 koa 代码中，使用 Context 对 req/res 进行了封装
// 并把 req/res 中多个属性代理到 Context 中，方便访问
class Context {
  constructor (req, res) {
    this.req = req
    this.res = res
  }
}

class Application {
  constructor () {
    this.middlewares = []
  }

  listen (...args) {
    // 在 listen 中处理请求并监听端口号
    const server = http.createServer(this.callback())
    server.listen(...args)
  }

  // 在 koa 中，app.callback() 将返回 Node HTTP API标准的 handleRequest 函数，方便测试
  callback () {
    return async (req, res) => {
      const ctx = new Context(req, res)

      // 使用 compose 合成所有中间件，在中间件中会做一些
      // 1. 路由解析
      // 2. Body解析
      // 3. 异常处理
      // 4. 统一认证
      // 5. 等等...
      const fn = compose(this.middlewares)

      try {
        await fn(ctx)
      } catch (e) {
        // 最基本的异常处理函数，在实际生产环境中，将由一个专业的异常处理中间件来替代，同时也会做
        // 1. 确认异常级别
        // 2. 异常上报
        // 3. 构造与异常对应的状态码，如 429、422 等
        console.error(e)
        ctx.res.statusCode = 500
        ctx.res.end('Internel Server Error')
      }
      ctx.res.end(ctx.body)
    }
  }

  // 注册中间件，并收集在中间件数组中
  use (middleware) {
    this.middlewares.push(middleware)
  }
}

module.exports = Application
```
