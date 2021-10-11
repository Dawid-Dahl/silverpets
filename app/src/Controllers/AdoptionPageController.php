<?php

namespace SilverStripe\App;

use PageController;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\View\Requirements;

class AdoptionPageController extends PageController
{
    public function init()
    {
        parent::init();

        Requirements::css("themes/my-theme/dist/app.css");
        Requirements::javascript("themes/my-theme/dist/app.js");
    }

    private static $allowed_actions = [
        "detail"
    ];

    public function detail(HTTPRequest $request)
    {
        $pet = Pet::get()->byID($request->param("ID"));

        if (!$request->param("ID")) {
            $this->httpError(404, "You suck!");
            return;
        };

        return [
            "Pet" => $pet,
            "Title" => $pet->Name
        ];
    }
}
