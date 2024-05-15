## DOM 结构

```jsx
<div ref={root} role="feed" class={bem()} aria-busy={loading.value}>
  {props.direction === "down" ? Content : Placeholder}
  {renderLoading()}
  {renderFinishedText()}
  {renderErrorText()}
  {props.direction === "up" ? Content : Placeholder}
</div>
```

## 核心处理逻辑

```ts
// 监听事件
useEventListener("scroll", check, {
  target: scrollParent,
  passive: true,
});
```

```ts
const check = () => {
  nextTick(() => {
    if (
      loading.value ||
      props.finished ||
      props.disabled ||
      props.error ||
      // skip check when inside an inactive tab
      tabStatus?.value === false
    ) {
      return;
    }

    const { direction } = props;
    const offset = +props.offset;
    const scrollParentRect = useRect(scroller);

    if (!scrollParentRect.height || isHidden(root)) {
      return;
    }

    let isReachEdge = false;
    const placeholderRect = useRect(placeholder);

    if (direction === "up") {
      // 监听计算是否到达边缘
      isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
    } else {
      isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset;
    }

    if (isReachEdge) {
      loading.value = true;
      emit("update:loading", true);
      emit("load");
    }
  });
};
```

## 细节处理

当窗口激活时，触发 `check` 函数

```ts
if (tabStatus) {
  watch(tabStatus, (tabActive) => {
    if (tabActive) {
      check();
    }
  });
}
```

组件内部 loading 状态的改变在 `onUpdated` 之后

```ts
// bad
watchEffect(() => {
  loading.value = props.loading!;
});
// good —— 确保 dom 已经更新，而后续的状态更新并不会影响 DOM 变化
onUpdated(() => {
  loading.value = props.loading!;
});
```
