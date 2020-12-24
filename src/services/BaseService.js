import axios from 'axios';

export const BASE_URL = "https://localhost:44319/";
export const AUTENTICACAO_BASE_URL = "Autenticacao/";
export const ALUNO_BASE_URL = "Aluno/";
export const FUNCIONARIO_BASE_URL = "Funcionario/";
export const PLANO_BASE_URL = "Plano/";
export const LANCAMENTO_BASE_URL = "Lancamento/";

class BaseService {

    get(URL) {
        return axios.get(`${BASE_URL}${URL}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error);
        });
    }

    create(URL, object) {
        return axios.post(`${BASE_URL}${URL}`, object).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error);
        });
    }

    getByCodigo(URL, object) {
        return axios.get(`${BASE_URL}${URL}${object}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error);
        });
    }

    update(URL, object) {
        return axios.put(`${BASE_URL}${URL}`, object).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error);
        });
    }

    delete(URL, object) {
        return axios.delete(`${BASE_URL}${URL}${object}`).then((response) => {
            return response.data;
        }).catch((error) => {
            this.handleErrors(error);
        });
    }

    handleErrors(error) {
        console.log(error);
        if (error.response.status === 401) {
            this.props.history.push("/logout");
        }
    }
}



export { BaseService }