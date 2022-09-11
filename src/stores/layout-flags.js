import { defineStore } from 'pinia';

export const useLayoutFlagsStore = defineStore('counter', {
    state: () => ({
        isHeaderOnPortfolioDownloaded: false,
        isAboutMeDownloaded: false,
        isBackgroundHidden: true,
        isProjectsMenuHidden: true,
    }),
    getters: {},
    actions: {
        setIsHeaderOnPortfolioDownloaded() {
            this.isHeaderOnPortfolioDownloaded = true;
        },
        setIsAboutMeDownloaded() {
            this.isAboutMeDownloaded = true;
        },
        setIsBackgroundHidden() {
            this.isBackgroundHidden = false;
        },
        setIsProjectsMenuHidden() {
            this.isProjectsMenuHidden = false;
        },
    },
});
