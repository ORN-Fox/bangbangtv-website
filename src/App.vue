<template>
    <PagePreloader></PagePreloader>
    <HeaderSite></HeaderSite>

    <router-view/>

    <FooterSite></FooterSite>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

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
  import FooterSite from '@/components/FooterSite.vue'; // @ is an alias to /src
  import HeaderSite from '@/components/HeaderSite.vue';
  import PagePreloader from '@/components/PagePreloader.vue';

  @Options({
    components: {
        FooterSite,
        HeaderSite,
        PagePreloader
    },
  })
  export default class App extends Vue {}
</script>
