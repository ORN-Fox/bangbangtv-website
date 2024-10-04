<template>
    <BreadcrumbSite pageTitle="Nos réalisations"/>

    <section class="portfolio spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="portfolio__filter">
                        <li class="active" data-filter="*">Tout</li>
                        <li v-for="category in categories" :key="category.value" :data-filter="`.${category.value}`">{{ category.title }}</li>
                    </ul>
                </div>
            </div>

            <div class="row portfolio__gallery">
                <PortfolioItem
                    v-for="video in videos"
                    :key="video.videoHash"
                    :category="video.category"
                    :videoHash="video.videoHash"
                    :title="video.title"
                    :tags="video.tags"
                />
            </div>

            <!-- <div class="row">
                <div class="col-lg-12">
                    <div class="pagination__option">
                        <a href="#" class="arrow__pagination left__arrow"><span class="arrow_left"></span> Prev</a>
                        <a href="#" class="number__pagination">1</a>
                        <a href="#" class="number__pagination">2</a>
                        <a href="#" class="arrow__pagination right__arrow">Next <span class="arrow_right"></span></a>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import { reactive, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import $ from 'jquery';
    import mixitup from 'mixitup';

    import { Category } from '@/models/category.model';
    import { Video } from '@/models/video.model';

    import BreadcrumbSite from '@/components/BreadcrumbSite.vue'; // @ is an alias to /src
    import PortfolioItem from '@/components/PortfolioItem.vue';

    @Options({
        components: {
            BreadcrumbSite,
            PortfolioItem,
        },
    })
    export default class ProjectView extends Vue {

        categories = reactive<Category[]>([]);
        videos = reactive<Video[]>([]);

        mixer: any;

        mounted() {
            const route = useRoute()
            const routeParams = useRoute().params;

            this.loadVideos(routeParams.category as string);

            watch(
                () => route.params.category,
                (newCategory) => {
                    console.log('category', newCategory);
                    this.loadVideos(newCategory as string);
                }
            )
        }

        private loadVideos(category: string) {
            switch(category) {
                case "machinima":
                    this.loadMachinimas();
                    break;

                case "montages":
                    this.loadMontages();
                    break;

                case "others":
                    this.loadOthers();
                    break;
            }

            this.initBackgroundManagementAndMixitup();
        }

        private initBackgroundManagementAndMixitup() {
            setTimeout(() => {
                // /*------------------
                //     Background Set
                // --------------------*/
                $('.set-bg').each(function (_index, element) {
                    let bg = $(element).data('setbg');
                    $(element).css('background-image', 'url(' + bg + ')');
                });

                /*------------------
                    Portfolio filter
                --------------------*/
                $('.portfolio__filter li').on('click', function () {
                    $('.portfolio__filter li').removeClass('active');
                    $(this).addClass('active');
                });
                if ($('.portfolio__gallery').length > 0) {
                    if (this.mixer) {
                        this.mixer.destroy();
                    }

                    let containerEl = document.querySelector('.portfolio__gallery');
                    this.mixer = mixitup(containerEl);
                }
            }, 0);
        }

        private loadMachinimas() {
            this.categories = [
                new Category('Long métrage', 'longMachinima'),
                new Category('Court métrage', 'shortMachinima'),
                new Category('Parodie', 'parody'),
                new Category('Autres', 'other')
            ];

            this.videos = [
                new Video('shortMachinima', 'Une surprise surprenante', 'WKVuVKnrDZ0', []),
                new Video('longMachinima', 'Noestalgie', 'qB2nYn-Spqw', []),
                new Video('other', 'Teaser - Machinima Spécial 10 ans', 'LNR9oVngERs', ['Teaser', 'Anniversaire']),
                new Video('shortMachinima', 'Matchmakinima - Le match de team', 'WvzUy-uWnrg', ['Matchmakinima']),
                new Video('shortMachinima', 'Wort Wort Wort', 'ipFnxKI16aI', []),
                new Video('other', 'Il y a 10 ans...', 'WjENhhhOXbw', []),
                new Video('shortMachinima', 'Matchmakinima - Le meilleur Halo', 'idJu4vO6MaU', ['Matchmakinima']),
                new Video('shortMachinima', 'MachinimaZ - La demoiselle en détresse', 'vtMIefzUSrk', ['MachinimaZ']),
                new Video('other', 'À la découverte de Infinite', 'nv_wulKR7QQ', []),
                new Video('longMachinima', 'Le monde de Noël', 'kOI4uZ0LBe8', ['Noël']),
                new Video('longMachinima', "Un Noël d'Enfer", 'Y-7XG_rkaeQ', ['Noël']),
                new Video('longMachinima', 'Halo 4 Débarque', 'qgSutyTZnUI', []),
                new Video('longMachinima', 'Halomon (Épisode 2)', 'T0B6vWWNcoc', ['Halomon']),
                new Video('shortMachinima', 'Le meilleur jeu de tous les temps - Bande Annonce', '0kBP9VqbeFk', ['']),
                new Video('longMachinima', 'Un Noël à tout prix', 'rAcqUGI3x7U', []),
                new Video('shortMachinima', 'Joyeux Anniversaire la BBTV!', 'dwQ4mv8CaQg', ['Anniversaire']),
                new Video('longMachinima', 'Le guide Halo du petit Machinéaste (Tuto pour Machinima)', 'Cb3RNpHs71g', ['Tuto']),
                new Video('longMachinima', 'Halomon (Épisode 1)', 'sRoPYTi3Z7U', ['Halomon']),
                new Video('other', 'Halo Info - Edition Septembre / Octobre', '3fWK64AopAQ', ['Halo Info']),
                new Video('other', 'Halo info - Edition Avril / Mai', 'lmdc4r1j_Qs', ['Halo Info']),
                new Video('other', 'Halo Info - Edition Janvier / Février', 'PWS7QybpV4Y', ['Halo Info']),
                new Video('parody', 'Parodie Zalando (version Halo)', 'Sp1gtZ5-roU', []),
                new Video('other', "Dur, dur d'être un héros", 'TBRfa-xT_nI', ['Animation']),
                new Video('longMachinima', 'Vive Noël', '2Bww23aVESI', ['Noël']),
            ];
        }

        private loadMontages() {
            this.categories = [
                new Category('Gameplay', 'gameplay'),
                new Category('Autres', 'other')
            ];

            this.videos = [
                new Video('other', 'La Vie est un jeu', 'V96XgahsEk0', ['Halo Reach']),
                new Video('gameplay', 'Une Beta Reach en fun', '7NOjawuqIDg', ['Halo Reach']),
                new Video('gameplay', 'Hommage à Halo 3', 'p5txX5Y44IU', ['Halo 3']),
                new Video('gameplay', 'The Big Bang Theory', 'PiEDiLkoafA', ['Halo 3']),
                new Video('gameplay', 'La Bang Bang Team', '7IJ0oTtgnco', ['Halo 3']),
                new Video('gameplay', 'Warthog poweR', '1EsOp9wEgOg', ['Halo 3']),
                new Video('gameplay', 'Noscope Brothers', 'k87bBgwC0yo', ['Halo 3'])
            ];
        }

        private loadOthers() {
            this.categories = [
            ];

            this.videos = [
            ];
        }

    }
</script>