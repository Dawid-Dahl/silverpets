<?php

namespace SilverStripe\App;

use PageController;
use SilverStripe\View\Requirements;

class HomePageController extends PageController
{
    public function init()
    {
        parent::init();

        Requirements::css("themes/my-theme/dist/app.css");
        Requirements::javascript("themes/my-theme/dist/app.js");
    }

    public function FeaturedPets()
    {
        $pets = Pet::get()->limit(4);

        return $pets;
    }
}
