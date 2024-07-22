<template>
    <div v-if="isLocked" class="content-wrapper">
        <div class="content">
            <img src="/lock.svg" class="lock icon-img" alt="">
            <input v-model="passwordInput" type="password" @keydown.enter="unlockPage" class="password"
                placeholder="口令" />
            <p class="error">{{ error }}</p>
        </div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script setup>
import CryptoJS from 'crypto-js';
import { ref } from 'vue';

const correctHash = import.meta.env.VITE_PAGE_PASSWORD_HASH; // 从环境变量中获取哈希值
const salt = import.meta.env.VITE_PAGE_PASSWORD_SALT; // 从环境变量中获取盐
const passwordInput = ref('');
const isLocked = ref(true);
const error = ref('');

const unlockPage = () => {
    const hash = CryptoJS.SHA256(passwordInput.value + salt).toString();
    if (hash === correctHash) {
        const unlockData = {
            unlocked: true,
            timestamp: new Date().getTime(),
        };
        localStorage.setItem('squid-Xu-Token', JSON.stringify(unlockData));
        isLocked.value = false;
        error.value = '';
    } else {
        error.value = '密码错误，请重试';
    }
};

// 检查本地存储中是否已有解锁标记且未过期
const storedData = localStorage.getItem('squid-Xu-Token');
if (storedData) {
    const { unlocked, timestamp } = JSON.parse(storedData);
    const currentTime = new Date().getTime();
    const expirationTime = 24 * 60 * 60 * 1000; // 24小时
    if (unlocked && currentTime - timestamp < expirationTime) {
        isLocked.value = false;
    }
}
</script>
<style scoped>
.content-wrapper {
    width: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    width: 70%;
    padding: 70px 50px 100px;
    box-sizing: border-box;
    background: url('/download.svg');
    background-size: cover;
    backdrop-filter: sepia(0.4);
    border-radius: 10px;
    box-shadow: 0 0 300px #c5c8ce;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lock {
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
}

.password {
    display: inline-block;
    width: 100%;
    font-size: 16px;
    padding: 6px 7px;
    height: 40px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
}

.error {
    height: 50px;
    color: red;
}
</style>