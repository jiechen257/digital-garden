::: info
source code: https://github.com/vbenjs/vue-vben-admin

tech stack: Vue3 + TypeScript + Vite4 + Pinia + Ant Design Vue
:::


## ProTable 组件

dom 结构

```html
<template>
	<SearchForm> </SearchForm>

	<!-- 表格内容 -->
	<div class="table">

		<!-- 表格头部内容 -->
		<div class="table-header">
			<!-- 操作区域 - 自定义插槽 -->
			<slot class="table-header-lf">
				<!-- 自定义内容 -->
			</slot>
			<!-- 表格自带格式化操作 - 刷新表格内容、打印、表格列设置、搜索按钮设置 -->
			<div class="table-header-rt"></div>
		</div>

    <div>
      <!-- 表格内容 -->
      <!-- 无数据时的空页面 -->
    </div>
	</div>

</template>
```


## 为什么不？

### 双重断言
```ts
  const ENV = import.meta.env.DEV
    ? // Get the global configuration (the configuration will be extracted independently when packaging)
      (import.meta.env as unknown as GlobEnvConfig)
    : (window[ENV_NAME] as unknown as GlobEnvConfig);
```

> 为什么不能直接使用 `as GlobEnvConfig`?

直接使用 `as GlobEnvConfig` 会导致类型不匹配的错误,因为 TypeScript 无法确定 `import.meta.env` 是否真的符合 `GlobEnvConfig` 类型的结构

通过使用双重断言,先将其转换为 `unknown` 类型,然后再转换为 `GlobEnvConfig` 类型,可以绕过 TypeScript 的类型检查,并确保代码可以正常运行

—— 这种方式虽然不太优雅,但在某些情况下是必要的,比如处理动态类型或者不确定的数据结构时

## Tips
### 用好 `unref()`

```ts
const route = unref(currentRoute);

// currentRoute.value.name
if (route.name === REDIRECT_NAME) {
	return;
}
```
### 函数中应用可选链式符
```js
// 1
obj.func?.()

// 2
obj?.['func']()

//3
fun?.(arg1, arg2)
```

### .unRef 和 toRaw
-  `toRaw()` 可以返回由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)、[`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly)、[`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 或者 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理对应的原始对象
- val = isRef(val) ? val.value : val

```ts
  const getUnFixedAndFull = computed(() => !unref(getFixed) && !unref(getShowFullHeaderRef));


// 利用 unRef 的自动推导类型
export function useAppInject() {
  const values = useAppProviderContext();

  return {
	  // 响应式不会丢失
    getIsMobile: computed(() => unref(values.isMobile)),
  };
}
```


### 为 obj 的 key 赋默认值
```ts
export function useContext<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any,
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {});
}
```

