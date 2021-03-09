import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { TableSearch } from "../../../../../_helpers/TableSearch";
import alunoService from "../../../../../services/aluno/AlunoService";
import PaginationHelper  from "../../../../../_helpers/PaginationHelper";
import {Table, Form} from "react-bootstrap";
import NumberFormat from "react-number-format";

function RelatorioClientesPage({ match }) {
    const history = useHistory();
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [paginationData, setPaginationData] = useState([]);
    const [searchVal, setSearchVal] = useState(null);
    const { filteredData, loadingSearch } = TableSearch({
      searchVal,
      retrieve: alunos
    });

    useEffect(() => {
        setLoading(true);
        const promisse = alunoService.getAluno(history);
        promisse.then(function (result) {
            if(result != null){
                setAlunos(result.data);
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
                                <> RELATÓRIO DE CLIENTES
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
                                            <th style={{ width: '30%' }}>NOME <i className="fas fa-sort-alpha-down"></i></th>
                                            <th style={{ width: '15%' }}>APELIDO </th>
                                            <th style={{ width: '20%' }}>CPF</th>
                                            <th style={{ width: '20%' }}>CELULAR</th>
                                            <th style={{ width: '10%' }}>ATIVO</th>
                                            <th style={{ width: '10%' }}>AÇÕES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData && paginationData.map(aluno =>
                                            <tr key={aluno.codigo}>
                                                <td><b>{aluno.nome}</b></td>
                                                <td>{aluno.apelido}</td>
                                               
                                                <td ><NumberFormat
                                                customInput={Form.Control}
                                                readOnly
                                                format="###.###.###-##"
                                                value={aluno.cpf || ""}/>
                                                </td>
                                                <td ><NumberFormat
                                                customInput={Form.Control}
                                                readOnly
                                                format="(##) #####-####"
                                                value={aluno.telefone_celular || ""}/>
                                                </td>
                                                <td>{aluno.ativo ? "SIM" : "NÃO"}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                <Link to={`/quadra/visualizar/clientes/${aluno.codigo}`} className="btn btn-sm btn-success mr-1"><i className="fas fa-search"></i></Link>
                                                <Link to={`/quadra/cadastros/clientes/edicao/${aluno.codigo}`} className="btn btn-sm btn-primary mr-1"><i className="fas fa-edit"></i></Link>
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
                                                <div className="p-2">NENHUM 'CLIENTE / ATLETA' ENCONTRADO.</div>
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

export { RelatorioClientesPage };