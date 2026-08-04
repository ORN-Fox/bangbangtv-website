<template>
    <PagePreloader></PagePreloader>
    <HeaderSite></HeaderSite>

    <router-view/>

    <FooterSite></FooterSite>
</template>

<style lang="scss">
  @import url('bootstrap/dist/css/bootstrap.min.css');
</style>

<script lang="ts">
  import { defineComponent } from 'vue';
  import $ from 'jquery';

  import FooterSite from '@/components/FooterSite.vue'; // @ is an alias to /src
  import HeaderSite from '@/components/HeaderSite.vue';
  import PagePreloader from '@/components/PagePreloader.vue';

  declare global {
    interface Window {
      $: typeof $;
      jQuery: typeof $;
    }
  }

  window.$ = $;
  window.jQuery = $;

  export default defineComponent({
    components: {
      FooterSite,
      HeaderSite,
      PagePreloader,
    },
  });
</script>
