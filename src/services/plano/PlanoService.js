import {PLANO_BASE_URL, BaseService} from "../BaseService";

class planoService extends BaseService{

    getPlano(history){
        return super.get(history, PLANO_BASE_URL);
    }

    createPlano(history, plano){
        return super.create(history, PLANO_BASE_URL,plano);
    }

    getPlanoByCodigo(history, planoCodigo){
        return super.getByCodigo(history, PLANO_BASE_URL,planoCodigo);
    }

    updatePlano(history, plano){
        return super.update(history, PLANO_BASE_URL, plano);
    }

    deletePlano(history, planoCodigo){
        return super.delete(history, PLANO_BASE_URL+planoCodigo);
    }
}

export default new planoService()