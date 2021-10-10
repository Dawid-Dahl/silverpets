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

    public function DefaultPetImage()
    {
        return "https://petdogowner.com/wp-content/uploads/2019/12/123948512_l-770x515.jpg";
    }
}
