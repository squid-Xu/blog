# 类私有属性


```js
class Person {
    age = 30; // 公用属性
    #name = 'squid-Xu'; // 私有属性

    sayHello() {
        console.log(`Hello, my name is ${this.#name}`);
    }
}

const person = new Person();
person.sayHello(); // Hello, my name is squid-Xu
console.log(person.age); // 30
console.log(person.#name); // 无法访问私有属性
```