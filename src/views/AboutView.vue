<template>
    <BreadcrumbSite pageTitle="A propos"/>

    <!-- About Section Begin -->
    <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about__pic">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="about__pic__item about__pic__item--large set-bg"
                                    data-setbg="/img/about/about-1.jpg"></div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="about__pic__item set-bg" data-setbg="/img/about/about-2.jpg"></div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="about__pic__item set-bg" data-setbg="/img/about/about-3.jpg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about__text">
                        <div class="section-title">
                            <span>About videograph</span>
                            <h2>WHo we are?</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="services__item">
                                    <div class="services__item__icon">
                                        <img src="../assets/img/icons/si-3.png" alt="">
                                    </div>
                                    <h4>Video distribution</h4>
                                    <p>Whether you’re halfway through the editing process, or you.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="services__item">
                                    <div class="services__item__icon">
                                        <img src="../assets/img/icons/si-4.png" alt="">
                                    </div>
                                    <h4>Video hosting</h4>
                                    <p>Whether you’re halfway through the editing process, or you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="about__text__desc">
                            <p>La BangBangTV est un studio amateur réalisant des vidéos, principalement des Machinimas et Montage dans l'univers de Halo. Leur humour et leur passion pour Halo en font une référence incontournable pour les fans de la série dans le domaine du Machinima.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import $ from 'jquery';

    import BreadcrumbSite from '@/components/BreadcrumbSite.vue'; // @ is an alias to /src

    @Options({
        components: {
            BreadcrumbSite,
        },
    })
    export default class AboutView extends Vue {
        mounted() {
            /*------------------
                Background Set
            --------------------*/
            $('.set-bg').each(function (_index, element) {
                let bg = $(element).data('setbg');
                $(element).css('background-image', 'url(' + bg + ')');
            });
        }
    }
</script>