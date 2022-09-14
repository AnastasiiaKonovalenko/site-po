<template>
    <ul class="d-flex">
        <li
            class="contacts-icon d-flex justify-center align-center rounded-circle"
        >
            <a
                class="d-flex justify-center align-center flex-grow-1"
                target="_blank"
                href="mailto:womkad@gmail.com"
            >
                <TheMail />
            </a>
        </li>
        <li class="contacts-icon ml-4 rounded-circle">
            <a
                class="d-flex justify-center align-center flex-grow-1"
                target="_blank"
                href="https://wa.me/+380972815576"
            >
                <TheWatsapp />
            </a>
        </li>
        <li class="contacts-icon ml-4 rounded-circle">
            <a
                class="d-flex justify-center align-center flex-grow-1"
                target="_blank"
                href="https://www.linkedin.com/in/olha-/"
            >
                <TheLinkedin />
            </a>
        </li>
        <li class="contacts-icon ml-4 rounded-circle">
            <a
                class="d-flex justify-center align-center flex-grow-1"
                target="_blank"
                href="tel:+37062527439"
            >
                <TheTelephone />
            </a>
        </li>
    </ul>
</template>

<script setup>
import TheMail from '../../components/icons/TheMail.vue';
import TheTelephone from '../../components/icons/TheTelephone.vue';
import TheLinkedin from '../../components/icons/TheLinkedin.vue';
import TheWatsapp from '../../components/icons/TheWatsapp.vue';
</script>

<style scoped>
.contacts-icon {
    background-color: black;
    padding: 8px;
    width: 40px;
    height: 40px;
}
</style>
