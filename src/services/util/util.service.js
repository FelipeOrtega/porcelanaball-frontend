import moment from 'moment';

class UtilService {

    static formataData(data, mascara) {
        return moment(data).format(mascara);
    }

    static formataMoedaComCifrao(valor){
        if(valor)
            return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    static formataMoedaSemCifrao(valor){
        if(valor)
            return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
    }
}

export { UtilService }; 