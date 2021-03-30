import {MODALIDADE_BASE_URL, BaseService} from "../base/base.service";

class ModalidadeService extends BaseService{

    getModalidades(history){
        return super.get(history, MODALIDADE_BASE_URL);
    }

    createModalidade(history, modalidade){
        return super.create(history, MODALIDADE_BASE_URL,modalidade);
    }

    getModalidadeByCodigo(history, modalidadeCodigo){
        return super.getByCodigo(history, MODALIDADE_BASE_URL,modalidadeCodigo);
    }

    updateModalidade(history, modalidade){
        return super.update(history, MODALIDADE_BASE_URL, modalidade);
    }

    deleteModalidade(history, modalidadeCodigo){
        return super.delete(history, MODALIDADE_BASE_URL+modalidadeCodigo);
    }
}

export default new ModalidadeService()