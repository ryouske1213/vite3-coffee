// store/modules/auth.js

import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null,
  }),
  actions: {
    login(username, password) {
        username = 'test'
        password = '1234'
      // 在此處向後端發送登錄請求，獲取 JWT
      // 使用 axios 或其他 HTTP 客戶端庫進行請求
      // 將 JWT 存儲在狀態中
      this.token = 'your_jwt_here';
    },
    logout() {
      // 清除 JWT
      this.token = null;
    },
  },
  getters: {
    isAuthenticated() {
      // 根據 JWT 的有效性確定用戶是否已經登錄
      return !!this.token;
    },
  },
});
