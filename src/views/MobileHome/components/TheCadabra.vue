<template>
    <div class="project d-flex flex-column" id="cadabra">
        <div class="d-flex">
            <TheProjectImage
                src="kadabra_broshur_22.jpg"
                :aspect-ratio="1.32"
            />
        </div>

        <div class="mt-0">
            <h2 class="project-header">
                Marketing agency website, corporate identity and logobook
            </h2>

            <div class="d-flex justify-center">
                <video
                    ref="videoRef"
                    class="project-video project-video-last"
                    autoplay
                    playsinline
                    loop
                    muted
                    src="../../../assets/Kadabra_1.mp4"
                />
            </div>

            <h3 class="project-subheader">Background</h3>

            <div class="project-info mb-11">
                <p class="project-p">
                    It is a startup Marketing House in the Kingdom Saudi Arabia.
                </p>

                <p class="project-p mt-3">
                    The idea of a startup is based on the peculiarities of the
                    local market, when the country was closed for many years,
                    and more recently it has been striving to attract
                    representative offices of global business. So, along with
                    the preparation of the investment package, I developed a
                    logo and corporate identity, which you can see below.
                </p>

                <p class="project-p mt-3">
                    The company's website, where I am acting as UI/UX designer,
                    is under construction, currently protected by the NDA. I
                    promise to show it here later, when there is permission from
                    the copyright holders.
                </p>

                <h4 class="project-subheader-2 mt-5">Application map</h4>
                <div class="d-flex">
                    <TheProjectImage
                        src="Map_Kadabra.jpg"
                        :aspect-ratio="1.32"
                    />
                </div>
            </div>

            <div class="d-flex justify-center mt-11">
                <video
                    ref="videoRef"
                    class="project-video project-video-last"
                    autoplay
                    loop
                    muted
                    playsinline
                    src="../../../assets/Kadabra_2.mp4"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
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
</style>
