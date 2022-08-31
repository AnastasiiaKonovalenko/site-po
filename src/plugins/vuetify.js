// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
const vuetifyOptions = {
    theme: {
        themes: {
            light: {
                mainGrey: '#5E5E5E',
            },
            dark: {
                mainGrey: '#5E5E5E',
            },
        },
    },
};
import { createVuetify } from 'vuetify';

export default createVuetify(vuetifyOptions);
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
