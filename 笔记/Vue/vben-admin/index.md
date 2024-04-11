::: info
source code: https://github.com/vbenjs/vue-vben-admin

tech stack: Vue3 + TypeScript + Vite4 + Pinia + Ant Design Vue
:::


## 布局

### Dashbord
先用 div 上下横屏，在利用 `@media (min-width: 768px)` 规则进行判断 flex 布局

```html
 <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card
        size="small"
        :loading="loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0":class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"   
         >
	    <Card/>
	</template>
</div>
```

> 使用 template 作为循环渲染的模板标签：
> - 语义化
> - 性能优化

## 事件
### 右键点击

```html
<!-- 右键点击事件 -->
 <a-button type="primary" @contextmenu="handleContext"> Right Click on me </a-button>
```

### 复制文本
```ts
export function copyText(text: string, prompt: string | null = '已成功复制到剪切板!') {
  if (navigator.clipboard) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        prompt && message.success(prompt);
      })
      .catch((error) => {
        message.error('复制失败!' + error.message);
        return error;
      });
  }
  if (Reflect.has(document, 'execCommand')) {
    return new Promise<void>((resolve, reject) => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // 在手机 Safari 浏览器中，点击复制按钮，整个页面会跳动一下
        textArea.style.width = '0';
        textArea.style.position = 'fixed';
        textArea.style.left = '-999px';
        textArea.style.top = '10px';
        textArea.setAttribute('readonly', 'readonly');
        document.body.appendChild(textArea);
        textArea.select(); // 先选中需要复制的内容
        document.execCommand('copy'); // 将选中的内容复制到剪贴板
        document.body.removeChild(textArea);

        prompt && message.success(prompt);
        resolve();
      } catch (error) {
        message.error('复制失败!' + error.message);
        reject(error);
      }
    });
  }
  return Promise.reject(`"navigator.clipboard" 或 "document.execCommand" 中存在API错误, 拷贝失败!`);
}
```

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

## Vue
### 全局注册组件

Vue 会自动检测到导出的组件是否具有 install 方法,并自动调用该方法进行全局注册

```ts
export const withInstall = <T extends CustomComponent>(component: T, alias?: string) => {
  (component as Record<string, unknown>).install = (app: App) => {
    const compName = component.name || component.displayName;
    if (!compName) return;
    app.component(compName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as WithInstall<T>;
};
```

