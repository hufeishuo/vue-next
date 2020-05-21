**索引签名**
```ts
[propName: string]: any;
```

**可索引的类型**
```ts
interface StringArray {
  [index: number]: string;
}
```

**generic**
类型变量： 只表示类型，而不是值。


**类型推论**
> 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]。


**类型断言**
> 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined


**类型别名**
类型别名不会新建一个类型，只是给已有类型创建了一个新的名字。

```ts
/**
 * 字符串字面类型用于函数重载
 */
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element;
function createElement(tagName){
    return document.createElement(tagName)    
}
createElement('p')
```

**类型别名和接口的区别**
1. 类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）
2. 接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字—比如，错误信息就不会使用别名


**never**
表示代码从不应该执行到此处，如果TS判定代码可能会有执行到此处的语句，则给出提示，防止出现漏判的case。


**映射类型**

Readonly 与 Partial 
Pick 和 Record


