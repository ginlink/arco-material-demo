import type { App } from 'vue';
import _MyButton from './component.vue';

const MyButton = Object.assign(_MyButton, {
  install: (app: App) => {
    app.component(_MyButton.name, _MyButton);
  },
});

export default MyButton;