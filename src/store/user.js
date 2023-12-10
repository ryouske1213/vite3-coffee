import { defineStore } from 'pinia'
import axios from "axios";

export const usePostUser = defineStore('PostAPI', {
  state: () => ({
    usernameShowError: false,
    passwordShowError: false,
    data: null,
    username: String,
    password: String
  }),

  actions: {
    async isUserData(username, password) {
        this.username = username,
        this.password = password
      try {
        const { data } = await axios.post('http://localhost:8080/api/User/Account',username, password);
        return data
      } catch (error) {
        console.log(error)
      }
    }
  },
})