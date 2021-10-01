<?php

namespace App\Model\Entity\Receitas;

use \App\Model\Db\Database;

$ingredientName = $_REQUEST['ingredientName'];

$obDatabase = new Database('receitas');

$obDatabase->insert([
    'nome' => $ingredientName
]);