<template>
    <div>
        <h2 class="po-about-me-header pb-8 py-4 mx-2">Welcome to my portfolio</h2>
        <div>
            <TheProjectPreview
                class="mb-2"
                img-src="pizza_broshur.jpg"
                header="Pizza Ghost project"
                text="Application for ordering customized pizza + Brochure"
            />
            <TheProjectPreview
                class="mb-2"
                img-src="kadabra_broshur_22.jpg"
                header="Kadabra project"
                text="Marketing Agency Website Concept + Brand Identity & Logo Book"
            />
            <TheProjectPreview
                img-src="jaro_2.jpg"
                header="Logos, Identity, mltipage layout samples"
            />
        </div>

        <div id="about-me" class="po-about-me-section flex-grow-1 mx-11 mt-11 pt-2">
            <p class="po-about-me-bold mb-4">My name is Olga,</p>

            <p class="mb-4">
                I’m from Kyiv, Ukraine, however currently am located in Vilnius,
                Lithuania.
            </p>
            <p class="mb-4">
                After achieving all set goals in graphic design, I’m
                now growing further into the digital world by reinventing myself
                as a UI/UX Designer, looking to fill a position of a Junior
                UI/UX Designer.
            </p>
            <p class="mb-4">
                 After over 20 years in the polygraphy, I’m
                looking forward to bring a valuable skillset into my new
                position! Expect 20 years of experience in corporate publishing,
                graphic and advertising design; expect Art-Directorial expertise
                of large publishing houses in 2 countries; expect
                communicational capabilities in cooperation with hundreds of
                clients from over 10 countries around the World.
            </p>

            <p class="po-about-me-bold mb-4">
                I’m happy to bring to the table:
            </p>

            <p class="mb-4">
                - Mastery in challenges of a commercial business, due to my
                background as a small business owner;
            </p>
            <p class="mb-4">
                - Ability to understand & solve marketing challenges due to
                close contact with marketing managers In the line of duty;
            </p>
            <p class="mb-4">
                - Virtuosity in balancing client’s emotions due to the interest
                & research of psychology & sociology;
            </p>
            <p class="mb-4">
                It would be my pleasure to exploring depth of UI/UX Design, add
                to your company team a perfect balance of experience,
                progressive consciousness and passion when growing to be a
                valuable part of the company’s development!
            </p>
            <p class="mb-4">
                As the next career step I look forward to develop new skills in
                the field including animation, 3D graphics and Augmented Reality
                to elevate the range of services provided and cover larger share
                of the market needs.
            </p>
        </div>
    </div>
</template>

<script setup>
import TheProjectPreview from './components/TheProjectPreview.vue';
</script>

<style lang="scss" scoped>
@import '../../styles/functions.scss';
@import '../../styles/vars.scss';

.po-about-me {
    &-header {
        font-family: 'Cinzel-Regular', serif;
        font-size: 65px;
        line-height: 100.9%;
        color: var(--vt-c-grey-1);
    }

    &-section {
        font-family: 'Cinzel-Regular', serif;
        font-size: 12px;
        line-height: 150%;
        color: var(--vt-c-grey-1);
        transition: all 0.8s ease-out;
    }

    &-bold {
        font-size: 20px;
    }
}
</style>
