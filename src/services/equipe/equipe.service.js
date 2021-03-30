import {EQUIPE_BASE_URL, BaseService} from "../base/base.service";

class EquipeService extends BaseService{

    EQUIPE_HISTORICO_PAGAMENTO_URL = `HistoricoPagamento/`

    getEquipe(history){
        return super.get(history, EQUIPE_BASE_URL);
    }

    createEquipe(history, equipe){
        return super.create(history, EQUIPE_BASE_URL,equipe);
    }

    getEquipeByCodigo(history, equipeCodigo){
        return super.getByCodigo(history, EQUIPE_BASE_URL,equipeCodigo);
    }

    updateEquipe(history, equipe){
        return super.update(history, EQUIPE_BASE_URL, equipe);
    }

    deleteEquipe(history, equipeCodigo){
        return super.delete(history, EQUIPE_BASE_URL+equipeCodigo);
    }

    getHistoricoPagamento(history, equipeCodigo){
        console.log(`${EQUIPE_BASE_URL}${this.EQUIPE_HISTORICO_PAGAMENTO_URL}${equipeCodigo}`)
        return super.get(history, `${EQUIPE_BASE_URL}${this.EQUIPE_HISTORICO_PAGAMENTO_URL}${equipeCodigo}`);
    }

}

export default new EquipeService()