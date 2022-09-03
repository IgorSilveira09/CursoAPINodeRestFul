// UsuarioController é o cara que recebe as requisições, trabalha com as requisições
// ELE FORNECE OS METODOS

// CADA ITEM DENTRO DA CLASSE É UM MÉTODO

class UsuarioController {
    login (req,res) {
        return res.json({mensagem:"Usuario ou senha invalido"});

    }
    obter (req,res){
        return res.json([{id:1, nome:"Igor"}]);

    }
    adicionar(req, res){

    }
    atualizar(req, res){

    }
    inativar(req, res){

    }


};

module.exports = UsuarioController;