# Promise 状态是什么

-   `pending` 变为 `resolved`
-   `pending` 变为 `rejected`

::: tip 说明：只有两种，且一个 promise 对象只能改变一次

无论变为成功还是失败，都会有一个结果数据

成功的结果数据一半成为 `value`，失败的结果数据一般成为 `reason`
:::

## Promise 状态

-   实例对象中的一个属性 `PromiseState`

*   `pending` 未决定的
*   `resolved` / `fullfilled` 成功
*   `rejected` 失败

## Promise 对象的值

-   实例对象的另一个属性 `PromiseResult`
-   保存着对象【成功/失败】的结果
*   `resolved`
*  ` rejected`
