import {DIA_SEMANA_BASE_URL, BaseService} from "../base/base.service";

class diaSemanaService extends BaseService{

    getDiaSemana(history){
        return super.get(history, DIA_SEMANA_BASE_URL);
    }

    createDiaSemana(history, diaSemana){
        console.log(diaSemana);
        return super.create(history, DIA_SEMANA_BASE_URL,diaSemana);
    }

    getDiaSemanaByCodigo(history, diaSemanaCodigo){
        return super.getByCodigo(history, DIA_SEMANA_BASE_URL,diaSemanaCodigo);
    }

    updateDiaSemana(history, diaSemana){
        return super.update(history, DIA_SEMANA_BASE_URL, diaSemana);
    }

    deleteDiaSemana(history, diaSemanaCodigo){
        return super.delete(history, DIA_SEMANA_BASE_URL+diaSemanaCodigo);
    }
}

export default new diaSemanaService()