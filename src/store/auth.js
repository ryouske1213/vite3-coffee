import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {

  state: () => ({
    username: '',
    password: '',
    isAuthenticated: false,
  }),
  
  actions: {
    setUsername(username) {
      this.username = username;
    },

    setPassword(password) {
      this.password = password;
    },

    // login() {
    //   if(this.isAuthenticated == false) {
    //     return console.log(this.isAuthenticated)
    //   }
    //   if(this.isAuthenticated == true) {
    //     return console.log(this.isAuthenticated)
    //   }
    // },
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    getPassword(state) {
      return state.password;
    },
  },
});
