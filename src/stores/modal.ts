import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    isOpen: false,
    variant: '',
  }),
  getters: {},
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    changeVariant(variant: string) {
      this.variant = variant;
    },
  },
});
