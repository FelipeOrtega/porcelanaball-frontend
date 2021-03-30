import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form, Col, Badge, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import EquipeService from "../../../../services/equipe/equipe.service";
import PagamentoService from "../../../../services/pagamento/pagamento.service";
import {UtilService} from "../../../../services/util/util.service";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Table } from "react-bootstrap";
import ReactGa from "react-ga";

function PagamentoEquipePage({ match }) {
  const history = useHistory();
  const [equipe, setEquipe] = useState([]);
  const [equipeSelecionada, setEquipeSelecionada] = useState({});
  const [pagamento, setpagamento] = useState({});
  const [pagamentoEquipeHistorico, setPagamentoEquipeHistorico] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    ReactGa.initialize('G-36BCY6E3RY')
    ReactGa.pageview('/quadra/pagamento')
    EquipeService.getEquipe(history).then(function (result) {
      if (result != null) {
        setEquipe(result.data);
      }
    });
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  function onChangePage(paginationData) {
    setPaginationData(paginationData);
  }

  function pesquisarEquipe(codigoEquipe){
    if(!codigoEquipe) codigoEquipe = 1;
    EquipeService.getHistoricoPagamento(history, codigoEquipe).then(function (result){
      if(result.data){
        setPagamentoEquipeHistorico(result.data);
        console.log(result.data);
      }
      
    });
  }

  function incluirPagamento(values, setSubmitting) {
    values.modulo_codigo = 2;
    values.modalidade_codigo = 1;
    if(!values.equipe_codigo){
      values.equipe_codigo = 1;
    }
    PagamentoService.createPagamento(history, values).then(function (result) {
      if (result.statusCode === 200) {
        history.push("/quadra/relatorios/equipes");
      }
    });
    setSubmitting(false);
  }

  return (
    <Formik
      onSubmit={(values, { setStatus, setSubmitting }) => {
        setStatus();
        incluirPagamento(values, setSubmitting);
      }}
      enableReinitialize
      initialValues={pagamento ? pagamento : {
        valor: 0,
        observacao: "",
        data: "",
        equipe_codigo: 0,
        modulo_codigo: 0,
        modalidade_codigo: 0
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
                            name="equipe_codigo"
                            value={values.equipe_codigo}
                            onChange={handleChange}
                          >
                            {equipe.map(equipe => (<option value={equipe.codigo}
                              defaultValue={values.equipe_codigo === equipe.codigo}
                              key={equipe.codigo}>
                              {equipe.descricao}
                            </option>))}
                          </Form.Control>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="6">
                          <Button variant="success" onClick={() => pesquisarEquipe(values.equipe_codigo)}>Pesquisar</Button>
                        </Form.Group>

                      </Form.Row>
                      
                      <Form.Row>
                      <Form.Group as={Col} md="3" controlId="formGridEquipeDiaVencimento">
                          <Form.Label><b>DIA DE VENCIMENTO</b></Form.Label>
                          <Form.Control
                            readOnly
                            type="number"
                            name="dia_vencimento"
                            placeholder="1"
                            value={values.dia_vencimento || ""}
                            onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="formGridEquipeMensalidadeValor">
                          <Form.Label><b>MENSALIDADE</b></Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text>R$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <NumberFormat
                              customInput={Form.Control}
                              readOnly
                              required
                              format="####"
                              type="valor"
                              name="valor"
                              placeholder="700"
                              autoComplete="off"
                              removeFormatting="numericString"
                              value={values.valor || ""}
                              onChange={handleChange} />
                            <InputGroup.Append>
                              <InputGroup.Text>,00</InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                      </Form.Row>
                      <hr /><br />

                      <Form.Row>
                        <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                          <Form.Label><b>DATA DO PAGAMENTO</b></Form.Label>
                          <Form.Control
                            required
                            type="date"
                            name="data"
                            placeholder="dd/mm/aaaa"
                            value={values.data || ""}
                            onChange={handleChange}
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
                              name="valor"
                              placeholder="0"
                              removeFormatting="numericString"
                              value={values.valor}
                              onChange={handleChange}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text>,00</InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridEquipeMensalidadeValor">
                          <Form.Label><b>OBSERVAÇÃO</b></Form.Label>
                          <Form.Control
                            type="text"
                            name="observacao"
                            placeholder="PAGO POR"
                            value={values.observacao || ""}
                            onChange={handleChange}
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
                      <small></small>
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
                        </tr>
                      </thead>
                      <tbody>
                        {pagamentoEquipeHistorico.pagamentos != null ? pagamentoEquipeHistorico.pagamentos.map(pgHist =>
                          <tr key={pagamentoEquipeHistorico.pagamentos.indexOf(pgHist)}>
                            <td>{UtilService.formataDataSaida(pgHist.data_pagamento)}</td>
                            <td>{pgHist.observacao}</td>
                            <td>{pgHist.valor_pago}</td>
                          </tr>
                        ) :
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>}
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












