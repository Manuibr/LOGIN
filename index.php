<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/bootstrap/app.php';

use \App\Model\Entity\Receitas;

header('Location: public/pages/paginaprincipal.html');

$users = Receitas::getUsers();
print_r($users);

