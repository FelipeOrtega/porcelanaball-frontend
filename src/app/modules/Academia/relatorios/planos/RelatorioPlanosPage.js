import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { TableSearch } from "../../../../../_helpers/TableSearch";
import planoService from "../../../../../services/plano/PlanoService";

function RelatorioPlanosPage({ match }) {
    const history = useHistory();
    const [plano, setPlano] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchVal, setSearchVal] = useState(null);
    const { filteredData, loadingSearch } = TableSearch({
      searchVal,
      retrieve: plano
    });

    useEffect(() => {
        setLoading(true);
        const promisse = planoService.getPlano(history);
        promisse.then(function (result) {
            if(result != null){
                setPlano(result.data);
                setLoading(false);
            }
        });

    }, []);

    if (isLoading || loadingSearch) {
        return <div className="d-flex flex-wrap justify-content-between align-items-center">
          <span className="ml-3 spinner spinner-white"></span>
        </div>
      }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Card className="mt-4">
                        <CardHeader
                            title={
                                <>
                                    RELATÓRIO DE PLANOS
                                        <small> ACADEMIA</small>
                                </>
                            }
                        />
                        <CardBody>
                            <div>
                            <input type="text" placeholder="PESQUISAR..." onChange={(e) => setSearchVal(e.target.value)} />
                            </div>
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>DESCRIÇÃO</th>
                                            <th style={{ width: '30%' }}>VALOR</th>
                                            <th style={{ width: '10%' }}>ATIVO</th>
                                            <th style={{ width: '10%' }}>AÇÕES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData && filteredData.map(plano =>
                                            <tr key={plano.codigo}>
                                                <td>{plano.descricao}</td>
                                                <td>{plano.valor}</td>
                                                <td>{plano.ativo ? "SIM" : "NÃO"}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    <Link to={`/plano/edicao/${plano.codigo}`} className="btn btn-sm btn-primary mr-1">EDITAR</Link>
                                                </td>
                                            </tr>
                                        )}
                                        {!filteredData &&
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="spinner-border spinner-border-lg align-center"></div>
                                                </td>
                                            </tr>
                                        }
                                        {filteredData && !filteredData.length &&
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="p-2">NENHUM 'PLANO' ENCONTRADO.</div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>

                </div>

            </div>
        </>
    );
}

export { RelatorioPlanosPage };