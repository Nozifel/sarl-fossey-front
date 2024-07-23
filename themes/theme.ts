
import { definePreset, palette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: palette('#b1281f')
    }
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.p-dark'
    }
};

