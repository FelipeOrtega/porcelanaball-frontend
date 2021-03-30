import {QUADRA_BASE_URL, BaseService} from "../base/base.service";

class QuadraService extends BaseService{

    getQuadra(history){
        return super.get(history, QUADRA_BASE_URL);
    }

    createQuadra(history, quadra){
        console.log(quadra);
        return super.create(history, QUADRA_BASE_URL,quadra);
    }

    getQuadraByCodigo(history, quadraCodigo){
        return super.getByCodigo(history, QUADRA_BASE_URL,quadraCodigo);
    }

    updateQuadra(history, quadra){
        return super.update(history, QUADRA_BASE_URL, quadra);
    }

    deleteQuadra(history, quadraCodigo){
        return super.delete(history, QUADRA_BASE_URL+quadraCodigo);
    }
}

export default new QuadraService()