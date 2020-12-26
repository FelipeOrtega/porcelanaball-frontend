import {LANCAMENTO_BASE_URL, BaseService} from "./BaseService";

class lancamentoService extends BaseService{

    getlancamentos(history){
        return super.get(history, LANCAMENTO_BASE_URL);
    }

    createlancamento(history, lancamento){
        return super.create(history, LANCAMENTO_BASE_URL,lancamento);
    }

    getlancamentoByCodigo(history, lancamentoCodigo){
        return super.getByCodigo(history, LANCAMENTO_BASE_URL,lancamentoCodigo);
    }

    updatelancamento(history, lancamento){
        return super.update(history, LANCAMENTO_BASE_URL, lancamento);
    }

    deletelancamento(history, lancamentoCodigo){
        return super.delete(history, LANCAMENTO_BASE_URL+lancamentoCodigo);
    }
}

export default new lancamentoService()