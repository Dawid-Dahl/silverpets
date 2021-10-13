<?php

namespace SilverStripe\App;

use Page;
use DNADesign\Elemental\Models\ElementalArea;
use GraphQL\Examples\Blog\Type\Field\HtmlField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class AdoptionPage extends Page
{
	private static $has_many = [
		'Pets' => Pet::class,
	];

	private static $table_name = 'AdoptionPage';
	private static $description = 'A modular adoption page composed of content blocks';
	private static $icon_class = 'font-icon-p-alt-2';

	private static $has_one = [
		'HorizontalElementalArea' => ElementalArea::class,
	];

	private static $owns = [
		'HorizontalElementalArea',
	];

	private static $cascade_duplicates = [
		'HorizontalElementalArea',
	];
}
