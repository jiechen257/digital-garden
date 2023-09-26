> source code: https://github.com/HalseySpicy/Hooks-Admin

## import.meta.globEager

vite 中的方法，可以一次性导入多个文件，返回一个对象，key 为文件名，value 为文件内容

```js
import.meta.globEager("./**/*.js");
```

等价于

```js
const modules = {
	"./a.js": () => import("./a.js"),
	"./b.js": () => import("./b.js"),
	"./c.js": () => import("./c.js"),
};
```

## axios 的封装方式

使用 class 类封装，返回时 `return new Class()` 实例

```ts
const config = {}

class RequestHttp {
  service: AxiosInstance;
  constructor(config) {
    // ...
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      (config) => {
        // ...
        return config
      },
      (error) => {
        // ...
        return Promise.reject(error)
      }
    )
    this.service.interceptors.response.use(
      (response) => {
        // ...
        return response
      },
      (error) => {
        // ...
        return Promise.reject(error)
      }
    )
    )
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, data?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.post(url, data, _object)
  }
  put<T>(url: string, data?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.put(url, data, _object)
  }
  delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new RequestHttp(config)
```
