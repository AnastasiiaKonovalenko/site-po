<template>
    <div class="po-pizza position-relative flex-grow-1 d-flex flex-column">
        <div class="hide-line">
            <Transition name="slide-fade">
                <h2 v-if="isHeaderOnPortfolioDownloaded" class="po-header-2">
                    Application concept for ordering customized pizza and
                    branding corporate booklet
                </h2>
            </Transition>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <div class="po-pizza-section-wrap">
                <img
                    src="../../assets/cheese_hero-1.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>
            <h3 class="po-pizza-section-header">Background</h3>
            <div class="po-pizza-section-info">
                <p class="po-pizza-section-p">
                    It was a restaurant chain in Dubai that described itself as:
                    "PizzaGhost are the most Dubai's unique & reliable pizza
                    delivery service".
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    Once, a few years ago, I made a presentation booklet for
                    them (you can see a few spreads of this publication below)
                    and all this time, it seems that they were doing very well.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    However, being "the most Dubai's unique & reliable" means
                    being one of the market leaders and building your marketing
                    even more strong to beat the competition unconditionally...
                </p>
            </div>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <div class="po-pizza-section-wrap">
                <img
                    src="../../assets/cheese_hero-1.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>
            <h3 class="po-pizza-section-header">Ideation</h3>
            <div class="po-pizza-section-info">
                <p class="po-pizza-section-p">
                    The product idea is the result of logical reasoning based on
                    knowledge in the field of marketing and psychology
                </p>

                <h4 class="po-pizza-section-subheader mt-custom-5">
                    Business needs:
                </h4>
                <ul class="po-pizza-section-list mt-custom-3">
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        maintain a leading position in the market
                    </li>
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        increase the company's income by increasing interest in
                        the product
                    </li>
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        attract a new user audience
                    </li>
                </ul>

                <h4 class="po-pizza-section-subheader mt-custom-5">
                    Users needs:
                </h4>
                <ul class="po-pizza-section-list mt-custom-3">
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        eat delicious customized pizza without leaving home or
                        office
                    </li>
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        to be a user of a well-known product that can flexibly
                        adapt to the wishes of a client
                    </li>
                    <li
                        class="po-pizza-section-list-item position-relative mt-custom-3"
                    >
                        declare in social networks about his creative experience
                        and involvement in trend
                    </li>
                </ul>

                <p class="po-pizza-section-p mt-custom-11">
                    The consumer psychology is characterized by the so-called
                    "ikea effect". The consumer is willing to pay more for what
                    he does himself. Also, the consumer has a psychological need
                    to show the result of his activities to others. The product
                    combines the satisfaction of these user needs, allowing you
                    to design a pizza yourself and save the recipe and photo in
                    the application's gallery, and then share the result on
                    social networks.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    Bright and juicy high-quality images of food and fire
                    increase appetite and psychological comfort, allowing the
                    user to buy more and return to the product again.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    As a result, the business receives an organic expansion of
                    the audience, increases profits, fame and prestige.
                </p>
            </div>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <h4 class="po-pizza-section-img-subheader mt-custom-20 mb-custom-4">
                Application map
            </h4>
            <div class="po-pizza-section-wrap">
                <img
                    src="../../assets/cheese_hero-2.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>
            <h4 class="po-pizza-section-img-subheader mt-custom-15 mb-custom-15">Wireframe</h4>
            <div class="po-pizza-section-wrap">
                <img
                    src="../../assets/cheese_hero-3.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>

            <h4 class="po-pizza-section-img-subheader mt-custom-15 mb-custom-15">UI Kit</h4>
            <div class="po-pizza-section-wrap">
                <img
                    src="../../assets/cheese_hero-4.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>

            <h3 class="po-pizza-section-header">Blueprint</h3>

            <p class="po-pizza-section-p mt-custom-3 d-flex flex-column">
                <span>
                    Preliminary design work included schematics, sketches, and a
                    warframe to better understand the content and operation of
                    the future prototype. The UI kit also became a prototype
                    component library.
                </span>
                <span>
                    The idea of a more moderate and less aggressive color scheme
                    than that used in the company's products before has been put
                    forward. When it comes to food, the more comfortable, calm,
                    “home” feeling of color psychology is helpful. Partial
                    departure from the corporate set of colors meanwhile
                    maintains the necessary tonal contrast.
                </span>
            </p>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <div class="po-pizza-section-wrap">
                <div
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                ></div>
            </div>
            <h3 class="po-pizza-section-header">Background</h3>
            <div class="po-pizza-section-info">
                <p class="po-pizza-section-p">
                    The result of the work was a functional prototype that simulates the main part of the user journey for the application. A beautiful and functional design is attractive to the user, distinguishes the business from competitors.
                </p>

                <p class="po-pizza-section-p mt-custom-3">
                    <a
                        class="po-pizza-section-link"
                        href="https://www.figma.com/proto/b3faQ9asyb9JvSEOyuvT1k/Pizza-Ghost-app?node-id=121%3A924&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A38">
                        You can evaluate the work of the prototype at this link
                    </a>
                </p>
            </div>
        </div>

        <div class="po-pizza-section position-relative">
            <div class="po-pizza-section-divider position-absolute"></div>
            <div class="po-pizza-section-wrap po-pizza-section-wrap-last">
                <img
                    src="../../assets/cheese_hero-6.jpg"
                    class="po-pizza-section-img"
                    :class="{ 'po-pizza-section-img-full': true }"
                    alt="pizza-app"
                />
            </div>
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
@import '../../styles/functions.scss';
@import '../../styles/vars.scss';
.po {
    &-pizza {
        padding-left: min(get-vw(57px), 57px);
        &-section {
            color: var(--vt-c-grey-1);
            margin-top: min(get-vw(100px), 100px);

            &-divider {
                top: 0;
                left: -11%;
                right: -100000px;
                height: 1px;
                background-color: var(--vt-c-grey-1);
            }

            &-wrap {
                &-last {
                    margin-bottom: min(get-vw(463px), 463px);
                }
                //height: min(get-vw(676px), 676px);
                //width: min(get-vw(920px), 920px);
                //background-color: red;
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
    padding-top: min(get-vw(150px), 150px);
}
</style>
