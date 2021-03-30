import axios from "axios";
import {BASE_URL, AUTENTICACAO_BASE_URL} from "../../../../services/base/base.service"

export function login ( username, password){
  return axios.post( BASE_URL+AUTENTICACAO_BASE_URL, 
    { username, password, 
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    }
    });
}