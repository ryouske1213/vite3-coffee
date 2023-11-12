<script setup>
import GoogleLogin from '../components/googleLogin.vue'
import { useAuthStore } from "../store/auth";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive } from "vue";


const authStore = useAuthStore()
const router = useRouter()
const pictureState = sessionStorage.getItem('token', authStore.login)


const singIn = () => {

  //localhost member
  sessionStorage.setItem('token', authStore.singOut)
  router.push('/Login/index')

  // google
  console.log(google.accounts.id.disableAutoSelect());
  google.accounts.id.disableAutoSelect();
  sessionStorage.removeItem("GoogleToken");
}

function handleCredentialResponse(response) {
  sessionStorage.setItem("GoogleToken", response.credential);
}

const login = () => {
  google.accounts.id.initialize({
    client_id:
      "910439474234-ahak6bt5f0qovg60ktpnpjad3ombn9gk.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton();
  google.accounts.id.prompt(); // also display the One Tap dialog
};
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
      <!-- <button>
        <div @click="login" class="w-10 flex items-center mr-4">
          <img class="" src="../../public/image/google-icon.png" alt="">
        </div>
      </button> -->
      <GoogleLogin />
    </div>
  </div>


</template>

<style scoped></style>
