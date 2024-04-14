::: info
source code: https://github.com/qifengzhang007/GinSkeleton

tech stack: Gin + GORM
:::

## 目录结构

```shell
|-- app
|   |-- aop		// Aop切面demo代码段
|   |   `-- users
|   |-- core		// 程序容器部分、用于表单参数器注册、配置文件存储等
|   |   |-- container
|   |   |-- destroy
|   |   `-- event_manage
|   |-- global		// 全局变量以及常量、程序运行错误定义
|   |   |-- consts
|   |   |-- my_errors
|   |   `-- variable
|   |-- http		// http相关代码段，主要为控制器、中间件、表单参数验证器
|   |   |-- controller
|   |   |-- middleware
|   |   `-- validator
|   |-- model		// 数据库表模型
|   |   |-- base_model.go
|   |   `-- users.go
|   |-- service
|   |   |-- sys_log_hook
|   `-- utils	// 第三方包封装层
|       |-- gorm_v2
|       |-- ... ...
|-- bootstrap	// 项目启动初始化代码段
|   `-- init.go
|-- cmd			// 项目入口，分别为门户站点、命令模式、web后端入口文件
|   |-- api
|   |   `-- main.go
|   |-- cli
|   |   `-- main.go
|   `-- web
|       `-- main.go
|-- command		// cli模式代码目录
|   |--
|-- config		// 项目、数据库参数配置
|   |-- config.yml
|   `-- gorm_v2.yml
|-- database
|-- docs		// 项目文档
|   |--
|-- go.mod
|-- go.sum
|-- public
|-- routers		// 后台和门户网站路由
|   |-- api.go
|   `-- web.go
|-- storage		// 日志、资源存储目录
|   `--
`-- test// 单元测试目录
    |--
```

## 项目启动流程

### 初始化

```go
// bootstrap/init.go
func init() {
  // 1.初始化 项目根路径
  // 2.检查配置文件以及日志目录等非编译性的必要条件
  // 3.初始化表单参数验证器，注册在容器
  // 4.启动针对配置文件(confgi.yml、gorm_v2.yml)变化的监听
  // 5.初始化全局日志句柄，并载入日志钩子处理函数
  // 6.根据配置初始化 gorm mysql 全局 *gorm.Db
  // 7.雪花算法全局变量
  // 8.websocket Hub中心启动
}
```

#### 雪花算法

生成唯一 UID
