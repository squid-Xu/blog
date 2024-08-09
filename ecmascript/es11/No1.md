# 私有属性


```js
class Person {
    // 公用属性
    name;
    //私有属性
    #age;
    #weight;
    //构造方法
    constructor(name, age, weight) {
        this.name = name;
        this.#age = age;
        this.#weight = weight;
    }
    intro() {
        return {
            name: this.name,
            age: this.#age,
            weight: this.#weight,
        };
    }
}

//实例化
let girl = new Person('小兰', 18, 45);

console.log(girl); //Person {name: '小兰', #age: 18, #weight: 45}
console.log(girl.name); //小兰
// console.log(girl.#age); // Private field '#age' must be declared in an enclosing class
// console.log(girl.#weight); //Private field '#weight' must be declared in an enclosing class

console.log(girl.intro()); // {name: '小兰', age: 18, weight: 45}
console.log(girl.intro().age); //18
```