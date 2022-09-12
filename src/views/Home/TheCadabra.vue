<template>
    <div class="position-relative flex-grow-1 d-flex flex-column po-pizza">
        <div class="hide-line">
            <Transition name="slide-fade">
                <h2 v-if="isHeaderOnPortfolioDownloaded" class="po-header-2">
                    marketing agency website, corporate identity and logobook
                </h2>
            </Transition>
        </div>

        <div
            :class="{ 'po-hidden': !isAboutMeDownloaded }"
            class="po-pizza-section position-relative"
        >
            <div class="po-pizza-section-divider position-absolute" />
            <div class="po-pizza-section-wrap">
                <video
                    ref="videoRef"
                    class="po-pizza-section-img"
                    autoplay
                    loop
                    muted
                    src="../../assets/Kadabra_1.mp4"
                />
            </div>
            <h3 class="po-pizza-section-header">Background</h3>
            <div class="po-pizza-section-info">
                <p class="po-pizza-section-p">
                    It is a startup Marketing House in the Kingdom Saudi Arabia.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    The idea of a startup is based on the peculiarities of the
                    local market, when the country was closed for many years,
                    and more recently it has been striving to attract
                    representative offices of global business. So, along with
                    the preparation of the investment package, I developed a
                    logo and corporate identity, which you can see below.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    The company's website, where I am acting as UI/UX designer,
                    is under construction, currently protected by the NDA. I
                    promise to show it here later, when there is permission from
                    the copyright holders.
                </p>
            </div>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <div class="po-pizza-section-wrap po-pizza-section-wrap-last">
                <video
                    ref="videoRef"
                    class="po-pizza-section-img"
                    autoplay
                    loop
                    muted
                    src="../../assets/Kadabra_2.mp4"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLayoutFlagsStore } from '../../stores/layout-flags';
import { storeToRefs } from 'pinia';
const { isHeaderOnPortfolioDownloaded, isAboutMeDownloaded } = storeToRefs(
    useLayoutFlagsStore()
);
</script>

<style lang="scss" scoped>
@import '../../styles/functions.scss';
@import '../../styles/vars.scss';
.po {
    &-pizza {
        padding-left: min(get-vw(57px), 57px);
        &-section {
            color: var(--vt-c-grey-1);
            margin-top: min(get-vw(100px), 100px);
            transition: all 0.8s ease-out;

            &-divider {
                top: 0;
                left: -11%;
                right: -100000px;
                height: 1px;
                background-color: var(--vt-c-grey-1);
                transition: all 0.8s ease-out;

                &-hidden {
                    left: 100000px;
                    transition: all 0.8s ease-out;
                }
            }

            &-wrap {
                &-last {
                    margin-bottom: min(get-vw(163px), 163px);
                }
            }

            &-img {
                width: min(get-vw(920px), 920px);
                object-fit: contain;
                &-full {
                }
            }

            &-header {
                font-family: Cinzel-Regular, serif;
                margin-top: min(get-vw(150px), 150px);
                margin-bottom: min(get-vw(100px), 100px);
                font-size: min(get-vw(50px), 50px);
            }

            &-subheader {
                font-family: Cinzel-Regular, serif;
                font-size: min(get-vw(22px), 22px);
            }

            &-img-subheader {
                font-family: Cinzel-Regular, serif;
                font-size: min(get-vw(25px), 25px);
            }

            &-info {
                margin-right: min(get-vw(200px), 200px);
            }

            &-p {
                font-family: 'RedHatDisplay-Regular', serif;
                color: var(--vt-c-grey-1);
                font-size: min(
                    get-vw($fifth-party-text-font-size),
                    $fifth-party-text-font-size
                );
                line-height: 140%;
            }

            &-list {
                &-item {
                    padding-left: min(get-vw(24px), 24px);
                    font-family: 'RedHatDisplay-Regular', serif;
                    color: var(--vt-c-grey-1);
                    font-size: min(
                        get-vw($fifth-party-text-font-size),
                        $fifth-party-text-font-size
                    );

                    &:before {
                        position: absolute;
                        border-radius: 50%;
                        content: '';
                        background-color: var(--vt-c-grey-1);
                        height: min(get-vw(4px), 4px);
                        width: min(get-vw(4px), 4px);
                        top: 50%;
                        left: 1%;
                    }
                }
            }
        }
    }

    &-header-2 {
        background-color: white;
        font-family: 'Cinzel-Regular', serif;
        font-style: normal;
        font-size: min(get-vw(50px), 50px);
        color: var(--vt-c-grey-1);
        padding-bottom: min(get-vw(47px), 47px);
        z-index: 10;
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
    transform: translateX(min(get-vw(-284px), -284px));
    opacity: 0;
}

.hide-line {
    width: min(get-vw(580px), 580px);
    padding-top: min(get-vw(40px), 40px);
    min-height: min(get-vw(395px), 395px);
}
</style>
