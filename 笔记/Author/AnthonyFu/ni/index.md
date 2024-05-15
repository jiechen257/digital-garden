::: info
source code: https://github.com/antfu-collective/ni

tech stack: NodeJS

function: use the right package manager
:::

实现逻辑：

1. 硬编码记录不同的 packageManager 对应的 agent 配置信息，用以之后的命令匹配使用
2. 通过 `detect` 识别当前项目的 lock-file，明确是哪个 packageManager
3. 通过 `parse` 和 `config` 解析变化得到相应的 command-line
4. 通过 `runner` 执行相应的 command-line

## ni

```ts
runCli(parseNi);
```

### 第三方依赖包的作用

- kleur
  - formatting terminal text with ANSI colors
- execa
  - runs commands in your script, application or library
- ini
  - An INI format parser & serializer.
- find-up
  - Find a file or directory by walking up parent directories

### 语法

#### 两个 if 的区别

```ts
if (
  args.length === 1 &&
  (args[0]?.toLowerCase() === "-v" || args[0] === "--version")
) {****
  // Version handling code here
  return;
}

if (args.length === 1 && (args[0] === "--version" || args[0] === "-v")) {
  // do something
  return;
}
```
