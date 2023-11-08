import {
  defineStore
} from "pinia";

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
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    getPassword(state) {
      return state.password;
    },
    login(state) {
      return state.isAuthenticated = true
    },
    singOut(state) {
      return state.isAuthenticated = false
    }
  },
});