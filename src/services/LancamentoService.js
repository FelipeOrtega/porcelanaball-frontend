import {LANCAMENTO_BASE_URL, BaseService} from "./BaseService";

class lancamentoService extends BaseService{

    getlancamentos(){
        return super.get(LANCAMENTO_BASE_URL);
    }

    createlancamento(lancamento){
        return super.create(LANCAMENTO_BASE_URL,lancamento);
    }

    getlancamentoByCodigo(lancamentoCodigo){
        return super.getByCodigo(LANCAMENTO_BASE_URL,lancamentoCodigo);
    }

    updatelancamento(lancamento){
        return super.update(LANCAMENTO_BASE_URL, lancamento);
    }

    deletelancamento(lancamentoCodigo){
        return super.delete(LANCAMENTO_BASE_URL+lancamentoCodigo);
    }
}

export default new lancamentoService()