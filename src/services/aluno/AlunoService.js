import {ALUNO_BASE_URL, BaseService} from "../BaseService";

class alunoService extends BaseService{

    getalunos(history){
        return super.get(history, ALUNO_BASE_URL);
    }

    createaluno(history, aluno){
        return super.create(history, ALUNO_BASE_URL,aluno);
    }

    getalunoByCodigo(history, alunoCodigo){
        return super.getByCodigo(history, ALUNO_BASE_URL,alunoCodigo);
    }

    updatealuno(history, aluno){
        return super.update(history, ALUNO_BASE_URL, aluno);
    }

    deletealuno(history, alunoCodigo){
        return super.delete(history, ALUNO_BASE_URL+alunoCodigo);
    }
}

export default new alunoService()