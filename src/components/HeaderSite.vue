<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <router-link to="/"><img src="../assets/img/logo.webp" alt="" style="width: 6rem;"></router-link>
                    </div>
                </div>

                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                <li><router-link to="/about">A propos</router-link></li>
                                <li>
                                    <a href="#">Nos réalisations</a>
                                    <ul class="dropdown">
                                        <li><router-link to="/projects/machinima">Machinima</router-link></li>
                                        <li><router-link to="/projects/assembly">Montages</router-link></li>
                                        <li><router-link to="/projects/others">Autres</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div class="header__nav__social">
                            <a href="https://www.facebook.com/bangbangtv" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.youtube.com/@BangBangTV" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
</template>