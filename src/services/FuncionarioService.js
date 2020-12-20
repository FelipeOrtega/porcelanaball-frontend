import axios from 'axios';
import {BASE_URL, FUNCIONARIO_BASE_URL} from "./BaseService";

class funcionarioService {

    getfuncionarios(){
        return axios.get(BASE_URL+FUNCIONARIO_BASE_URL);
    }

    createfuncionario(funcionario){
        return axios.post(BASE_URL+FUNCIONARIO_BASE_URL, funcionario);
    }

    getfuncionarioByCodigo(funcionarioCodigo){
        return axios.get(BASE_URL+FUNCIONARIO_BASE_URL+funcionarioCodigo);
    }

    updatefuncionario(funcionario, funcionarioCodigo){
        return axios.put(BASE_URL+FUNCIONARIO_BASE_URL+funcionarioCodigo, funcionario);
    }

    deletefuncionario(funcionarioCodigo){
        return axios.delete(BASE_URL+FUNCIONARIO_BASE_URL+funcionarioCodigo);
    }
}

export default new funcionarioService()