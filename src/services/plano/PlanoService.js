import {PLANO_BASE_URL, BaseService} from "../BaseService";

class planoService extends BaseService{

    getplanos(history){
        return super.get(history, PLANO_BASE_URL);
    }

    createplano(history, plano){
        return super.create(history, PLANO_BASE_URL,plano);
    }

    getplanoByCodigo(history, planoCodigo){
        return super.getByCodigo(history, PLANO_BASE_URL,planoCodigo);
    }

    updateplano(history, plano){
        return super.update(history, PLANO_BASE_URL, plano);
    }

    deleteplano(history, planoCodigo){
        return super.delete(history, PLANO_BASE_URL+planoCodigo);
    }
}

export default new planoService()