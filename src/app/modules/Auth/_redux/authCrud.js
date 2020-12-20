import axios from "axios";
import {BASE_URL, AUTENTICACAO_BASE_URL} from "../../../../services/BaseService"

export function login ( username, password){
  return axios.post(
    BASE_URL+AUTENTICACAO_BASE_URL, 
    { username, password },
    {
      headers: {
        "Content-Type": "application/json"
      }
    });
}