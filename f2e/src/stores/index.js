import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAdmin: false,
  }),
  actions: {
    setAdmin(value) {
      this.isAdmin = value;
    },
  },
});
