import axios from 'axios';
import {BASE_URL, LANCAMENTO_BASE_URL} from "./BaseService";

class lancamentoService {

    getlancamentos(){
        return axios.get(BASE_URL+LANCAMENTO_BASE_URL);
    }

    createlancamento(lancamento){
        return axios.post(BASE_URL+LANCAMENTO_BASE_URL, lancamento);
    }

    getlancamentoByCodigo(lancamentoCodigo){
        return axios.get(BASE_URL+LANCAMENTO_BASE_URL+lancamentoCodigo);
    }

    updatelancamento(lancamento, lancamentoCodigo){
        return axios.put(BASE_URL+LANCAMENTO_BASE_URL+lancamentoCodigo, lancamento);
    }

    deletelancamento(lancamentoCodigo){
        return axios.delete(BASE_URL+LANCAMENTO_BASE_URL+lancamentoCodigo);
    }
}

export default new lancamentoService()