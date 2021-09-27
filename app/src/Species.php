<?php

namespace SilverStripe\App;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Control\Controller;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Versioned\Versioned;

class Species extends DataObject
{
    private static $db = [
        "Name" => "Varchar",
        "Description" => "HTMLText",
    ];

    private static $table_name = 'Species';

    private static $has_many = [
        "Pets" => Pet::class,
    ];

    private static $extensions = [
        Versioned::class,
    ];

    private static $versioned_gridfield_extensions = true;

    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create("Name"),
            HTMLEditorField::create("Description"),
        );

        return $fields;
    }
}
