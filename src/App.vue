<template>
    <PagePreloader></PagePreloader>
    <HeaderSite></HeaderSite>

    <router-view/>

    <FooterSite></FooterSite>
</template>

<style lang="scss">
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
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
