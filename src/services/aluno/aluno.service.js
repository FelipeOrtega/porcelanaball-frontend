import {ALUNO_BASE_URL, BaseService} from "../base/base.service";

class AlunoService extends BaseService{

    getAluno(history){
        return super.get(history, ALUNO_BASE_URL);
    }

    createAluno(history, aluno){
        console.log(aluno);
        return super.create(history, ALUNO_BASE_URL,aluno);
    }

    getAlunoByCodigo(history, alunoCodigo){
        return super.getByCodigo(history, ALUNO_BASE_URL,alunoCodigo);
    }

    updateAluno(history, aluno){
        return super.update(history, ALUNO_BASE_URL, aluno);
    }

    deleteAluno(history, alunoCodigo){
        return super.delete(history, ALUNO_BASE_URL+alunoCodigo);
    }
}

export default new AlunoService()