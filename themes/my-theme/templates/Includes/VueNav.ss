<div id="my-vue-nav">
    <nav class="my-nav">
        <div :style="scrolledNavStyles" class="my-nav__wrapper">
            <a class="my-nav__logo-wrapper" href="#">
                <img class="my-nav__logo" src="_resources/themes/my-theme/images/pet-logo_white.png" alt="logo">
                <img style="display: none;" src="_resources/themes/my-theme/images/pet-logo_black.png">
            </a>
            <div class="my-nav__menu-wrapper">
                <div @click="handleHamburgerClick" class="my-nav__hamburger-icon-wrapper">
                    <i :style="activeHamburgerIconStyles" class="my-nav__hamburger-icon fas fa-bars"></i>
                    <i :style="activeTimesIconStyles" class="my-nav__times-icon fas fa-times"></i>
                </div>
                <ul class="my-nav__menu-list">
                    <% loop $Menu(1) %>
                        <li :style="scrolledNavMenuItemStyles" class="my-nav__menu-item"><a class="$LinkingMode" href="$Link">$MenuTitle</a></li>
                    <% end_loop %>
                    <a class="my-nav__menu-item-adopt" href="adoption"><li class="my-nav__menu-item" :style="scrolledNavMenuItemStyles">Adopt</li></a>
                </ul>
            </div>
        </div>
        <div :style="activeNavMenuStyles" class="my-nav__dropdown-menu-wrapper">
            <ul class="my-nav__dropdown-menu-list">
                <% loop $Menu(1) %>
                    <li class="my-nav__dropdown-menu-item"><a href="$Link">$MenuTitle</a></li>
                <% end_loop %>
            </ul>
        </div>
    </nav>
</div>