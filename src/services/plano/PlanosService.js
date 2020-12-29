import {PLANO_BASE_URL, BaseService} from "../BaseService";

class planosService extends BaseService{

    getPlanos(history){
        return super.get(history, PLANO_BASE_URL);
    }

    createPlano(history, planos){
        return super.create(history, PLANO_BASE_URL,planos);
    }

    getPlanoByCodigo(history, planoCodigo){
        return super.getByCodigo(history, PLANO_BASE_URL,planoCodigo);
    }

    updatePlano(history, planos){
        return super.update(history, PLANO_BASE_URL, planos);
    }

    deletePlano(history, planoCodigo){
        return super.delete(history, PLANO_BASE_URL+planoCodigo);
    }
}

export default new planosService()