<?php

namespace SilverStripe\App;

use SilverStripe\ORM\DataObject;

class PetController extends DataObject
{
    public function init()
    {
        parent::init();
    }

    private static $table_name = 'PetController';

    public function FeaturedPets()
    {
        /* $pets = Pet::get()->limit(4);

        dump($pets); */
        dump("HELLO!");

        /* return $pets; */
    }
}
