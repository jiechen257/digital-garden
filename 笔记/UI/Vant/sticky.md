## 导入类型 type 的方式

```ts
import {
  ref,
  watch,
  computed,
  nextTick,
  reactive,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from "vue";
```

## DOM 结构

```jsx
<div ref={root} style={rootStyle.value}>
  <div
    class={bem({ fixed: state.fixed && !isReset.value })}
    style={stickyStyle.value}
  >
    {slots.default?.()}
  </div>
</div>
```

## 核心计算逻辑

```ts
// onScroll
const rootRect = useRect(root);

if (position === "top") {
  if (container) {
    const containerRect = useRect(container);
    state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
    // 用以处理 stickyArea 的消失实现平滑过渡
    const difference = containerRect.bottom - offset.value - state.height;
    state.transform = difference < 0 ? difference : 0;
  } else {
    state.fixed = offset.value > rootRect.top; // 最简单的情况
  }
} else {
  const { clientHeight } = document.documentElement;
  if (container) {
    const containerRect = useRect(container);
    const difference =
      clientHeight - containerRect.top - offset.value - state.height;
    state.fixed =
      clientHeight - offset.value < rootRect.bottom &&
      clientHeight > containerRect.top;
    state.transform = difference < 0 ? -difference : 0;
  } else {
    state.fixed = clientHeight - offset.value < rootRect.bottom;
  }
}
```

## 细节处理

滚动事件的处理时机

```ts
// 页面加载后，初始化滚动状态
// 如果组件使用的是 container ，那么当滚动组件消失在视图，需要 unObserve 滚动事件，做到性能提升
useVisibilityChange(root, onScroll);

// 持续监听滚动状态
useEventListener("scroll", onScroll, {
  target: scrollParent,
  passive: true,
});
```

stickyArea 的平滑过渡

```ts
const stickyStyle = computed<CSSProperties | undefined>(() => {
  if (state.transform) {
    // 如果组件指定了 container 那么会有 transform
    // 指在消除元素由 sticky 突变为 static 时的突然消失的问题，实现平滑过渡
    style.transform = `translate3d(0, ${state.transform}px, 0)`;
  }
});
```

窗口视图发生改变

```ts
watch([windowWidth, windowHeight], () => {
  if (!root.value || isHidden(root) || !state.fixed) {
    return;
  }
  isReset.value = true;
  nextTick(() => {
    const rootRect = useRect(root);
    state.width = rootRect.width;
    state.height = rootRect.height;
    isReset.value = false;
  });
});
```

## 疑问

### 为什么定义组件要用 defineComponent
