<template>
    <div class="project d-flex flex-column" id="pizza-ghost">
        <div class="d-flex">
            <TheProjectImage src="pizza_broshur.jpg" :aspect-ratio="1.32" />
        </div>

        <div class="mt-0">
            <h2 class="project-header">
                Application concept for ordering customized pizza and branding
                corporate booklet
            </h2>

            <div class="d-flex justify-center">
                <video
                    ref="videoRef"
                    class="project-video"
                    autoplay
                    playsinline
                    loop
                    muted
                    src="../../../assets/PizzaGhostApp.mp4"
                />
            </div>

            <h3 class="project-subheader">Background</h3>

            <div class="project-info mb-11">
                <p class="project-p position-relative">
                    It was a restaurant chain in Dubai that described itself as:
                    "PizzaGhost are the most Dubai's unique & reliable pizza
                    delivery service".
                </p>
            </div>

            <div v-if="isVisible">
                <div>
                    <p class="project-p mt-3">
                        Once, a few years ago, I made a presentation booklet for
                        them (you can see a few spreads of this publication
                        below) and all this time, it seems that they were doing
                        very well.
                    </p>

                    <p class="project-p mt-3">
                        However, being "the most Dubai's unique & reliable"
                        means being one of the market leaders and building your
                        marketing even more strong to beat the competition
                        unconditionally...
                    </p>

                    <div class="d-flex mt-3">
                        <TheVideo
                            :aspect-ratio="1.32"
                            class="my-3"
                            :index="0"
                            folder="pizza_presentation"
                            :photosCount="3"
                        />
                    </div>
                    <h3 class="project-subheader">Ideation</h3>
                    <div class="project-info">
                        <p class="project-p">
                            The product idea is the result of logical reasoning
                            based on knowledge in the field of marketing and
                            psychology
                        </p>

                        <h4 class="project-subheader-2 mt-5">
                            Business needs:
                        </h4>
                        <ul class="project-list mt-3">
                            <li class="project-list-item mt-3">
                                maintain a leading position in the market
                            </li>
                            <li class="project-list-item mt-3">
                                increase the company's income by increasing
                                interest in the product
                            </li>
                            <li class="project-list-item mt-3">
                                attract a new user audience
                            </li>
                        </ul>

                        <h4 class="project-subheader-2 mt-5">Users needs:</h4>
                        <ul class="project-list mt-3">
                            <li class="project-list-item mt-3">
                                eat delicious customized pizza without leaving
                                home or office
                            </li>
                            <li class="project-list-item mt-3">
                                to be a user of a well-known product that can
                                flexibly adapt to the wishes of a client
                            </li>
                            <li class="project-list-item mt-3">
                                declare in social networks about his creative
                                experience and involvement in trend
                            </li>
                        </ul>

                        <p class="project-p mt-5">
                            The consumer psychology is characterized by the
                            so-called "ikea effect". The consumer is willing to
                            pay more for what he does himself. Also, the
                            consumer has a psychological need to show the result
                            of his activities to others. The product combines
                            the satisfaction of these user needs, allowing you
                            to design a pizza yourself and save the recipe and
                            photo in the application's gallery, and then share
                            the result on social networks.
                        </p>

                        <p class="project-p mt-3">
                            Bright and juicy high-quality images of food and
                            fire increase appetite and psychological comfort,
                            allowing the user to buy more and return to the
                            product again.
                        </p>

                        <p class="project-p mt-3">
                            As a result, the business receives an organic
                            expansion of the audience, increases profits, fame
                            and prestige.
                        </p>
                    </div>
                </div>

                <div>
                    <h4 class="project-subheader-2 mt-5">Application map</h4>
                    <div class="d-flex">
                        <TheProjectImage
                            src="cheese_hero-2.jpg"
                            :aspect-ratio="1.32"
                        />
                    </div>

                    <h4 class="project-subheader-2 my-5">Wireframe</h4>

                    <div class="d-flex">
                        <TheProjectImage
                            src="cheese_hero-3.jpg"
                            :aspect-ratio="1.32"
                        />
                    </div>

                    <h4 class="project-subheader-2 my-5">UI Kit</h4>

                    <div class="d-flex">
                        <TheProjectImage
                            src="cheese_hero-4.jpg"
                            :aspect-ratio="1.55"
                        />
                    </div>

                    <h3 class="project-subheader">Blueprint</h3>

                    <p class="project-p mt-3 d-flex flex-column">
                        <span>
                            Preliminary design work included schematics,
                            sketches, and a warframe to better understand the
                            content and operation of the future prototype. The
                            UI kit also became a prototype component library.
                        </span>
                        <span>
                            The idea of a more moderate and less aggressive
                            color scheme than that used in the company's
                            products before has been put forward. When it comes
                            to food, the more comfortable, calm, “home” feeling
                            of color psychology is helpful. Partial departure
                            from the corporate set of colors meanwhile maintains
                            the necessary tonal contrast.
                        </span>
                    </p>
                </div>

                <div>
                    <h3 class="project-subheader">Prototype</h3>
                    <p class="project-p mt-3">
                        The result of the work was a functional prototype that
                        simulates the main part of the user journey for the
                        application. A beautiful and functional design is
                        attractive to the user, distinguishes the business from
                        competitors.
                    </p>

                    <p class="project-p mt-3">
                        <a
                            class="project-link"
                            target="_blank"
                            href="https://www.figma.com/file/b3faQ9asyb9JvSEOyuvT1k/Pizza-Ghost-app?node-id=0%3A1"
                        >
                            You can evaluate the work of the prototype at this
                            link
                        </a>
                    </p>
                </div>

                <div class="d-flex justify-center my-11">
                    <video
                        ref="videoRef"
                        class="project-video project-video-last"
                        autoplay
                        loop
                        muted
                        playsinline
                        src="../../../assets/PizzaGhost.mp4"
                    />
                </div>
            </div>

            <div
                @click="toggleIsVisible"
                class="mx-11 link-see-more position-relative d-inline"
            >
                {{ textTruncate }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import TheVideo from './TheVideo.vue';
const isVisible = ref(false);
const textTruncate = computed(() =>
    !isVisible.value ? 'See more...' : 'See less...'
);
function toggleIsVisible() {
    isVisible.value = !isVisible.value;
}
import TheProjectImage from './TheProjectImage.vue';
</script>

<style lang="scss" scoped>
.project {
    max-width: 100vh;

    &-video {
        width: 265%;
        height: 150vw;
        max-height: 100vh;

        &-last {
            width: 100%;
            height: 57vw;
        }
    }

    &-header {
        font-family: 'Cinzel-Regular', serif;
        font-size: 24px;
        line-height: 100.9%;
        margin: 44px 44px 70px 70px;
        color: black;
    }

    &-subheader {
        text-align: center;
        font-family: 'Cinzel-Regular', serif;
        font-size: 24px;
        line-height: 100.9%;
        margin: 44px auto 44px auto;
        color: var(--vt-c-grey-1);

        &-2 {
            color: var(--vt-c-grey-1);
            font-size: 16px;
            margin: 0 44px;
        }
    }

    &-p {
        font-family: 'RedHatDisplay-Regular', serif;
        color: var(--vt-c-grey-1);
        font-size: 12px;
        line-height: 140%;
        margin: 0 44px;
    }

    &-list {
        margin: 12px 44px;
        &-item {
            position: relative;
            padding-left: 16px;
            font-family: 'RedHatDisplay-Regular', serif;
            color: var(--vt-c-grey-1);
            font-size: 12px;

            &:before {
                position: absolute;
                border-radius: 50%;
                content: '';
                background-color: var(--vt-c-grey-1);
                height: 3px;
                width: 3px;
                top: calc(50% - 1px);
                left: 0;
            }
        }
    }
}

.link-see-more {
    padding-bottom: 2px;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: black;
    }
}
</style>
