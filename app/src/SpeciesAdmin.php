<?php

namespace SilverStripe\App;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\App\Species;

class SpeciesAdmin extends ModelAdmin
{

    private static $menu_title = 'Species';

    private static $url_segment = 'species';

    private static $managed_models = [
        Species::class,
    ];
}
