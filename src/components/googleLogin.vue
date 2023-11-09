<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
}
// function handleCredentialResponse(response) {
//     // decodeJwtResponse() is a custom function defined by you
//     // to decode the credential response.
//     const responsePayload = decodeJwtResponse(response.credential);

//     console.log("ID: " + responsePayload.sub);
//     console.log('Full Name: ' + responsePayload.name);
//     console.log('Given Name: ' + responsePayload.given_name);
//     console.log('Family Name: ' + responsePayload.family_name);
//     console.log("Image URL: " + responsePayload.picture);
//     console.log("Email: " + responsePayload.email);
//  }

// window.onload = function () {
//     google.accounts.id.initialize({
//         client_id: '319306204460-t7auk281d5j677oqd4ei1bgotebscp3e.apps.googleusercontent.com',
//         callback: handleCredentialResponse
//     });
//     google.accounts.id.prompt();
// }
</script>

<template>
  <div>
    <!-- <div
      id="g_id_onload"
      data-client_id="319306204460-t7auk281d5j677oqd4ei1bgotebscp3e.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="popup"
      data-login_uri="https://localhost:3000"
      data-auto_prompt="false"
    ></div>

    <div
      class="g_id_signin"
      data-type="icon"
      data-shape="square"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
    ></div> -->
    <!-- <GoogleLogin :callback="callback"/> -->
    <div id="g_id_onload"
     data-client_id="910439474234-oc2mige9dhidjqcq6kuqeq4c0d81maj6.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="http://127.0.0.1:5173"
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="icon"
     data-shape="square"
     data-theme="outline"
     data-text="signin_with"
     data-size="large">
</div>
  </div>
</template>

<style scoped></style>
