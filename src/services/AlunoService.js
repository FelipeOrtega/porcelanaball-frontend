import axios from 'axios';
import {BASE_URL, ALUNO_BASE_URL} from "./BaseService";

class alunoService {

    getalunos(){
        return axios.get(BASE_URL+ALUNO_BASE_URL);
    }

    createaluno(aluno){
        return axios.post(BASE_URL+ALUNO_BASE_URL, aluno);
    }

    getalunoByCodigo(alunoCodigo){
        return axios.get(BASE_URL+ALUNO_BASE_URL+alunoCodigo);
    }

    updatealuno(aluno){
        return axios.put(BASE_URL+ALUNO_BASE_URL, aluno);
    }

    deletealuno(alunoCodigo){
        return axios.delete(BASE_URL+ALUNO_BASE_URL+alunoCodigo);
    }
}

export default new alunoService()