<template>
    <div class="breadcrumb-option spad set-bg" data-setbg="/img/breadcrumb-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>{{ pageTitle }}</h2>
                        <div class="breadcrumb__links">
                            <router-link to="/">Accueil</router-link>
                            <span>{{ pageTitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
      name: 'BreadcrumbSite',
      props: {
        pageTitle: String,
      },
    });
</script>