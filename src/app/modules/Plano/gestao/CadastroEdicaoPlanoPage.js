import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import planoService from "../../../../services/plano/PlanoService";
import { useHistory } from "react-router-dom";

function CadastroEdicaoPlanoPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novoPlano = !id;
  const [plano, setPlano] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!novoPlano) {
      setLoading(true);
      planoService.getPlanoByCodigo(history, id).then(function (result) {
        setPlano(formataAtributos(result.data));
        console.log(plano)
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  function formataAtributos(plano) {
    var d = new Date(plano.durabilidade),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    plano.durabilidade = `${year}-${month}-${day}`;
    return plano;
  };

  function cadastrarPlano(values, setSubmitting) {
    const promisse = planoService.createPlano(history, values);
    promisse.then(function(result) {
      if (result.StatusCode === 200) {
        history.push(".");
      }
    });
    setSubmitting(false);
  }

  function atualizarPlano(values, setSubmitting) {
    const promisse = planoService.updatePlano(history, values);
    promisse.then(function(result) {
      console.log(result);
      if (result.statusCode === 200) {
        history.push(".");
      }
    });
    
    setSubmitting(false);
  }

  if (isLoading) {
    return <div className="d-flex flex-wrap justify-content-between align-items-center">
      <span className="ml-3 spinner spinner-white"></span>
    </div>
  }

  return (
    <Formik
      onSubmit={(values, { setStatus, setSubmitting }) => {
        setStatus();
        if (novoPlano) {
          cadastrarPlano(values, setSubmitting);
        } else {
          atualizarPlano(values, setSubmitting);
        }
      }}
      initialValues={plano ? plano : {
        descricao: "",
        modalidadeCodigo: "",
        durabilidade: "",
        valor: "",
        moduloCodigo: "",
        ativo: false,
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                      Cadastro de Plano
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="8" controlId="formGridDescricao">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder="Nome do Plano"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridModalidade">
                      <Form.Label>Modalidade</Form.Label>
                      <Form.Control
                        type="text"
                        name="modalidade"
                        placeholder="Academias - Padrão"
                        value={values.modalidadeCodigo}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridDurabilidade">
                      <Form.Label>Durabilidade</Form.Label>
                      <Form.Control
                        type="date"
                        name="durabilidade"
                        placeholder="dd/mm/aaaa"
                        value={values.durabilidade}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridValor">
                      <Form.Label>Valor</Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$0,00"
                        value={values.valor}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridModulo">
                      <Form.Label>Módulo Cód.</Form.Label>
                      <Form.Control
                        type="text"
                        name="modulo"
                        placeholder=""
                        value={values.moduloCodigo}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        name="ativo" 
                        label="Ativo" 
                        defaultChecked={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>

                  <Button type="submit">Salvar</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Form>
      )}
    </Formik>


  );
}

export { CadastroEdicaoPlanoPage };
