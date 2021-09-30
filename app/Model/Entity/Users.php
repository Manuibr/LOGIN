<?php

namespace App\Model\Entity;

use \App\Model\Db\Database;

class Users {

    /**
     * Id do usuário
     * @var integer
     */
    public $id;

    /**
     * Nome do usuário
     * @var string
     */
    public $name;
    
    /**
     * Email do usuário
     * @var string
     */
    public $email;

    /**
     * Senha do usuário
     *
     * @var string
     */
    public $password;

    public function cadastrar() {
        $obDatabase = new Database('users');
        $this->id = $obDatabase->insert([
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
        ]);
    }

}