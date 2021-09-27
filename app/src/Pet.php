<?php

namespace SilverStripe\App;

use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\CurrencyField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\NumericField;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Versioned\Versioned;

class Pet extends DataObject
{
    private static $db = [
        "Name" => "Varchar",
        "Breed" => "Varchar",
        "Cost" => "Currency",
        "Age" => "Int",
        "IsAdopted" => "Boolean"
    ];

    private static $table_name = 'Pet';

    private static $has_one = [
        "Species" => Species::class,
        "PrimaryPhoto" => Image::class
    ];

    private static $defaults = [
        "IsAdopted" => false
    ];

    private static $owns = [
        'PrimaryPhoto',
    ];

    private static $extensions = [
        Versioned::class,
    ];

    private static $versioned_gridfield_extensions = true;

    public function getCMSFields()
    {
        $fields = FieldList::create(TabSet::create("Root"));

        $fields->addFieldsToTab("Root.Main", [
            TextField::create("Name"),
            DropdownField::create("SpeciesID", "Species")
                ->setSource(Species::get()),
            TextField::create("Breed"),
            CurrencyField::create("Cost", "Adoption Cost"),
            NumericField::create("Age"),
            CheckboxField::create("IsAdopted")
        ]);

        $fields->addFieldsToTab("Root.Photos", $upload = UploadField::create("PrimaryPhoto", "Primary photo"));

        $upload->getValidator()->setAllowedExtensions(['png', 'jpeg', 'jpg', 'gif']);

        $upload->setFolderName("pet-photos");

        return $fields;
    }
}
