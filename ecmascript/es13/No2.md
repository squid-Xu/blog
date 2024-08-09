# 私有字段检查


- 一种新的访问控制，允许类的私有属性在外部被访问时触发特定的操作。


```js
class BankAccount {
    #balance = 1000; // 私有属性

    #checkAccess() {
        console.log('Access to balance checked');
    }

    get balance() {
        this.#checkAccess();
        return this.#balance;
    }
}

const account = new BankAccount();
console.log(account.balance); // 输出: 'Access to balance checked' 和账户余额
```