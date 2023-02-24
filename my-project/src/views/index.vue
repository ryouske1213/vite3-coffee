<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userName = ref('');
const password = ref('');
const logins = ref(true);
const router = useRouter();

function login() {
    if (userName.value === 'test' && password.value === '1234') {
        localStorage.setItem('token', 'ImLogin')
        logins.value = false;
        router.push('/home')
    }
}


</script>

<template>
    <div v-if="logins">
        <div class="w-full min-h-screen flex flex-col justify-center items-center">
            <div class="w-[300px] text-lg font-bold border bg-gray-400">
                <div class="flex w-full justify-start mt-2">
                    <p class="mx-2">帳號:</p>
                    <input type="text" v-model="userName">
                </div>
                <div class="flex w-full justify-start mt-2">
                    <p class="mx-2">密碼:</p>
                    <input type="text" v-model="password">
                </div>
                <div class="w-full mt-2 flex justify-center mb-2">
                    <div class="w-20 text-center border" @click="login()">
                        <p>登入</p>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-[300px] mt-2">
                    <p>測試帳號: test</p>
                    <p>測試密碼: 1234</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
