import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col, Badge, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import { useHistory } from "react-router-dom";
import { TableSearch } from "../../../../_helpers/TableSearch";
import NumberFormat from "react-number-format";
import {Table} from "react-bootstrap";
import ReactGa from "react-ga";

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
    ReactGa.initialize('G-36BCY6E3RY')
    //to report page view
    ReactGa.pageview('/quadra/pagamentos')

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
                      <option>EQUIPE EXEMPLO</option>
                      <option>SAO PAULINO</option>
                      <option>WALLACE</option>
                      <option>DANDA</option>
                      <option>CLAUDIO ROSA</option>
                      <option>HENRIQUE</option>
                      <option>MAREGA</option>
                      <option>WILL</option>
                      <option>RAUL</option>
                      <option>KITTA</option>
                      <option>ANAO</option>
                      <option>SANDRO</option>
                      <option>VAL</option>
                      <option>HINHA</option>
                      <option>VAL GUEDES</option>
                      <option>REINALDO</option>
                      <option>JE</option>
                      <option>FINAZZI</option>
                      <option>MANE</option>
                      <option>RONI</option>
                      <option>DJALMA</option>
                      <option>MAX</option>
                      <option>GUEDES</option>
                      <option>MARCIOA</option>
                      <option>RENAN</option>
                      <option>FABINHO</option>
                      <option>CLAUDINHO</option>
                      <option>FROIS</option>
                      <option>TIAGO BETTY BOOP 01</option>
                      <option>TIAGO BETTY BOOP 02</option>
                      <option>BRUNO</option>
                      <option>CAIQUE</option>
                      <option>ERIC</option>
                      <option>FABIO</option>
                      <option>RICARDO</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>DIA DE VENCIMENTO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="05"
                        readOnly
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>MENSALIDADE</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$700,00"
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
                    <Form.Label><b>VALOR</b></Form.Label>
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
                        placeholder="0"
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
                            <br />
                            <div>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '20%' }}>DATA DO PAGAMNETO</th>
                                            <th style={{ width: '20%' }}>TIPO</th>
                                            <th style={{ width: '20%' }}>PAGO POR</th>
                                            <th style={{ width: '10%' }}>VALOR PAGO</th>
                                            <th style={{ width: '20%' }}>VALOR À PAGAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>01/03/2021</td>
                                                <td>PARCIAL</td>
                                                <td>GUILHERME (TESTE)</td>
                                                <td>100,00</td>
                                                <td>600,00</td>
                                            </tr>
                                            <tr>
                                                <td>02/03/2021</td>
                                                <td>PARCIAL</td>
                                                <td>ANDRE (TESTE)</td>
                                                <td>100,00</td>
                                                <td>500,00</td>
                                            </tr>
                                    </tbody>
                                </Table>
                               
                            </div>
                        </CardBody>
                    </Card>

                </div>

            </div>

        
           
      </>
  );
}

export { PagamentoEquipePage };












