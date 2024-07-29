# 类型

## 类型推断（不建议使用）
- 数据没有指定明确的类型，那么`ts`会按照类型推论的规则推断出一个类型

```js
let a = 'aa';
a = 'ss'; // 推断 str 为字符串类型
a = 10; //报错，不能将数值赋值给字符串类型
```

## 类型断言
- 类型断言（Type Assertion）可以用来手动指定一个值的类型

```js
let arr = [1, 2, 3];
let result = arr.find(v => v > 2) as number;
//ts比较严谨，若 result 为未定义的时候，则不能与 5 相乘，所以报错（在js中可以）
//所以加上 as number 来约束 result 的类型
let sum = result * 5;
```

## 基础类型 （建议使用）

```js
let b: number = 1;
let c: boolean = false;
```

## 联合类型
- 联合类型（Union Types）是一项强大特性，它允许一个变量可能是多个类型中的任意一种
- 可以使用 `|` 来连接多个类型（联合类型）

```js
// 联合类型：d 只能被分配 number 或 string 类型
let d: number | string = 'false';
```

## 数组
- 数组（Array）是一种用于存储多个值的数据结构

```js
let arr1: number[] = [1, 2, 3];

let arr2: Array<string> = ['a', 'b', 'c'];
```

## 元组
- 元组是一种表示具有固定数量和类型的有序元素集合的数据类型

```js
//'?'为可选项，该位置可不填，但是填了之后也只能是对应的类型
let e: [number, string, boolean?] = [1, 'w', false];
```

## 枚举
- 枚举（enum）是一种用于定义命名常量集合的数据类型

```js
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}

let color: Color = Color.Green;
console.log(color); // 输出 2

let colorName: string = Color[4];
console.log(colorName); // 输出 "Blue"
```

## 函数
- 函数是一种特殊的对象，可以被调用。TS 里的函数和原生，ES 6 里的函数差不太多，只是多了一些其他功能。

```js{9}
// a 和 b 规定了约束了参数的类型
// void 表示函数无返回值
function sum1(a: number, b: string): void {}
sum1(1, '2');

//b 和 c 都为可选项
//b 不填则默认为 10，c 不填默认没有
//...rest 为剩余参数，且剩余值为一个数组结构，则可对其进行约束，为...rest: number[]
//注意，必选参数在左，可选参数在右，否则报错
function MyFn2(a: boolean, b = 10, c?: string, ...rest: number[]): boolean {
 return a;
}
//使用
const f: boolean = MyFn2(true, 20, "zx", 1, 2, 3, 4, 5);
console.log(f);  //true 
```

## 接口
- 用来定义一个类、对象或函数的结构和类型的规范
```js
//正常定义对象类型
const obj = {
 name: "squid-Xu",
 age: 25,
};

//定义接口
interface objType {
	name: string;
	age: number;
}

//使用该接口来定义对象
let obj: objType = {
	name: 'squid-Xu',
	age: 11,
};
```

## 类型别名
-  `type` 关键字用于创建类型别名，它允许你为现有的类型创建一个新的名字

```js
type myType1 = number | string;
let f: myType1 = 'aaa';
```

## 泛型
- 泛型指的是在定义函数/接口/类型时，不预先指定具体的类型，而是在使用的时候在指定类型限制的一种特性

```js
function sum2<T>(a: T, b: T): T[] {
	return [a, b];
}

sum2<number>(1, 2);
```

## 函数重载
- 函数重载（Function Overloading）是指在 TypeScript 中定义多个同名函数，但是这些函数具有不同的参数类型或参数数量，从而让编译器能够根据传入的参数类型或数量来确定调用哪个函数

```js
function processData(data: string): void;
function processData(data: number): void;
function processData(data: boolean): void;
function processData(data: string | number | boolean): void {
  // 在函数实现中根据参数类型执行不同的业务逻辑
  if (typeof data === 'string') {
    // 处理字符串类型
  } else if (typeof data === 'number') {
    // 处理数字类型
  } else if (typeof data === 'boolean') {
    // 处理布尔类型
  }
}

// 示例使用
processData("hello"); // 调用第一个重载形式的函数
processData(123); // 调用第二个重载形式的函数
processData(true); // 调用第三个重载形式的函数
```

## 接口继承
- 接口继承允许一个接口继承一个或多个接口，‌从而获得这些接口中定义的数据类型约束


```js
interface parent {
	name: string;
	age: number;
}

interface child extends parent {
	a: boolean;
}

const myobj: child = {
	name: 'a',
	age: 11,
	a: false,
};
```

## 类
- 在TypeScript中，‌类通过class关键字来定义，‌具有属性（‌成员变量）‌和方法（‌函数）‌。
- ‌类可以定义公共（‌public）‌、‌私有（‌private）‌和受保护（‌protected）‌等访问修饰符来控制类成员的可访问性。‌

- 公共（‌public）‌：‌默认修饰符，‌可以在类的内部和外部访问。‌
- 私有（‌private）‌：‌只能在类的内部访问。‌
- 受保护（‌protected）‌：‌可以在类的内部和派生类中访问。‌

- 类还可以包含构造函数（‌constructor）‌，‌它在实例化类时被调用，‌用于初始化对象的属性。‌
- 通过继承，‌一个类可以从另一个类继承属性和方法，‌进一步扩展和重用代码。‌

```js
class Article {
	public title: string;
	public content: string;
	public a?: string;
	public b = 100;

	private d?: number; //私有属性,只能当前类内部使用

	protected e?: string; //受保护的,只能当前类和子类中使用

	static f: number; //静态属性，只能设置给类本身，而不是类的实例

	private static g: string; //私有静态属性
	private static readonly h: string = '88888'; //私有静态只读属性

	constructor(title: string, content: string) {
		this.title = title;
		this.content = content;
		Article.g = '111';
	}
}

const myArticle = new Article('你好', '测试 ');
Article.f = 4444;

class B extends Article {
	constructor(title: string, content: string) {
		super(title, content);
		this.e = '999';
	}
}
```

## 存取器
- 存取器（Accessors）通常指的是 getter 和 setter 方法。这些方法允许你控制对对象属性的访问和赋值，提供了一种封装和控制对象状态的方式

```js
class User {
	private _password: string = '';
	get password(): string {
		return '*******';
	}
	set password(new_password: string) {
		this._password = new_password;
	}
}

const user = new User();
```

## 抽象类
- 抽象类通过使用关键字 abstract 来定义，而抽象方法通过在方法前加上关键字 abstract 来定义。抽象类和抽象方法用于定义类的行为和结构，并且可以提供一些通用的实现或规范，以供子类继承和实现

#### 抽象类在面向对象编程中有以下特点：
- 不能直接实例化：抽象类不能被直接实例化，只能被继承后使用。
- 可以包含属性和方法：抽象类中可以定义属性和方法，可以有具体实现的方法和抽象方法。
- 可以包含抽象方法：抽象类中可以定义抽象方法，这些方法只有方法的声明而没有具体实现，需要在具体的子类中实现。
- 子类必须实现抽象方法：当一个类继承了抽象类时，它必须实现抽象类中的所有抽象方法。

```js
abstract class Animal {
	name: string = '11';
	abstract age: number;
	abstract say(): void;
	move() {
		console.log('000');
	}
}

class cat extends Animal {
	age: number = 20;
	say() {
		console.log('---');
	}
}
```

## 类实现接口

```js
interface A {
	a: string;
	get sound(): string;
	make(): void;
}
class A1 implements A {
	get sound(): string {
		throw new Error('Method not implemented.');
	}
	make(): void {
		throw new Error('Method not implemented.');
	}
	a: string = '000';
}
```

## 类与泛型结合

```js
class myClass<T> {
	public value: T;
	constructor(value: T) {
		this.value = value;
	}
	do() {
		console.log('处理数据', this.value);
	}
}

const aa = new myClass<number>(2);
```