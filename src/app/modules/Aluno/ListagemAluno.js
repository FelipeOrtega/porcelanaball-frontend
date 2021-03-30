import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../_partials/controls";
import { useHistory } from "react-router-dom";
import  PaginationHelper  from "../../../_helpers/PaginationHelper";
import AlunoService from "../../../services/aluno/aluno.service";
import {Table} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { TableSearch } from "../../../_helpers/TableSearch";

function ListagemAluno({alunosSelecionadosCallBack, handleChange}) {
    const history = useHistory();
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchVal, setSearchVal] = useState(null);
    const [paginationData, setPaginationData] = useState([]);
    const { filteredData, loadingSearch } = TableSearch({
        searchVal,
        retrieve: alunos
      });
    
    useEffect(() => {
        setLoading(true);
        const promisse = AlunoService.getAluno(history);
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

    if (isLoading) {
        return <div className="d-flex flex-wrap justify-content-between align-items-center">
          <span className="ml-3 spinner spinner-white"></span>
        </div>
      }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Card className="mt-4">
                        <CardBody>
                        <input type="text" style={{width:'20%'}} className="form-control" placeholder="PESQUISAR..." onChange={(e) => setSearchVal(e.target.value)} />
                        <br />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '0.05%' }}></th>
                                            <th style={{ width: '20%' }}>NOME</th>
                                            <th style={{ width: '20%' }}>APELIDO</th>
                                            <th style={{ width: '10%' }}>CPF</th>
                                            <th style={{ width: '5%' }}>ATIVO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData.map(aluno =>
                                            <tr key={aluno.codigo}>
                                                <td><Form.Check type="checkbox" onChange={(e) => handleChange(e, aluno)} /></td>
                                                <td>{aluno.nome}</td>
                                                <td>{aluno.apelido}</td>
                                                <td>{aluno.cpf}</td>
                                                <td>{aluno.ativo ? "SIM" : "NÃO"}</td>
                                            </tr>
                                        )}
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
                            <div className="d-flex flex-row py-4 justify-content-end">
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}

export { ListagemAluno };





