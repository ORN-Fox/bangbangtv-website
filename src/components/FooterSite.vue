<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <p>La boisson du bonheur !!!</p>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="footer__top__social">
                            <a href="https://www.facebook.com/bangbangtv" target="_blank" rel="noopener"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="https://www.youtube.com/@BangBangTV" target="_blank" rel="noopener"><i class="fab fa-youtube fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__option">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                        <div class="footer__option__item">
                            <router-link to="/" class="footer__option__logo"><img src="../assets/img/logo.webp" alt=""></router-link>
                            <h5>BangBangTV</h5>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 col-sm-3">
                        <div class="footer__option__item">
                            <h5>Lien rapides</h5>
                            <ul>
                                <li><router-link to="/about">A propos</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 col-sm-3">
                        <div class="footer__option__item">
                            <h5>Nos réalisations</h5>
                            <ul>
                                <li><router-link to="/projects/machinima">Machinima</router-link></li>
                                <li><router-link to="/projects/montages">Montages</router-link></li>
                                <li><router-link to="/projects/others">Autres</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__copyright">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p class="footer__copyright__text">Copyright &copy; 2011 - <span id="currentYear"></span> Tous droits réservés</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    export default class PortfolioItem extends Vue {
        mounted() {
            const currentYearElement = document.getElementById('currentYear');
            if (currentYearElement) {
                currentYearElement.innerText = new Date().getFullYear().toString();
            }
        }
    }
</script>