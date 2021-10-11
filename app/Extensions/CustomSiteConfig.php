<?php

use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
use SilverStripe\Forms\TreeDropdownField;
use SilverStripe\ORM\DataExtension;

class CustomSiteConfig extends DataExtension
{

    private static $db = [
        "FooterTagline" => "HTMLText",
        "FooterCallout" => "HTMLText",
        "FooterDetails" => "HTMLText"
    ];

    private static $has_one = [
        "CallToActionPage" => Page::class
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $fields->push(TreeDropdownField::create("CallToActionPageID", "Call To Action Page Link", SiteTree::class));
        $fields->push(HTMLEditorField::create("FooterDetails", "Footer Details")->SetRows(9));
        $fields->push(HTMLEditorField::create("FooterTagline", "Footer Tagline")->SetRows(5));
        $fields->push(HTMLEditorField::create("FooterCallout", "Footer Callout")->SetRows(5));

        return $fields;
    }
}
