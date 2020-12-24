import {ALUNO_BASE_URL, BaseService} from "./BaseService";

class alunoService extends BaseService{

    getalunos(){
        return super.get(ALUNO_BASE_URL);
    }

    createaluno(aluno){
        return super.create(ALUNO_BASE_URL,aluno);
    }

    getalunoByCodigo(alunoCodigo){
        return super.getByCodigo(ALUNO_BASE_URL,alunoCodigo);
    }

    updatealuno(aluno){
        return super.update(ALUNO_BASE_URL, aluno);
    }

    deletealuno(alunoCodigo){
        return super.delete(ALUNO_BASE_URL+alunoCodigo);
    }
}

export default new alunoService()