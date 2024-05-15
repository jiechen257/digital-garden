## DOM 结构

```jsx
<div ref={root} class={bem()}>
  <div
    ref={track}
    class={bem("track")}
    style={trackStyle}
    onTouchstartPassive={onTouchStart}
    onTouchend={onTouchEnd}
    onTouchcancel={onTouchEnd}
  >
    <div class={bem("head")} style={getHeadStyle()}>
      {renderStatus()}
    </div>
    {slots.default?.()}
  </div>
</div>
```

## 处理逻辑

主要是在`onTouchStart`、`onTouchMove`、`onTouchEnd`几个触摸事件上
- touchStart: 记录屏幕的起始位置
- touchMove: 计算下拉距离，更新状态
- touchEnd: 根据下拉距离决定是否触发 loosing 以及 刷新

```ts
const state = reactive({
  status: "normal" as PullRefreshStatus,
  distance: 0,
  duration: 0,
});

const setStatus = (distance: number, isLoading?: boolean) => {
  const pullDistance = +(props.pullDistance || props.headHeight);
  state.distance = distance;

  if (isLoading) {
    state.status = "loading";
  } else if (distance === 0) {
    state.status = "normal";
  } else if (distance < pullDistance) {
    state.status = "pulling";
  } else {
    state.status = "loosing";
  }

  emit("change", {
    status: state.status,
    distance,
  });
};
```
