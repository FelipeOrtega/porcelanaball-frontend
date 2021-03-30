import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Table, Form, InputGroup } from "react-bootstrap";
import PaginationHelper  from "../../../../../_helpers/PaginationHelper";
import { TableSearch } from "../../../../../_helpers/TableSearch";
import EquipeService from "../../../../../services/equipe/equipe.service";
import NumberFormat from "react-number-format";

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
        setLoading(true);
        EquipeService.getEquipe(history).then(function (result) {
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
                                            <th style={{ width: '25%' }}>NOME DA EQUIPE</th>
                                            <th style={{ width: '15%' }}>JOGO DIA <i className="fas fa-sort"></i></th>
                                            <th style={{ width: '15%' }}>VALOR</th>
                                            <th style={{ width: '10%' }}>INÍCIO</th>
                                            <th style={{ width: '10%' }}>FIM</th>
                                            <th style={{ width: '7%' }}>ATIVO</th>
                                            <th style={{ width: '10%' }}>AÇÕES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData && paginationData.map(equipe =>
                                            <tr key={equipe.codigo}>
                                                <td><b>{equipe.descricao}</b></td>
                                                <td><b>{equipe.jogo_dia_da_semana}</b></td>
                                                <td>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>R$</InputGroup.Text>
                                                </InputGroup.Prepend><NumberFormat
                                                customInput={Form.Control}
                                                format="####"
                                                value={equipe.valor || ""}/>
                                               
                                                    <InputGroup.Append>
                                                    <InputGroup.Text>,00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                    </InputGroup>
                                                </td>
                                                <td>
                                                    
                                                <Form.Control
                                                        type="time"
                                                        name="jogo_horario_inicial"
                                                        placeholder=""
                                                        autoComplete="off"
                                                        value={equipe.jogo_horario_inicial || ""}
                                                        />
                                                </td>
                                                <td><Form.Control
                                                        type="time"
                                                        name="jogo_horario_final"
                                                        placeholder=""
                                                        autoComplete="off"
                                                        value={equipe.jogo_horario_final || ""}
                                                        />
                                                </td>
                                                <td><b>{equipe.ativo ? "SIM" : "NÃO"}</b></td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                <Link to={`/quadra/visualizar/equipes/${equipe.codigo}`} className="btn btn-sm btn-success mr-1"><i className="fas fa-search"></i></Link>
                                                <Link to={`/quadra/cadastros/equipes/edicao/${equipe.codigo}`} className="btn btn-sm btn-primary mr-1"><i className="fas fa-edit"></i></Link>
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