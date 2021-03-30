import {PAGAMENTO_BASE_URL, BaseService} from "../base/base.service";

class PagamentoService extends BaseService{

    getPagamento(history){
        return super.get(history, PAGAMENTO_BASE_URL);
    }

    createPagamento(history, pagamento){
        return super.create(history, PAGAMENTO_BASE_URL,pagamento);
    }

    getPagamentoByCodigo(history, pagamentoCodigo){
        return super.getByCodigo(history, PAGAMENTO_BASE_URL,pagamentoCodigo);
    }

    updatePagamento(history, pagamento){
        return super.update(history, PAGAMENTO_BASE_URL, pagamento);
    }

    deletePagamento(history, pagamentoCodigo){
        return super.delete(history, PAGAMENTO_BASE_URL+pagamentoCodigo);
    }
}

export default new PagamentoService()