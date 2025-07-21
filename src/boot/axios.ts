import { defineBoot } from '#q-app/wrappers';
import axios from 'axios';
import { APP_CONFIG } from 'src/configs/app-config';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: typeof axios;
  }
}

const api = axios.create({ baseURL: APP_CONFIG.baseURL });

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;
});

export { axios, api };
