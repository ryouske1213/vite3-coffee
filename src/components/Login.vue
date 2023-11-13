<script setup>
import { useAuthStore } from "../store/auth";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { googleTokenLogin, CallbackTypes  } from "vue3-google-login"



const authStore = useAuthStore()
const router = useRouter()


const singIn = () => {

  //localhost member
  sessionStorage.setItem('token', authStore.singOut)
  router.push('/Login/index')

  // google
  sessionStorage.removeItem("GoogleToken");
}


const login = () => {
  googleTokenLogin().then((response) => {
    if(response.access_token) {
      sessionStorage.setItem('token', authStore.login)
      sessionStorage.setItem('GoogleToken', response.access_token)
      console.log("Handle the response", response)
    }
  })
}

</script>

<template>
  <div>
    <div class="flex items-center mt-4">
      <button class="w-full pr-4">
        <router-link to="/Login/index">
          <img class="w-10" src="../../public/image/member.png" alt="" />
        </router-link>
      </button>
      <button @click="singIn" class="w-full">
        <img
          class="w-10 mr-4"
          src="../../public/image/sign-out-icon.png"
          alt=""
        />
      </button>

      <button>
        <div @click="login" class="w-10 flex items-center mr-4">
          <img class="" src="../../public/image/google-icon.png" alt="">
        </div>
      </button>
    </div>
  </div>


</template>

<style scoped></style>
