import {MODULO_BASE_URL, BaseService} from "../base/base.service";

class ModuloService extends BaseService{

    getModulos(history){
        return super.get(history, MODULO_BASE_URL);
    }

    createModulo(history, modulo){
        return super.create(history, MODULO_BASE_URL,modulo);
    }

    getModuloByCodigo(history, moduloCodigo){
        return super.getByCodigo(history, MODULO_BASE_URL,moduloCodigo);
    }

    updateModulo(history, modulo){
        return super.update(history, MODULO_BASE_URL, modulo);
    }

    deleteModulo(history, moduloCodigo){
        return super.delete(history, MODULO_BASE_URL+moduloCodigo);
    }
}

export default new ModuloService()