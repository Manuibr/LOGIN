<?php

namespace App\Model\Entity;

use \App\Model\Db\Database;

use \PDO;

class Receitas {
 
    public static function select() {
        $obDatabase = new Database('users');
        return $obDatabase->select()->fetchAll(PDO::FETCH_CLASS, self::class);
    }

}