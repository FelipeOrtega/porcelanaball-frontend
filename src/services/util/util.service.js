class UtilService {

    static formataDataSaida(data) {
        var d = new Date(data), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        var dataFormatada = `${day}/${month}/${year}`;
        return dataFormatada;
    }
}

export { UtilService }; 