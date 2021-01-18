import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { TableSearch } from "../../../../_helpers/TableSearch";
import equipeService from "../../../../services/equipe/EquipeService";
import  PaginationHelper  from "../../../../_helpers/PaginationHelper";
import {Table} from "react-bootstrap";

function GestaoEquipePage({ match }) {
    const history = useHistory();
    const [equipes, setEquipes] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchVal, setSearchVal] = useState(null);
    const [paginationData, setPaginationData] = useState([]);
    const { filteredData, loadingSearch } = TableSearch({
      searchVal,
      retrieve: equipes
    });

    useEffect(() => {
        setLoading(true);
        const promisse = equipeService.getEquipe(history);
        promisse.then(function (result) {
            if(result != null){
                setEquipes(result.data);
                setLoading(false);
            }
        });

    }, []);

    function onChangePage(paginationData) {
        setPaginationData(paginationData);
    }

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
                                    Atletas / Clientes
                                        <small>
                                    </small>
                                </>
                            }
                        />
                        <CardBody>
                            <div>
                            <input type="text" placeholder="Pesquisar" onChange={(e) => setSearchVal(e.target.value)} />
                            </div>
                            <div>
                                <Table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>Descrição</th>
                                            <th style={{ width: '10%' }}>Ativo</th>
                                            <th style={{ width: '10%' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData && paginationData.map(equipe =>
                                            <tr key={equipe.codigo}>
                                                <td>{equipe.descricao}</td>
                                                <td>{equipe.ativo ? "Sim" : "Nao"}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    <Link to={`/equipe/edicao/${equipe.codigo}`} className="btn btn-sm btn-primary mr-1">Editar</Link>
                                                </td>
                                            </tr>
                                        )}
                                        {!paginationData &&
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="spinner-border spinner-border-lg align-center"></div>
                                                </td>
                                            </tr>
                                        }
                                        {paginationData && !paginationData.length &&
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="p-2">Nenhum equipe encontrado</div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </Table>
                                <PaginationHelper
                                    items={filteredData} onChangePage={onChangePage} 
                                />
                            </div>
                        </CardBody>
                    </Card>

                </div>

            </div>
        </>
    );
}

export { GestaoEquipePage };





