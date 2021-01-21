import {EQUIPE_ALUNO_BASE_URL, BaseService} from "../BaseService";

class equipeAlunoService extends BaseService{

    getEquipeAluno(history){
        return super.get(history, EQUIPE_ALUNO_BASE_URL);
    }

    createEquipeAluno(history, equipeAluno){
        return super.create(history, EQUIPE_ALUNO_BASE_URL,equipeAluno);
    }

    getEquipeAlunoByCodigo(history, equipeAlunoCodigo){
        return super.getByCodigo(history, EQUIPE_ALUNO_BASE_URL,equipeAlunoCodigo);
    }

    updateEquipeAluno(history, equipeAluno){
        return super.update(history, EQUIPE_ALUNO_BASE_URL, equipeAluno);
    }

    deleteEquipeAluno(history, equipeAlunoCodigo){
        return super.delete(history, EQUIPE_ALUNO_BASE_URL+equipeAlunoCodigo);
    }
}

export default new equipeAlunoService()