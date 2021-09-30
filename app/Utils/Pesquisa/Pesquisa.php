<?php

require '../../../vendor/autoload.php';
require '../../../bootstrap/app.php';

use \App\Model\Db\Database;

$obDatabase = new Database('receitas');

$search = $_REQUEST['search'];

if(isset($search)) {
    $result = $obDatabase->select('nome', null, null, $search)->fetchAll(PDO::FETCH_CLASS);

    foreach($result as $row) {
        echo "<li>";
        echo $row->nome;
        echo "</li>";
    }
}
