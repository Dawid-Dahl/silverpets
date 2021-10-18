<?php

namespace SilverStripe\App;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\App\PetInquiry;

class PetInquiryAdmin extends ModelAdmin
{

    private static $menu_title = 'PetInquiries';

    private static $url_segment = 'pet-inquiries';

    private static $menu_icon_class = 'font-icon-clipboard-pencil';

    private static $managed_models = [
        PetInquiry::class,
    ];
}
