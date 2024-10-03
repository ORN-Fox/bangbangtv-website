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
                            <a href="https://www.facebook.com/bangbangtv" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.youtube.com/@BangBangTV" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
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
                            <h5>Who we are</h5>
                            <ul>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Locations</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 col-sm-3">
                        <div class="footer__option__item">
                            <h5>Our work</h5>
                            <ul>
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Latest</a></li>
                                <li><a href="#">Browse Archive</a></li>
                                <li><a href="#">Video for web</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <div class="footer__option__item">
                            <h5>Newsletter</h5>
                            <p>Videoprah is an award-winning, full-service production company specializing.</p>
                            <form action="#">
                                <input type="text" placeholder="Email">
                                <button type="submit"><i class="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__copyright">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p class="footer__copyright__text">Copyright &copy; 2011 - TODO
                            <!-- <script>
                                document.write(new Date().getFullYear());
                            </script> -->
                            Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>