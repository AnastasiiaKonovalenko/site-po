<template>
    <div class="pizza-ghost d-flex flex-column" id="pizza-ghost">
        <div class="d-flex">
            <v-img
                class="grey lighten-2"
                content-class="pizza-ghost-img flex-grow-1"
                :src="imageSrc('pizza_broshur.jpg')"
                aspect-ratio="1.32"
                contain
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </div>

        <div class="mt-0">
            <h2 class="pizza-ghost-header">
                Application concept for ordering customized pizza and branding
                corporate booklet
            </h2>

            <div class="d-flex justify-center">
                <video
                    ref="videoRef"
                    class="pizza-ghost-video"
                    autoplay
                    loop
                    muted
                    src="../../../assets/PizzaGhostApp.mp4"
                />
            </div>

            <h3 class="pizza-ghost-subheader">Background</h3>

            <div class="pizza-ghost-info mb-11">
                <p class="pizza-ghost-p">
                    It was a restaurant chain in Dubai that described itself as:
                    "PizzaGhost are the most Dubai's unique & reliable pizza
                    delivery service".
                </p>

                <p class="pizza-ghost-p mt-3">
                    Once, a few years ago, I made a presentation booklet for
                    them (you can see a few spreads of this publication below)
                    and all this time, it seems that they were doing very well.
                </p>

                <p class="pizza-ghost-p mt-3">
                    However, being "the most Dubai's unique & reliable" means
                    being one of the market leaders and building your marketing
                    even more strong to beat the competition unconditionally...
                </p>
            </div>

            <div>
                <div class="d-flex">
                    <v-img
                        class="grey lighten-2"
                        content-class="pizza-ghost-img flex-grow-1"
                        :src="imageSrc('cheese_hero-1.jpg')"
                        aspect-ratio="1.32"
                        contain
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </div>
                <h3 class="pizza-ghost-subheader">Ideation</h3>
                <div class="pizza-ghost-info">
                    <p class="pizza-ghost-p">
                        The product idea is the result of logical reasoning
                        based on knowledge in the field of marketing and
                        psychology
                    </p>

                    <h4 class="pizza-ghost-subheader-2 mt-5">
                        Business needs:
                    </h4>
                    <ul class="pizza-ghost-list mt-3">
                        <li class="pizza-ghost-list-item mt-3">
                            maintain a leading position in the market
                        </li>
                        <li class="pizza-ghost-list-item mt-3">
                            increase the company's income by increasing interest
                            in the product
                        </li>
                        <li class="pizza-ghost-list-item mt-3">
                            attract a new user audience
                        </li>
                    </ul>

                    <h4 class="pizza-ghost-subheader-2 mt-5">Users needs:</h4>
                    <ul class="pizza-ghost-list mt-3">
                        <li class="pizza-ghost-list-item mt-3">
                            eat delicious customized pizza without leaving home
                            or office
                        </li>
                        <li class="pizza-ghost-list-item mt-3">
                            to be a user of a well-known product that can
                            flexibly adapt to the wishes of a client
                        </li>
                        <li class="pizza-ghost-list-item mt-3">
                            declare in social networks about his creative
                            experience and involvement in trend
                        </li>
                    </ul>

                    <p class="pizza-ghost-p mt-5">
                        The consumer psychology is characterized by the
                        so-called "ikea effect". The consumer is willing to pay
                        more for what he does himself. Also, the consumer has a
                        psychological need to show the result of his activities
                        to others. The product combines the satisfaction of
                        these user needs, allowing you to design a pizza
                        yourself and save the recipe and photo in the
                        application's gallery, and then share the result on
                        social networks.
                    </p>

                    <p class="pizza-ghost-p mt-3">
                        Bright and juicy high-quality images of food and fire
                        increase appetite and psychological comfort, allowing
                        the user to buy more and return to the product again.
                    </p>

                    <p class="pizza-ghost-p mt-3">
                        As a result, the business receives an organic expansion
                        of the audience, increases profits, fame and prestige.
                    </p>
                </div>
            </div>

            <div>
                <h4 class="pizza-ghost-subheader-2 mt-5">Application map</h4>
                <div class="d-flex">
                    <v-img
                        class="grey lighten-2"
                        content-class="pizza-ghost-img flex-grow-1"
                        :src="imageSrc('cheese_hero-2.jpg')"
                        aspect-ratio="1.32"
                        contain
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </div>

                <h4 class="pizza-ghost-subheader-2 my-5">Wireframe</h4>

                <div class="d-flex">
                    <v-img
                        class="grey lighten-2"
                        content-class="pizza-ghost-img flex-grow-1"
                        :src="imageSrc('cheese_hero-3.jpg')"
                        aspect-ratio="1.32"
                        contain
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </div>

                <h4 class="pizza-ghost-subheader-2 my-5">UI Kit</h4>

                <div class="d-flex">
                    <v-img
                        class="grey lighten-2"
                        content-class="pizza-ghost-img flex-grow-1"
                        :src="imageSrc('cheese_hero-4.jpg')"
                        aspect-ratio="1.55"
                        contain
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </div>

                <h3 class="pizza-ghost-subheader">Blueprint</h3>

                <p class="pizza-ghost-p mt-3 d-flex flex-column">
                    <span>
                        Preliminary design work included schematics, sketches,
                        and a warframe to better understand the content and
                        operation of the future prototype. The UI kit also
                        became a prototype component library.
                    </span>
                    <span>
                        The idea of a more moderate and less aggressive color
                        scheme than that used in the company's products before
                        has been put forward. When it comes to food, the more
                        comfortable, calm, “home” feeling of color psychology is
                        helpful. Partial departure from the corporate set of
                        colors meanwhile maintains the necessary tonal contrast.
                    </span>
                </p>
            </div>

            <div>
                <h3 class="pizza-ghost-subheader">Prototype</h3>
                <p class="pizza-ghost-p mt-3">
                    The result of the work was a functional prototype that
                    simulates the main part of the user journey for the
                    application. A beautiful and functional design is attractive
                    to the user, distinguishes the business from competitors.
                </p>

                <p class="pizza-ghost-p mt-3">
                    <a
                        class="pizza-ghost-link"
                        target="_blank"
                        href="https://www.figma.com/proto/b3faQ9asyb9JvSEOyuvT1k/Pizza-Ghost-app?node-id=121%3A924&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A38"
                    >
                        You can evaluate the work of the prototype at this link
                    </a>
                </p>
            </div>

            <div class="d-flex justify-center my-11">
                <video
                    ref="videoRef"
                    class="pizza-ghost-video pizza-ghost-video-last"
                    autoplay
                    loop
                    muted
                    src="../../../assets/PizzaGhost.mp4"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const imageSrc = (path) => {
    return new URL(`../../../assets/${path}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.pizza-ghost {
    max-width: 100vh;

    &-img {
        width: 100%;
        height: fit-content;
    }

    &-video {
        width: 150%;
        height: fit-content;

        &-last {
            width: 100%;
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
</style>