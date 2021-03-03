import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Table} from "react-bootstrap";
import PaginationHelper  from "../../../../../_helpers/PaginationHelper";
import { TableSearch } from "../../../../../_helpers/TableSearch";
import equipeService from "../../../../../services/equipe/EquipeService";
import ReactGa from "react-ga";

function RelatorioEquipesPage({ match }) {
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
        ReactGa.initialize('G-36BCY6E3RY')
        //to report page view
        ReactGa.pageview('/quadra/relatorios/equipes')

        setLoading(true);
        equipeService.getEquipe(history).then(function (result) {
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
                                    RELATÓRIO DE EQUIPES
                                        <small> QUADRAS
                                    </small>
                                </>
                            }
                        />
                        <CardBody>
                            <div>
                            <input type="text" style={{width:'20%'}} className="form-control" placeholder="PESQUISAR..." onChange={(e) => setSearchVal(e.target.value)} />
                            </div>
                            <br />
                            <div>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>NOME DA EQUIPE</th>
                                            <th style={{ width: '30%' }}>JOGO DIA</th>
                                            <th style={{ width: '30%' }}>VALOR</th>
                                            <th style={{ width: '10%' }}>ATIVO</th>
                                            <th style={{ width: '10%' }}>AÇÕES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData && paginationData.map(equipe =>
                                            <tr key={equipe.codigo}>
                                                <td>{equipe.descricao}</td>
                                                <td>{equipe.jogo_dia_da_semana}</td>
                                                <td>{equipe.valor}</td>
                                                <td>{equipe.ativo ? "SIM" : "NÃO"}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                        
                                                    <Link to={`/quadra/cadastros/equipes/edicao/${equipe.codigo}`} className="btn btn-sm btn-primary mr-1">EDITAR</Link>
                                                    
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
                                                    <div className="p-2">NENHUMA 'EQUIPE' ENCONTRADA.</div>
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

export { RelatorioEquipesPage };





