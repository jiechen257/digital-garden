## 为什么使用 i 标签作为 icon？

1. 用 `<i>` 元素做图标在语义上是不正确的（虽然看起来像 icon 的缩写）；
2. `<i>` 比 `<span>` 短，但 gzip 后差异很小，不过打字可以少按三个键；
3. 多数图标用的是空 `<i>` 元素，配合 `::before` 伪元素实现，因为没有内容，读屏器不会朗读（这样即使有特殊处理也跳过了），机器理解起来应该也没什么影响
