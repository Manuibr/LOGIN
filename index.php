<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/bootstrap/app.php';

use \App\Entity\Receitas;

$users = Receitas::getUsers();
print_r($users);

