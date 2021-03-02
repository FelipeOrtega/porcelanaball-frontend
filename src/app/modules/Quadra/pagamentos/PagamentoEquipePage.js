import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col, Badge, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import equipeAlunoService from "../../../../services/equipe/EquipeAlunoService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";
import { ListagemAluno } from "../../Aluno/ListagemAluno"
import { CadastroEdicaoAlunoPage } from "../../Aluno/gestao/CadastroEdicaoAlunoPage";
import { TableSearch } from "../../../../_helpers/TableSearch";
import NumberFormat from "react-number-format";
import {Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginationHelper  from "../../../../_helpers/PaginationHelper";

function PagamentoEquipePage({ match }) {
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

  if (isLoading) {
      return <div className="d-flex flex-wrap justify-content-between align-items-center">
        <span className="ml-3 spinner spinner-white"></span>
      </div>
    }

  return (
      <>
          <div className="row">
              <div className="col-md-12">
                 
              <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                     PAGAMENTOS
                    <small> QUADRA</small>
                    </>
                  }
                />
                <CardBody>
      
                <Alert variant="secondary">
                  <Alert.Heading>INFORMAÇÃO <i className="fas fa-info-circle"></i></Alert.Heading>
                    <p>
                     Para lançar um pagamento, selecione a <b>EQUIPE</b> (deve ser previamente cadastrada através do menu <b>QUADRA - CADASTROS - CADASTRO DE EQUIPES</b>). Após selecionar a <b>EQUIPE</b>, informe a <b>DATA DO PAGAMENTO</b> e o <b>TIPO</b>:
                     <br /><br />
                     <h6><Badge variant="success"><b>1.</b>  INTEGRAL</Badge></h6>
                     Quando escolhida essa opção, automaticamente o sistema preenche o campo <b>VALOR PAGO</b> com a informação do <b>VALOR TOTAL</b>. Confira e clique em <b>SALVAR</b>.
                     <br /><br />
                     <h6><Badge variant="warning"><b>2.</b>  PARCIAL</Badge></h6>
                     Quando escolhida essa opcão, preencha qual é o valor que está sendo pago pelo <b>CLIENTE/EQUIPE</b> nesse momento e clique em <b>SALVAR</b>.
                    </p>
                </Alert>

                <br />
                
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridEquipeDescricao">
                      <Form.Label><b>EQUIPE</b></Form.Label>
                       <Form.Control as="select">
                      <option>SELECIONE UMA EQUIPE</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VENCIMENTO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="05"
                        readOnly
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VALOR TOTAL</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$0,00"
                        readOnly
                        />
                    </Form.Group>
                </Form.Row>

                <hr /><br/>

                <Form.Row>
                <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>DATA DO PAGAMENTO</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>TIPO</b></Form.Label>
                      <Form.Control as="select">
                      <option>INTEGRAL</option>
                      <option>PARCIAL</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGO POR</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="NOME DO CLIENTE"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>MENSALIDADE</b></Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>R$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <NumberFormat
                    customInput={Form.Control}
                        required
                        format="####"
                        type="valor"
                        name="valor"
                        placeholder="700"
                        autoComplete="off"
                        removeFormatting="numericString"
                        />
                    <InputGroup.Append>
                    <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                   
                    </Form.Group>
                  </Form.Row>
                  <hr /><br />
                  
                </CardBody>
                <Button type="submit" variant="success">SALVAR</Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
                <div className="col-md-12">
                    <Card className="mt-4">
                        <CardHeader
                            title={
                                <>
                                    PAGAMENTOS DO MÊS VIGENTE
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
                                            <th style={{ width: '20%' }}>DATA DO PAGAMNETO</th>
                                            <th style={{ width: '20%' }}>TIPO</th>
                                            <th style={{ width: '20%' }}>PAGO POR</th>
                                            <th style={{ width: '10%' }}>VALOR</th>
                                            <th style={{ width: '20%' }}>TOTAL À PAGAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginationData && paginationData.map(equipe =>
                                            <tr key={equipe.codigo}>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
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

export { PagamentoEquipePage };












