<script lang="ts">
import axios from 'axios';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import BaseAuth from './components/BaseAuth.vue';
import TheHeader from './components/TheHeader.vue';

import dialog from '@/utils/dialog';
import userTypes from '@/utils/userTypes';

@Component({
  components: {
    BaseAuth,
    TheHeader,
  },
})
export default class App extends Vue {
  @Action loadData;
  @State dialogMessage;

  /**
   * Yeah, I will use emoji here.
   * I recommend Noto Color Emoji font if you use Linux.
  */
  locales = [
    { flag: '🇺🇸', name: 'en', title: 'Switch to English', language: 'English' },
    { flag: '🇧🇷', name: 'pt', title: 'Mudar para Português' , language: 'Português' },
    { flag: '🇪🇸', name: 'es', title: 'Cambiar a Español', language: 'Español' },
  ];

  mounted() {
    this.$auth.ready(async () => {
      if (this.$auth.check()) {
        await this.loadData();
      }
    });
  }

  get activeLocale() {
    return this.$i18n.locale();
  }

  changeLocale(locale: string) {
    this.$i18n.set(locale);
  }

  @Watch('dialogMessage')
  onDialogMessageChange(newVal) {
    if (newVal) {
      dialog(newVal, false);
    }
  }
}
</script>

<template lang="pug">
    router-view
</template>