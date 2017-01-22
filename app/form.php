<?php

if (!empty($_GET["action"])) {
    $action = $_GET["action"];
} else {
    return false;
}


switch ($action) {
    case "addContact":
        addContact([
            "name" => $_GET["name"],
            "email" => $_GET["email"],
            "job" => $_GET["job"],
            "location" => $_GET["location"],
            "tag" => $_GET["tag"],
            "avatar" => filter_var($_GET["avatar"], FILTER_VALIDATE_URL) ? $_GET["avatar"] : "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        ]);
        break;

    case "importContacts":
        importContacts();
        break;

    case "deleteContacts":
        deleteContacts();
        break;

    case "exportContacts":
        exportContacts();
        break;
}

function addContact($aContact) {
    $aResponse = [];
    $filename = createFilename($aContact["email"]);

    if($filename === false) {
        $aResponse["success"] = false;
        $aResponse["message"] = "invalid filename";
        echo json_encode($aResponse);

        return false;
    }

    $aContact["id"] = $filename["fileId"];

    if (createFile($filename["path"], json_encode($aContact))) {
        $aResponse[$aContact["id"]]["success"] = true;
        $aResponse[$aContact["id"]]["message"] = "file created " . $filename["path"];

        if(updateMainFile($aContact)) {
            $aResponse["contacts"]["success"] = true;
            $aResponse["contacts"]["message"] = "main file updated";
        } else {
            $aResponse["contacts"]["success"] = false;
            $aResponse["contacts"]["message"] = "main file not updated";
        }
    } else {
        $aResponse[$aContact["id"]]["success"] = false;
        $aResponse[$aContact["id"]]["message"] = "file not created";
    }

    echo json_encode($aResponse);
    return $aResponse;
}

function importContacts() {
    $contacts = json_decode(file_get_contents("data/58088826100000e9232b75b0.json"));

    foreach ($contacts as $contact) {
        addContact(get_object_vars($contact));
    }

    header("Location: /");
}

function deleteContacts() {
    $filename = "data/contacts.json";

    file_put_contents($filename, json_encode([]));

    header("Location: /");
}

function exportContacts() {
    header("Content-disposition: attachment; filename=contacts.json");
    header("Content-type: application/json");
    readfile("data/contacts.json");
}

function createFilename($email) {
    if (empty($email)) {
        return false;
    }

    $emailParts = explode("@", $email);
    $baseDir = "data/";
    $extension = ".json";

    if (!empty($emailParts[0])) {
        $fileId = $emailParts[0] . time();

        return [
            "fileId" => $fileId,
            "path" => $baseDir . $fileId . $extension
        ];
    }

    return false;
}

function updateMainFile($content) {
    $filename = "data/contacts.json";
    $mainFile = json_decode(file_get_contents($filename));

    array_push($mainFile, $content);

    return file_put_contents($filename, json_encode($mainFile));
}

function createFile($filename, $content) {
    return file_put_contents($filename, $content);
}