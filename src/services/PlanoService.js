import {PLANO_BASE_URL, BaseService} from "./BaseService";

class planoService extends BaseService{

    getplanos(){
        return super.get(PLANO_BASE_URL);
    }

    createplano(plano){
        return super.create(PLANO_BASE_URL,plano);
    }

    getplanoByCodigo(planoCodigo){
        return super.getByCodigo(PLANO_BASE_URL,planoCodigo);
    }

    updateplano(plano){
        return super.update(PLANO_BASE_URL, plano);
    }

    deleteplano(planoCodigo){
        return super.delete(PLANO_BASE_URL+planoCodigo);
    }
}

export default new planoService()