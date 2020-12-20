import axios from 'axios';
import {BASE_URL, PLANO_BASE_URL} from "./BaseService";

class planoService {

    getplanos(){
        return axios.get(BASE_URL+PLANO_BASE_URL);
    }

    createplano(plano){
        return axios.post(BASE_URL+PLANO_BASE_URL, plano);
    }

    getplanoByCodigo(planoCodigo){
        return axios.get(BASE_URL+PLANO_BASE_URL+planoCodigo);
    }

    updateplano(plano, planoCodigo){
        return axios.put(BASE_URL+PLANO_BASE_URL+planoCodigo, plano);
    }

    deleteplano(planoCodigo){
        return axios.delete(BASE_URL+PLANO_BASE_URL+planoCodigo);
    }
}

export default new planoService()