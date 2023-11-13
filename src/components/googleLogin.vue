<script setup>
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore()

function handleCredentialResponse(response) {
  if(response.credential) {
    sessionStorage.setItem("GoogleToken", response.credential);
    sessionStorage.setItem('token', authStore.login)
  }
}

const login = () => {
  google.accounts.id.initialize({
    client_id:
      "910439474234-ahak6bt5f0qovg60ktpnpjad3ombn9gk.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  //   google.accounts.id.renderButton();
  google.accounts.id.prompt(); // also display the One Tap dialog
};
</script>

<template>
  <div>
    <button @click="login" class="w-10 flex items-center mr-4">
      <img class="" src="../../public/image/google-icon.png" alt="" />
    </button>
  </div>
</template>

<style scoped></style>
