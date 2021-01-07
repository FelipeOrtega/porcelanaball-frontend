import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import planoService from "../../../../services/plano/PlanoService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";

function CadastroEdicaoPlanoPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novaPlano = !id;
  const [plano, setPlano] = useState({});
  const [modalidades, setModalidades] = useState([]);
  const [modulos, setModulos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!novaPlano) {
      planoService.getPlanoByCodigo(history, id).then(function (result) {
        setPlano(result.data);
      });
    }
    modalidadeService.getModalidades(history).then(function (result) {
      if (result != null) {
        setModalidades(result.data);
      }
    });
    moduloService.getModulos(history).then(function (result) {
      if (result != null) {
        setModulos(result.data);
      }
    });
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  function cadastrarPlano(values, setSubmitting) {
    const promisse = planoService.createPlano(history, values);
    promisse.then(function (result) {
      if (result.StatusCode === 200) {
        history.push(".");
      }
    });
    setSubmitting(false);
  }

  function atualizarPlano(values, setSubmitting) {
    const promisse = planoService.updatePlano(history, values);
    promisse.then(function (result) {
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
        if (novaPlano) {
          cadastrarPlano(values, setSubmitting);
        } else {
          atualizarPlano(values, setSubmitting);
        }
      }}
      enableReinitialize
      initialValues={plano ? plano : {
        descricao: "",
        valor: 0,
        modalidade_codigo: 0,
        ativo: false,
        modulo_codigo: 0,
        durabilidade: "",
        codigo: 0
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                      Formulário de Plano
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridPlanoDescricao">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder="Nome do plano"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridPlanoDescricao">
                      <Form.Label>Valor R$</Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridDataNas">
                      <Form.Label>Durabilidade</Form.Label>
                      <Form.Control
                        type="date"
                        name="data_nascimento"
                        placeholder="dd/mm/aaaa"
                        value={values.data_nascimento}
                        onChange={handleChange}
                      />
                    </Form.Group>
                   
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPlanoModalidade">
                      <Form.Label>Modalidade / Esporte</Form.Label>
                      <Form.Control as="select"
                        name="modalidade_codigo"
                        value={values.modalidade_codigo}
                        onChange={handleChange}
                      >
                        {modalidades.map(mdld => (<option value={mdld.codigo}
                          selected={values.modalidade_codigo === mdld.codigo}
                          key={mdld.codigo}>
                          {mdld.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPlanoModulo">
                      <Form.Label>Módulo</Form.Label>
                      <Form.Control as="select"
                        name="modulo_codigo"
                        value={values.modulo_codigo}
                        onChange={handleChange}
                      >
                        {modulos.map(mdl => (<option value={mdl.codigo}
                          selected={values.modulo_codigo === mdl.codigo}
                          key={mdl.codigo}>
                          {mdl.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group id="formGridCheckboxPlanoAtivo">
                      <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="Ativo"
                        defaultChecked={values.ativo}
                        onChange={handleChange} />
                    </Form.Group>
                  
                  </Form.Row>

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
