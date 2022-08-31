import { defineStore } from 'pinia';

export const useLayoutFlagsStore = defineStore('counter', {
    state: () => ({
        isHeaderOnPortfolioDownloaded: false,
    }),
    getters: {},
    actions: {
        setIsHeaderOnPortfolioDownloaded() {
            this.isHeaderOnPortfolioDownloaded = true;
        },
    },
});
