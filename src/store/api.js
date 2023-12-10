import { defineStore } from 'pinia'
import axios from "axios";

export const useGetAPI = defineStore('getAPI', {
  state: () => ({
    data: null,
    username: String,
    password: String
  }),

  actions: {

  },
  getters: {
    async isCoffeeData() {
      try {
        const { data } = await axios.get("http://localhost:8080/api/coffeeData/Inquire");
        this.data = data
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  }
})
