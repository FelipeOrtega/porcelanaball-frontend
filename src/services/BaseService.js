import axios from 'axios';

export const BASE_URL = "http://localhost:5000/";
export const AUTENTICACAO_BASE_URL = "Autenticacao/";
export const ALUNO_BASE_URL = "Aluno/";
export const FUNCIONARIO_BASE_URL = "Funcionario/";
export const PLANO_BASE_URL = "Plano/";
export const LANCAMENTO_BASE_URL = "Lancamento/";
export const EQUIPE_BASE_URL = "Equipe/";
export const MODALIDADE_BASE_URL = "Modalidade/";
export const MODULO_BASE_URL = "Modulo/";

class BaseService {

    get(history, URL) {
        return axios.get(`${BASE_URL}${URL}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error, history);
        });
    }

    create(history, URL, object) {
        return axios.post(`${BASE_URL}${URL}`, object).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error, history);
        });
    }

    getByCodigo(history, URL, object) {
        return axios.get(`${BASE_URL}${URL}${object}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error, history);
        });
    }

    update(history, URL, object) {
        return axios.put(`${BASE_URL}${URL}`, object).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error, history);
        });
    }

    delete(history, URL, object) {
        return axios.delete(`${BASE_URL}${URL}${object}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error, history);
        });
    }

    handleErrors(error, history) {
        console.log(error.message);        
        if (error.message.includes("Network Error") || error.response.status === 401) {
            history.push("/logout");
        }
    }
}



export { BaseService }