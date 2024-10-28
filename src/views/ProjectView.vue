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
    import { useRoute, useRouter } from 'vue-router';
    import 'magnific-popup';
    import 'magnific-popup/dist/magnific-popup.css';
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
                    $('.portfolio__filter').children().each((index, element) => {
                        if (index == 0) {
                            element.classList.add("active");
                        } else {
                            element.classList.remove("active");
                        }
                    });

                    this.loadVideos(newCategory as string);
                }
            );
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

                default: {
                    const router = useRouter();
                    router.push({ path: '/projects/machinima', replace: true });
                    return;
                }
            }

            this.initBackgroundManagementAndMixitup();
            this.initMaginificPopup();
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

        private initMaginificPopup() {
          setTimeout(() => {
            ($('.video-popup') as any).magnificPopup({
                type: 'iframe'
            });
          }, 0);
        }

        private loadMachinimas() {
            this.categories = [
                new Category('Long métrage', 'longMachinima'),
                new Category('Court métrage', 'shortMachinima'),
                new Category('Autres', 'other')
            ];

            this.videos = [
                new Video('longMachinima', 'Opération Chronos - Épisode 3', 'DSYGtV_ovzM', ['Halove Machinima', 'Halo SF']),
                new Video('longMachinima', 'Opération Chronos - Épisode 2', 'jfTI_GYrtt8', ['Halove Machinima', 'Halo SF']),
                new Video('longMachinima', 'Opération Chronos - Épisode 1', 'EcCborRcLu8', ['Halove Machinima', 'Halo SF']),
                new Video('shortMachinima', 'Une surprise surprenante', 'WKVuVKnrDZ0', []),
                new Video('longMachinima', 'Noestalgie', 'qB2nYn-Spqw', []),
                new Video('other', 'Teaser - Machinima Spécial 10 ans', 'LNR9oVngERs', ['Teaser', 'Anniversaire']),
                new Video('shortMachinima', 'Matchmakinima - Le match de team', 'WvzUy-uWnrg', ['Matchmakinima']),
                new Video('other', 'Halo Infinite - 343i VS Fans (Parodie)', '4ptGujFZLaU', ['Fan']),
                new Video('shortMachinima', 'Wort Wort Wort', 'ipFnxKI16aI', []),
                new Video('other', 'Il y a 10 ans...', 'WjENhhhOXbw', []),
                new Video('shortMachinima', 'Il y a comme un air de Noël...', 'g_CUITd1Y6w', []),
                new Video('shortMachinima', 'Matchmakinima - Le meilleur Halo', 'idJu4vO6MaU', ['Matchmakinima']),
                new Video('shortMachinima', 'MachinimaZ - La demoiselle en détresse', 'vtMIefzUSrk', ['MachinimaZ']),
                new Video('shortMachinima', 'À la découverte de Infinite', 'nv_wulKR7QQ', []),
                new Video('longMachinima', 'Le monde de Noël', 'kOI4uZ0LBe8', ['Noël']),
                new Video('longMachinima', 'Halo 5 prend la relève', '5R2WpiJZocA', ['Noël']),
                new Video('longMachinima', 'Le Noël de Shépard', 'Ty7LsUj7XxM', ['Noël']),
                new Video('shortMachinima', 'Des vacances qui commencent bien !', 'FGf0fG81ip8', []),
                new Video('longMachinima', "Un Noël d'Enfer", 'Y-7XG_rkaeQ', ['Noël']),
                new Video('longMachinima', 'Halo 4 Débarque', 'qgSutyTZnUI', []),
                new Video('other', 'La Connec Mec', 'GWSnL82S16I', ['Chanson']),
                new Video('longMachinima', 'Halomon (Épisode 2)', 'T0B6vWWNcoc', ['Halomon']),
                new Video('shortMachinima', 'Le meilleur jeu de tous les temps - Bande Annonce', '0kBP9VqbeFk', ['']),
                new Video('longMachinima', 'Un Noël à tout prix', 'rAcqUGI3x7U', []),
                new Video('shortMachinima', 'Joyeux Anniversaire la BBTV!', 'dwQ4mv8CaQg', ['Anniversaire']),
                new Video('other', 'Je joue comme un pro', 'JnYa6byJ9GI', ['Chanson']),
                new Video('shortMachinima', 'Halo Info - Edition Septembre / Octobre', '3fWK64AopAQ', ['Halo Info']),
                new Video('longMachinima', 'Le guide Halo du petit Machinéaste (Tuto pour Machinima)', 'Cb3RNpHs71g', ['Tuto']),
                new Video('longMachinima', 'Halomon (Épisode 1)', 'sRoPYTi3Z7U', ['Halomon']),
                new Video('shortMachinima', 'Halo info - Edition Avril / Mai', 'lmdc4r1j_Qs', ['Halo Info']),
                new Video('other', 'Parodie Zalando (version Halo)', 'Sp1gtZ5-roU', []),
                new Video('shortMachinima', 'Halo Info - Edition Janvier / Février', 'PWS7QybpV4Y', ['Halo Info']),
                new Video('other', "Dur, dur d'être un héros", 'TBRfa-xT_nI', ['Animation']),
                new Video('longMachinima', 'Vive Noël', '2Bww23aVESI', ['Noël']),
                new Video('longMachinima', 'Au revoir Halo 3, bonjour Reach!', 'd9p8p5IkKLE', []),
                new Video('longMachinima', 'Extinction', 'hRIN1nTiE44', []),
                new Video('shortMachinima', 'Mission Reach - Episode 5', 'd9p8p5IkKLE', ['Mission Reach', 'Beta Halo Reach']),
                new Video('shortMachinima', 'Mission Reach - Episode 4', '-qc435Iue0k', ['Mission Reach', 'Beta Halo Reach']),
                new Video('shortMachinima', 'Hommage à Michael Jackson', '-mkxOPxFmmk', []),
                new Video('shortMachinima', 'Mission Reach - Episode 3', 'I278AzSBI_s', ['Mission Reach', 'Beta Halo Reach']),
                new Video('shortMachinima', 'Mission Reach - Episode 2', 'aT_epcePeo0', ['Mission Reach', 'Beta Halo Reach']),
                new Video('shortMachinima', 'Mission Reach - Episode 1', 'IKom6QNvmbw', ['Mission Reach', 'Beta Halo Reach'])
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
                new Category('Mr Bang', 'mrBang')
            ];

            this.videos = [
                new Video('mrBang', 'Mr Bang - Le pire coéquipier du monde ! (Ep 12)', 'vgZVtn_psok', ['Mr Bang', 'Halo 3']),
                new Video('mrBang', 'Mr Bang - Un drapeau au middle (Ep 11)', 'k-xOBqzSG0Q', ['Mr Bang', 'Halo 3']),
                new Video('mrBang', 'Mr bang - Le vestiaire à grenades (Ep 10)', 'tMaem3caJzY', ['Mr Bang', 'Halo 2']),
                new Video('mrBang', "Mr Bang - Trop d'amour en vous ! (HS 1)", 'k2iQa13Jb28', ['Mr Bang', 'Hors série']),
                new Video('mrBang', 'Mr Bang - Vive Noël ! (Ep 8)', 'Xdsgxz_FREs', ['Mr Bang', 'Halo 4']),
                new Video('mrBang', 'Mr Bang - Le pompe funèbre (Ep 7)', 'VHwQU6AZjGk', ['Mr Bang', 'Halo 5']),
                new Video('mrBang', 'Mr Bang - Le putain de retour ! (Ep 6)', 'fOtNzYSsJJQ', ['Mr Bang', 'Halo 5']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 5', '9RMUAOg2Z8w', ['Mr Bang', 'Halo Reach']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 4', '9q9K0Tv0bpo', ['Mr Bang', 'Halo Reach']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 4', '9q9K0Tv0bpo', ['Mr Bang', 'Halo Reach']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 3', 'zUnier7xFjk', ['Mr Bang', 'Halo Reach']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 2', 'jvIap_rl6F8', ['Mr Bang', 'Halo Reach']),
                new Video('mrBang', 'Les Commentaires de Mr Bang - Episode 1', 'HlasGNgLNiY', ['Mr Bang', 'Halo Reach'])
            ];
        }

    }
</script>
