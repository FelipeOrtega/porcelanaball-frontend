import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col, Badge, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import {Table} from "react-bootstrap";
import ReactGa from "react-ga";

function PagamentoEquipePage({ match }) {
  const history = useHistory();
  const [equipe, setEquipe] = useState([]);
  const { id } = match.params;
  const novoPagamento = !id;
  const [isLoading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    ReactGa.initialize('G-36BCY6E3RY')
    //to report page view
    ReactGa.pageview('/quadra/pagamentos')

    equipeService.getEquipe(history).then(function (result) {
      if (result != null) {
        setEquipe(result.data);
      }
    });
    
    setLoading(false);
    }

    // eslint-disable-next-line
);

  function onChangePage(paginationData) {
      setPaginationData(paginationData);
  }

  return (
    <Formik
      onSubmit={(values, { setStatus, setSubmitting }) => {
        setStatus();
        
      }}
      enableReinitialize
      initialValues={equipe ? equipe : {
        descricao: "",
        codigo: 0,
        valor: "",
      
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-md-12">
                 
              <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                     PAGAMENTOS
                    <small> QUADRA - EQUIPES</small>
                    </>
                  }
                />
                <CardBody>
      
                <Form.Row>

                    <Form.Group as={Col} md="6" controlId="formGridEquipeSelecionada">
                      <Form.Label><b>EQUIPE SELECIONADA</b></Form.Label>
                      <Form.Control as="select"
                        name="equipe_descricao"
                        value={values.equipe_descricao}
                        onChange={handleChange}
                      >
                        {equipe.map(equipe => (<option value={equipe.descricao}
                          defaultValue={values.equipe_descricao === equipe.descricao}
                          key={equipe.codigo}>
                          {equipe.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="formGridEquipeDiaVencimento">
                      <Form.Label><b>DIA DE VENCIMENTO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="05"
                        readOnly
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeMensalidadeValor">
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
                <Form.Group as={Col} md="3" controlId="formGridValorPago">
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
                        removeFormatting="numericString"
                        />
                    <InputGroup.Append>
                    <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="formGridEquipeObservacaoCredito">
                      <Form.Label><b>CRÉDITO</b></Form.Label>
                      <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>R$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <NumberFormat
                    customInput={Form.Control}
                        required
                        format="####"
                        type="credito"
                        name="credito"
                        placeholder="0"
                        removeFormatting="numericString"
                        />
                    <InputGroup.Append>
                    <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeMensalidadeValor">
                      <Form.Label><b>OBSERVAÇÃO</b></Form.Label>
                      <Form.Control
                        type="observacao"
                        name="observacao"
                        placeholder="PAGO POR"
                        readOnly
                        />
                    </Form.Group>
              </Form.Row>
                  <hr /><br />
                  
                </CardBody>
                <Button type="submit" variant="success">INCLUIR PAGAMENTO</Button>
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
                                        <small>
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
                                            <th style={{ width: '30%' }}>OBSERVAÇÃO</th>
                                            <th style={{ width: '25%' }}>VALOR PAGO</th>
                                            <th style={{ width: '25%' }}>VALOR À PAGAR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                               
                                            </tr>
                                    </tbody>
                                </Table>
                               
                            </div>
                        </CardBody>
                    </Card>

                </div>

            </div>

            
        </Form>
      )}
    </Formik>
  );
}

export { PagamentoEquipePage };












