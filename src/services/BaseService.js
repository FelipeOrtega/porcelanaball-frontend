import axios from 'axios';

//export const BASE_URL = "https://api.porcelanaball.com.br/";
export const BASE_URL = "https://localhost:5001/";
export const AUTENTICACAO_BASE_URL = "Autenticacao/";
export const ALUNO_BASE_URL = "Aluno/";
export const FUNCIONARIO_BASE_URL = "Funcionario/";
export const PLANO_BASE_URL = "Plano/";
export const LANCAMENTO_BASE_URL = "Lancamento/";
export const EQUIPE_BASE_URL = "Equipe/";
export const PAGAMENTO_BASE_URL = "Pagamento/";
export const EQUIPE_ALUNO_BASE_URL = "EquipeAluno/";
export const MODALIDADE_BASE_URL = "Modalidade/";
export const MODULO_BASE_URL = "Modulo/";
export const QUADRA_BASE_URL = "Quadra/";
export const DIA_SEMANA_BASE_URL = "DiaSemana/";

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