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
use SilverStripe\Forms\DropdownField;
use SilverStripe\Versioned\Versioned;

class PetInquiry extends DataObject
{
    private static $db = [
        "Name" => "Varchar",
        "Email" => "Varchar",
        "Inquiry" => "Text",
        "IsPetOwner" => "Boolean",
        "Status" => 'Enum(array("Pending","Under Review","Completed","Rejected"), "Pending")',
    ];

    private static $table_name = 'PetInquiry';

    private static $has_one = [
        "Pet" => Pet::class,
    ];

    private static $defaults = [
        "IsPetOwner" => false
    ];

    private static $summary_fields = array(
        'Name',
        'Email',
        'Inquiry',
        'IsPetOwner.Nice' => "Pet Owner",
        'Pet.Name' => "Pet Name",
        'Status'
    );

    private static $extensions = [
        Versioned::class,
    ];

    private static $versioned_gridfield_extensions = true;

    public function getCMSFields()
    {
        $fields = $fields = parent::getCMSFields();

        return $fields;
    }
}
