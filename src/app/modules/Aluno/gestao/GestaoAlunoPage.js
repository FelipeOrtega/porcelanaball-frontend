import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { TableSearch } from "../../../../_helpers/TableSearch";
import alunoService from "../../../../services/aluno/AlunoService";

function GestaoAlunoPage({ match }) {
    const history = useHistory();
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setLoading] = useState(false);

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
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>Nome</th>
                                            <th style={{ width: '30%' }}>Apelido</th>
                                            <th style={{ width: '30%' }}>CPF</th>
                                            <th style={{ width: '10%' }}>Ativo</th>
                                            <th style={{ width: '10%' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData && filteredData.map(aluno =>
                                            <tr key={aluno.codigo}>
                                                <td>{aluno.nome}</td>
                                                <td>{aluno.apelido}</td>
                                                <td>{aluno.cpf}</td>
                                                <td>{aluno.ativo ? "Sim" : "Nao"}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    <Link to={`/aluno/edicao/${aluno.codigo}`} className="btn btn-sm btn-primary mr-1">Editar</Link>
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
                                                    <div className="p-2">Nenhum aluno encontrado</div>
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

export { GestaoAlunoPage };





