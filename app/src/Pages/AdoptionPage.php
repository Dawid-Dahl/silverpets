<?php

namespace SilverStripe\App;

use GraphQL\Examples\Blog\Type\Field\HtmlField;
use Page;
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
}
