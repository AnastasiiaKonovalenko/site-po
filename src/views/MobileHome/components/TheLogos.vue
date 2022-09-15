<template>
    <div class="project d-flex flex-column" id="logos">
        <div class="d-flex">
            <h2 class="project-header">
                Logos, Identity, mltipage layout samples
            </h2>
        </div>

        <div class="mt-0 bg-black">
            <div
                class="po-logos-item d-flex justify-center"
                v-for="(logoItems, idx) in logos"
                :key="idx"
            >
                <TheVideo
                    class="mx-6 my-3"
                    :class="{
                        'mt-6': idx === 0,
                        'mb-6': idx === logos.length - 1,
                    }"
                    :index="idx + 1"
                    :folder="logoItems.folder"
                    :photosCount="logoItems.photos"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import TheVideo from './TheVideo.vue';
import { onBeforeMount } from 'vue';

const logos = [
    {
        folder: 'sis',
        photos: 4,
    },
    {
        folder: 'amc',
        photos: 6,
    },
    {
        folder: 'tri_1',
        photos: 8,
    },
    {
        folder: 'tri_2',
        photos: 4,
    },
    {
        folder: 'mem',
        photos: 5,
    },
    {
        folder: 'pizza',
        photos: 5,
    },
    {
        folder: 'logos',
        photos: 8,
    },
    {
        folder: 'rep',
        photos: 9,
    },
];

onBeforeMount(() => {
    const promises = [];

    logos.forEach((item) => {
        for (let i = 0; i < item.photos; i++) {
            const newPromise = new Promise((resolve, reject) => {
                const img = new Image();
                img.src = new URL(
                    `../../assets/${item.folder}/${i}.jpg`,
                    import.meta.url
                ).href;
                img.onload = resolve;
                img.onerror = reject;
            });

            promises.push(newPromise);
        }
    });

    Promise.all(promises)
        .then(() => {
            console.log('Images loaded!');
        })
        .catch((error) => {
            console.error('Some image(s) failed loading!');
            console.error(error.message);
        });
});
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
