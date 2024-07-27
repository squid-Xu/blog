# Promise 自定义封装


## 手写Promise

```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
    };

    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
};

let p = new myPromise((resolve, reject) => {
    //成功
    resolve(1);
    //失败
    reject(2);
    //抛出异常
    // throw '111';
});

// console.log(p);

p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
```


## 异步任务回调的执行


```js {6,17,29,52-55}
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callback = {};// [!code ++]

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callback.onResolved?.(this.PromiseResult);// [!code ++]
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callback.onRejected?.(this.PromiseResult);// [!code ++]
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
    //判断pending状态
    if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callback = {// [!code ++]
            onResolved,// [!code ++]
            onRejected,// [!code ++]
        };// [!code ++]
    }
};

let p = new myPromise((resolve, reject) => {
    //成功
    setTimeout(() => {// [!code ++]
        reject(2);
    }, 1000);// [!code ++]
});

p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
```

## 指定多个回调的实现

```js {6,17-19,32-34,58-61}
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => { // [!code ++]
            v.onResolved?.(this.PromiseResult); // [!code ++]
        }); // [!code ++]
        // this.callbacks.onResolved?.(this.PromiseResult);  // [!code --]
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => { // [!code ++]
            v.onRejected?.(this.PromiseResult); // [!code ++]
        }); // [!code ++]
        // this.callback.onRejected?.(this.PromiseResult); // [!code --]
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
    //判断pending状态
    if (this.PromiseState === 'pending') {
        // 保存回调函数
        this.callbacks.push({
            onResolved,
            onRejected,
        });
    }
};

let p = new myPromise((resolve, reject) => {
    //成功
    setTimeout(() => {
        reject(2);
    }, 1000);
});

p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);

console.log(p);
```

## 同步修改状态then方法返回结果


```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => {
            v.onResolved?.(this.PromiseResult);
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => {
            v.onRejected?.(this.PromiseResult);
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    return new myPromise((resolve, reject) => {
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            // 获取回调函数的执行结果
            let result = onResolved(this.PromiseResult);
            //判断
            if (result instanceof myPromise) {
                result.then(
                    v => {
                        resolve(v);
                    },
                    r => {
                        reject(r);
                    }
                );
            } else {
                // 结果的对象状态为成功
                resolve(result);
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved,
                onRejected,
            });
        }
    });
};

let p = new myPromise((resolve, reject) => {
    //成功
    resolve(2);
});

const res = p.then(
    value => {
        // return new myPromise((resolve, reject) => {
        // 	resolve('success');
        // });
        throw 'err';
    },
    reason => {
        console.log(reason);
    }
);

console.log(res);
```

## 异步修改状态then方法结果返回

```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => {
            v.onResolved?.(this.PromiseResult);
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => {
            v.onRejected?.(this.PromiseResult);
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    return new myPromise((resolve, reject) => {
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            try {
                // 获取回调函数的执行结果
                let result = onResolved(this.PromiseResult);
                //判断
                if (result instanceof myPromise) {
                    result.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: () => {
                    try {
                        // 获取回调函数的执行结果
                        let result = onResolved(this.PromiseResult);
                        //判断
                        if (result instanceof myPromise) {
                            result.then(
                                v => {
                                    resolve(v);
                                },
                                r => {
                                    reject(r);
                                }
                            );
                        } else {
                            // 结果的对象状态为成功
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: () => {
                    try {
                        // 获取回调函数的执行结果
                        let result = onRejected(this.PromiseResult);
                        //判断
                        if (result instanceof myPromise) {
                            result.then(
                                v => {
                                    resolve(v);
                                },
                                r => {
                                    reject(r);
                                }
                            );
                        } else {
                            // 结果的对象状态为失败
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
            });
        }
    });
};

let p = new myPromise((resolve, reject) => {
    setTimeout(() => {
        //成功
        reject(2);
    }, 1000);
});

const res = p.then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
        throw 'err';
    }
);

console.log(res);
```


## then方法完善和优化 (终极版)


```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => {
            v.onResolved?.(this.PromiseResult);
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => {
            v.onRejected?.(this.PromiseResult);
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    return new myPromise((resolve, reject) => {
        //封装函数
        const callback = method => {
            try {
                // 获取回调函数的执行结果
                let result = method(this.PromiseResult);
                //判断
                if (result instanceof myPromise) {
                    result.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        };
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onRejected: () => {
                    callback(onRejected);
                },
            });
        }
    });
};

let p = new myPromise((resolve, reject) => {
    // resolve(1);
    // reject(2);
    // setTimeout(() => {
    // 	resolve(1);
    // }, 1000);
    // setTimeout(() => {
    // 	reject(2);
    // }, 1000);
});

const res = p.then(
    value => {
        console.log(value);
        // return 11;
        // return Promise.resolve(1);
        // return Promise.reject(1);
        // throw '11';
    },
    reason => {
        console.log(reason);
        // return 22;
        // return Promise.resolve(22);
        // return Promise.reject(22);
        // throw '22';
    }
);

console.log(res);
```


## catch方法异常穿透已值传递


```js {47-56}
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => {
            v.onResolved?.(this.PromiseResult);
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => {
            v.onRejected?.(this.PromiseResult);
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    // 判断回调函数参数
    if (typeof onResolved !== 'function') {
        onResolved = value => {
            return value;
        };
    }
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        };
    }
    return new myPromise((resolve, reject) => {
        //封装函数
        const callback = method => {
            try {
                // 获取回调函数的执行结果
                let result = method(this.PromiseResult);
                //判断
                if (result instanceof myPromise) {
                    result.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        };
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onRejected: () => {
                    callback(onRejected);
                },
            });
        }
    });
};

// 添加catch方法
myPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

let p = new myPromise((resolve, reject) => {
    setTimeout(() => {
        reject(2);
    }, 1000);
});

p.then()
    .then(value => {
        console.log(value);
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log(reason);
    });
```

## resolve方法封装

```js{109-132}
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        this.callbacks.forEach(v => {
            v.onResolved?.(this.PromiseResult);
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        this.callbacks.forEach(v => {
            v.onRejected?.(this.PromiseResult);
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    // 判断回调函数参数
    if (typeof onResolved !== 'function') {
        onResolved = value => {
            return value;
        };
    }
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        };
    }
    return new myPromise((resolve, reject) => {
        //封装函数
        const callback = method => {
            try {
                // 获取回调函数的执行结果
                let result = method(this.PromiseResult);
                //判断
                if (result instanceof myPromise) {
                    result.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        };
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onRejected: () => {
                    callback(onRejected);
                },
            });
        }
    });
};

// 添加catch方法
myPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

// 添加 resolve 方法
myPromise.resolve = function (value) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        try {
            // 获取回调函数的执行结果
            //判断
            if (value instanceof myPromise) {
                value.then(
                    v => {
                        resolve(v);
                    },
                    r => {
                        reject(r);
                    }
                );
            } else {
                // 结果的对象状态为成功
                resolve(value);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let p1 = myPromise.resolve(
    new myPromise((resolve, reject) => {
        resolve(1);
    })
);
console.log(p1);
```

## reject方法封装

```js
// 添加 reject 方法
myPromise.reject = function (reason) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        reject(reason);
    });
};
```

## all方法封装


```js
// 添加 all 方法
myPromise.all = function (promises) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        //声明变量
        let count = 0;
        let arr = [];
        //遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                v => {
                    count++;
                    arr[i] = v;
                    //判断
                    if (count === promises.length) {
                        //修改状态
                        resolve(arr);
                    }
                },
                r => {
                    reject(r);
                }
            );
        }
    });
};
```
## race方法封装

```js
//添加 race 方法
myPromise.race = function (promises) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        //遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                v => {
                    resolve(v);
                },
                r => {
                    reject(r);
                }
            );
        }
    });
};
```

## 总结

```js
function myPromise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];

    // resolve函数
    const resolve = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'fulfilled'; // resolved
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步成功回调
        setTimeout(() => {
            this.callbacks.forEach(v => {
                v.onResolved?.(this.PromiseResult);
            });
        });
    };

    //reject函数
    const reject = data => {
        // 判断状态
        if (this.PromiseState !== 'pending') return;
        // 1、修改对象的状态（promiseState）
        this.PromiseState = 'rejected'; // rejected
        // 2、设置对象结果值（promiseResult）
        this.PromiseResult = data;
        //执行异步失败回调
        setTimeout(() => {
            this.callbacks.forEach(v => {
                v.onRejected?.(this.PromiseResult);
            });
        });
    };
    // 同步调用，【执行器函数】
    try {
        executor(resolve, reject);
    } catch (error) {
        // 修改promise对象状态为失败
        reject(error);
    }
}

// 添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {
    // 判断回调函数参数
    if (typeof onResolved !== 'function') {
        onResolved = value => {
            return value;
        };
    }
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        };
    }
    return new myPromise((resolve, reject) => {
        //封装函数
        const callback = method => {
            try {
                // 获取回调函数的执行结果
                let result = method(this.PromiseResult);
                //判断
                if (result instanceof myPromise) {
                    result.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        };
        //调用回调函数
        if (this.PromiseState === 'fulfilled') {
            setTimeout(() => {
                callback(onResolved);
            });
        }
        if (this.PromiseState === 'rejected') {
            setTimeout(() => {
                callback(onRejected);
            });
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onRejected: () => {
                    callback(onRejected);
                },
            });
        }
    });
};

// 添加catch方法
myPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

// 添加 resolve 方法
myPromise.resolve = function (value) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        try {
            // 获取回调函数的执行结果
            //判断
            if (value instanceof myPromise) {
                value.then(
                    v => {
                        resolve(v);
                    },
                    r => {
                        reject(r);
                    }
                );
            } else {
                // 结果的对象状态为成功
                resolve(value);
            }
        } catch (error) {
            reject(error);
        }
    });
};

// 添加 reject 方法
myPromise.reject = function (reason) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        reject(reason);
    });
};

// 添加 all 方法
myPromise.all = function (promises) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        //声明变量
        let count = 0;
        let arr = [];
        //遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                v => {
                    count++;
                    arr[i] = v;
                    //判断
                    if (count === promises.length) {
                        //修改状态
                        resolve(arr);
                    }
                },
                r => {
                    reject(r);
                }
            );
        }
    });
};
//添加 race 方法
myPromise.race = function (promises) {
    // 返回Promise对象
    return new myPromise((resolve, reject) => {
        //遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                v => {
                    resolve(v);
                },
                r => {
                    reject(r);
                }
            );
        }
    });
};

let p1 = new myPromise((resolve, reject) => {
    resolve(1);
    console.log(2);
});
p1.then(value => {
    console.log(value);
});
console.log(3);
// 2  3  1
```

## class版本实现

```js
class myPromise {
    //构造方法
    constructor(executor) {
        //添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        //声明属性
        this.callbacks = [];

        // resolve函数
        const resolve = data => {
            // 判断状态
            if (this.PromiseState !== 'pending') return;
            // 1、修改对象的状态（promiseState）
            this.PromiseState = 'fulfilled'; // resolved
            // 2、设置对象结果值（promiseResult）
            this.PromiseResult = data;
            //执行异步成功回调
            setTimeout(() => {
                this.callbacks.forEach(v => {
                    v.onResolved?.(this.PromiseResult);
                });
            });
        };

        //reject函数
        const reject = data => {
            // 判断状态
            if (this.PromiseState !== 'pending') return;
            // 1、修改对象的状态（promiseState）
            this.PromiseState = 'rejected'; // rejected
            // 2、设置对象结果值（promiseResult）
            this.PromiseResult = data;
            //执行异步失败回调
            setTimeout(() => {
                this.callbacks.forEach(v => {
                    v.onRejected?.(this.PromiseResult);
                });
            });
        };
        // 同步调用，【执行器函数】
        try {
            executor(resolve, reject);
        } catch (error) {
            // 修改promise对象状态为失败
            reject(error);
        }
    }
    // 添加then方法
    then(onResolved, onRejected) {
        // 判断回调函数参数
        if (typeof onResolved !== 'function') {
            onResolved = value => {
                return value;
            };
        }
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            };
        }
        return new myPromise((resolve, reject) => {
            //封装函数
            const callback = method => {
                try {
                    // 获取回调函数的执行结果
                    let result = method(this.PromiseResult);
                    //判断
                    if (result instanceof myPromise) {
                        result.then(
                            v => {
                                resolve(v);
                            },
                            r => {
                                reject(r);
                            }
                        );
                    } else {
                        // 结果的对象状态为成功
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };
            //调用回调函数
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            //判断pending状态
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: () => {
                        callback(onResolved);
                    },
                    onRejected: () => {
                        callback(onRejected);
                    },
                });
            }
        });
    }
    // 添加catch方法
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    // 添加 resolve 方法
    static resolve(value) {
        // 返回Promise对象
        return new myPromise((resolve, reject) => {
            try {
                // 获取回调函数的执行结果
                //判断
                if (value instanceof myPromise) {
                    value.then(
                        v => {
                            resolve(v);
                        },
                        r => {
                            reject(r);
                        }
                    );
                } else {
                    // 结果的对象状态为成功
                    resolve(value);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    // 添加 reject 方法
    static reject(reason) {
        // 返回Promise对象
        return new myPromise((resolve, reject) => {
            reject(reason);
        });
    }

    // 添加 all 方法
    static all(promises) {
        // 返回Promise对象
        return new myPromise((resolve, reject) => {
            //声明变量
            let count = 0;
            let arr = [];
            //遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    v => {
                        count++;
                        arr[i] = v;
                        //判断
                        if (count === promises.length) {
                            //修改状态
                            resolve(arr);
                        }
                    },
                    r => {
                        reject(r);
                    }
                );
            }
        });
    }
    //添加 race 方法
    static race(promises) {
        // 返回Promis e对象
        return new myPromise((resolve, reject) => {
            //遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(
                    v => {
                        resolve(v);
                    },
                    r => {
                        reject(r);
                    }
                );
            }
        });
    }
}
```