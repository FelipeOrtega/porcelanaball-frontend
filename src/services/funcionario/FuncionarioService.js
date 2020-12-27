import {FUNCIONARIO_BASE_URL, BaseService} from "../BaseService";

class funcionarioService extends BaseService{

    getfuncionarios(history){
        return super.get(history, FUNCIONARIO_BASE_URL);
    }

    createfuncionario(history, funcionario){
        return super.create(history, FUNCIONARIO_BASE_URL,funcionario);
    }

    getfuncionarioByCodigo(history, funcionarioCodigo){
        return super.getByCodigo(history, FUNCIONARIO_BASE_URL,funcionarioCodigo);
    }

    updatefuncionario(history, funcionario){
        return super.update(history, FUNCIONARIO_BASE_URL, funcionario);
    }

    deletefuncionario(history, funcionarioCodigo){
        return super.delete(history, FUNCIONARIO_BASE_URL+funcionarioCodigo);
    }
}

export default new funcionarioService()