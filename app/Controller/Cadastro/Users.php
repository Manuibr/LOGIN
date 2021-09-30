<?php

require '../../../vendor/autoload.php';
require '../../../bootstrap/app.php';

use \App\Model\Entity\Users;

$obUsers = new Users();

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

if(isset($name, $email, $password, $repetedPassword)) {

    $obUsers->name = $name;
    $obUsers->email = $email;
    $obUsers->password = $password;

    $obUsers->cadastrar();

    header('Location: ../../../public/pages/paginaprincipal.html');
    exit;

}
