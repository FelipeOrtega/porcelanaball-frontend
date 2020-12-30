import {EQUIPE_BASE_URL, BaseService} from "../BaseService";

class equipeService extends BaseService{

    getEquipes(history){
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
}

export default new equipeService()