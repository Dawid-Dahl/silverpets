<div id="my-vue-nav">
    <nav class="my-nav">
        <div class="my-nav__wrapper">
            <a class="my-nav__logo-wrapper" href="#">
                <img class="my-nav__logo" src="_resources/themes/my-theme/images/pet-logo_white.png" alt="..." height="36">
            </a>
            <div class="my-nav__menu-wrapper">
                <div @click="handleHamburgerClick" class="my-nav__hamburger-icon-wrapper">
                    <i :style="activeHamburgerIconStyles" class="my-nav__hamburger-icon fas fa-bars"></i>
                    <i :style="activeTimesIconStyles" class="my-nav__times-icon fas fa-times"></i>
                </div>
                <ul class="my-nav__menu-list">
                    <li class="my-nav__menu-item">About us</li>
                    <li class="my-nav__menu-item">Community</li>
                    <li class="my-nav__menu-item">FAQ</li>
                    <li class="my-nav__menu-item">Adopt</li>
                </ul>
            </div>
        </div>
        <div :style="activeNavMenuStyles" class="my-nav__dropdown-menu-wrapper">
            <ul class="my-nav__dropdown-menu-list">
                <li class="my-nav__dropdown-menu-item">About us</li>
                <li class="my-nav__dropdown-menu-item">Community</li>
                <li class="my-nav__dropdown-menu-item">FAQ</li>
                <li class="my-nav__dropdown-menu-item">Adopt</li>
            </ul>
        </div>
    </nav>
</div>