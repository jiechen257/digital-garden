::: info
source code: https://github.com/HalseySpicy/Geeker-Admin

tech stack: vue3 + TypeScript + Vite4 + Pinia + Element-Plus
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
