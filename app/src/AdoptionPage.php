<?php

namespace SilverStripe\App;

use Page;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class AdoptionPage extends Page
{
	private static $has_many = [
		'Pets' => Pet::class,
	];

	private static $table_name = 'AdoptionPage';
}
