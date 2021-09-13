<div id="my-vue-nav">
    <nav class="my-nav">
        <a class="my-nav__logo-wrapper" href="#">
            <img class="my-nav__logo" src="_resources/themes/my-theme/images/pet-logo_white.png" alt="..." height="36">
        </a>
        <div class="my-nav__menu-wrapper">
            <div @click="handleHamburgerClick" class="my-nav__menu-hamburger--inactive">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="my-nav__menu-list--inactive">
                <li class="my-nav__menu-item">About us</li>
                <li class="my-nav__menu-item">Community</li>
                <li class="my-nav__menu-item">FAQ</li>
                <li class="my-nav__menu-item">Adopt</li>
            </ul>
        </div>
    </nav>
</div>