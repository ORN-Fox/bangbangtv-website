<template>
    <PagePreloader></PagePreloader>
    <HeaderSite></HeaderSite>

    <router-view/>

    <FooterSite></FooterSite>
</template>

<style lang="scss">
// scss
</style>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import $ from 'jquery';

  import FooterSite from '@/components/FooterSite.vue'; // @ is an alias to /src
  import HeaderSite from '@/components/HeaderSite.vue';
  import PagePreloader from '@/components/PagePreloader.vue';

  (window as any).$ = $;
  (window as any).jQuery = $;

  @Options({
    components: {
        FooterSite,
        HeaderSite,
        PagePreloader
    },
  })
  export default class App extends Vue {}
</script>
