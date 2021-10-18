<?php

namespace SilverStripe\App;

use PageController;
use SilverStripe\View\Requirements;

class AlertPageController extends PageController
{
    public function init()
    {
        parent::init();

        Requirements::css("themes/my-theme/dist/app.css");
        Requirements::javascript("themes/my-theme/dist/app.js");
    }

    private static $table_name = 'AlertPageController';
}
