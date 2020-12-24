import {FUNCIONARIO_BASE_URL, BaseService} from "./BaseService";

class lancamentoService extends BaseService{

    getlancamentos(){
        return super.get(FUNCIONARIO_BASE_URL);
    }

    createlancamento(lancamento){
        return super.create(FUNCIONARIO_BASE_URL,lancamento);
    }

    getlancamentoByCodigo(lancamentoCodigo){
        return super.getByCodigo(FUNCIONARIO_BASE_URL,lancamentoCodigo);
    }

    updatelancamento(lancamento){
        return super.update(FUNCIONARIO_BASE_URL, lancamento);
    }

    deletelancamento(lancamentoCodigo){
        return super.delete(FUNCIONARIO_BASE_URL+lancamentoCodigo);
    }
}

export default new lancamentoService()