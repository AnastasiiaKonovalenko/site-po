<template>
    <div class="position-relative flex-grow-1 d-flex flex-column">
        <div class="hide-line">
            <div class="bg-white position-absolute h-100 w-25"></div>
            <Transition name="slide-fade">
                <h2 v-if="isHeaderOnPortfolioDownloaded" class="po-header-2">
                    Welcome to my portfolio
                </h2>
            </Transition>
        </div>

        <div class="po-about-me flex-grow-1">
            <p class="mb-11">Hello, thank you for visiting this page!</p>

            <p class="po-about-me-bold mb-11">My name is Olga,</p>

            <p class="mb-11">
                I’m from Kyiv, Ukraine, however currently am located in Vilnius,
                Lithuania. After achieving all set goals in graphic design, I’m
                now growing further into the digital world by reinventing myself
                as a UI/UX Designer, looking to fill a position of a Junior
                UI/UX Designer. After over 20 years in the polygraphy, I’m
                looking forward to bring a valuable skillset into my new
                position! Expect 20 years of experience in corporate publishing,
                graphic and advertising design; expect Art-Directorial expertise
                of large publishing houses in 2 countries; expect
                communicational capabilities in cooperation with hundreds of
                clients from over 10 countries around the World.
            </p>

            <p class="po-about-me-bold mb-11">I’m happy to bring to the table:</p>

            <p class="mb-11">
                - Mastery in challenges of a commercial business, due to my
                background as a small business owner;
            </p>
            <p class="mb-11">
                - Ability to understand & solve marketing challenges due to
                close contact with marketing managers In the line of duty;
            </p>
            <p class="mb-11">
                - Virtuosity in balancing client’s emotions due to the interest
                & research of psychology & sociology;
            </p>
            <p class="mb-11">
                It would be my pleasure to exploring depth of UI/UX Design, add
                to your company team a perfect balance of experience,
                progressive consciousness and passion when growing to be a
                valuable part of the company’s development!
            </p>
            <p class="mb-11">
                As the next career step I look forward to develop new skills in
                the field including animation, 3D graphics and Augmented Reality
                to elevate the range of services provided and cover larger share
                of the market needs.
            </p>
        </div>
    </div>
</template>

<script setup>
import { useLayoutFlagsStore } from '../../stores/layout-flags';
const { setIsHeaderOnPortfolioDownloaded } = useLayoutFlagsStore();
import { storeToRefs } from 'pinia';
const { isHeaderOnPortfolioDownloaded } = storeToRefs(useLayoutFlagsStore());

setTimeout(() => {
    setIsHeaderOnPortfolioDownloaded();
}, 1000);
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

.po {
    &-header-2 {
        font-family: 'Cinzel-Regular', serif;
        font-style: normal;
        font-size: 70px;
        color: var(--vt-c-grey-1);
        padding-bottom: 47px;
        background-color: white;
        z-index: 1;
        position: relative;
        right: 234px;
        margin-right: -234px;
        white-space: nowrap;
    }

    &-my-projects-list {
        margin-top: 253px;
        width: 540px;
        margin-left: 40px;

        &-item {
            font-family: 'Cinzel-Regular', serif;
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 100.9%;
            margin-top: 60px;
            list-style: none;
            color: var(--vt-c-grey-1);

            &:hover {
                color: var(--vt-c-black);
            }

            &:first-child {
                margin-top: 0;
            }
        }
    }

    &-about-me {
        font-family: 'Cinzel-Regular', serif;
        font-size: 20px;
        line-height: 150%;
        color: var(--vt-c-grey-1);

        &-bold {
            font-size: 40px;
        }
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-284px);
    opacity: 0;
}

.hide-line {
    min-width: 902px;
    height: 116px;
    position: relative;
    left: -50px;
}
</style>
