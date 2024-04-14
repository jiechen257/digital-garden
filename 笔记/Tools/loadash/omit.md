```js
function omit(obj, keysToOmit) {
  // 参数类型检查
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('First argument must be an object');
  }
  if (!Array.isArray(keysToOmit)) {
    throw new TypeError('Second argument must be an array');
  }
  
  // 参数为空的情况
  if (Object.keys(obj).length === 0 || keysToOmit.length === 0) {
    return { ...obj };
  }

  // 创建一个新的对象，用于存储移除指定属性后的结果
  const newObj = {};
  
  // 遍历原始对象的属性
  for (const key in obj) {
    // 检查当前属性是否为对象自身属性（不包括原型链上的属性）
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 对象属性值为 null 或 undefined，则不添加到新对象中
      if (obj[key] === null || obj[key] === undefined) {
        continue;
      }
      // 跳过 Symbol 类型的属性
      if (typeof key === 'symbol') {
        continue;
      }
      // 检查当前属性是否在要移除的属性列表中
      if (!keysToOmit.includes(key)) {
        // 如果不在要移除的列表中，则将该属性添加到新对象中
        newObj[key] = typeof obj[key] === 'object' ? omit(obj[key], keysToOmit) : obj[key];
      }
    }
  }
  
  // 返回新对象
  return newObj;
}
```
