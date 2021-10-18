<?php

namespace SilverStripe\App;

use Exception;
use PageController;
use SilverStripe\Control\Email\Email;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
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
        "detail",
        "InquiryForm"
    ];

    public function InquiryForm()
    {
        $myForm = Form::create(
            $this,
            __FUNCTION__,
            FieldList::create(
                TextField::create("Name", "Your Name"),
                EmailField::create('Email', 'Your Email'),
                TextareaField::create("Inquiry", "Inquiry"),
                CheckboxField::create("IsPetOwner", "Already A Dog Owner?"),
                HiddenField::create("PetID", "The Pet Id", $this->getRequest()->param("ID")),
            ),
            FieldList::create(FormAction::create("handleFormSubmission", "Submit Inquiry")),
            RequiredFields::create("YourName", "Email", "Inquiry",)
        );

        return $myForm;
    }

    public function handleFormSubmission($data, $form)
    {
        try {
            $IsPetOwner = (isset($data["IsPetOwner"])) ? 1 : 0;

            $petInquiry = PetInquiry::create();
            $petInquiry->IsPetOwner = $IsPetOwner;
            $petInquiry->PetID = $data["PetID"];

            $form->saveInto($petInquiry);

            $petInquiry->write();

            $session = $this->getRequest()->getSession();

            $randomNumber = rand(5, 15);

            $session->set("My value --- {$randomNumber}", "You are super gay -> {$randomNumber}!");

            return $this->redirect("success-page/");
        } catch (Exception $e) {
            var_dump($e);
        }
    }

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
