<?php

namespace SilverStripe\App;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\App\Pet;

class PetAdmin extends ModelAdmin
{

    private static $menu_title = 'Pets';

    private static $url_segment = 'pets';

    private static $managed_models = [
        Pet::class,
    ];
}
