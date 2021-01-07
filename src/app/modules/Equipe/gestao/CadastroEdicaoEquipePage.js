import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";

function CadastroEdicaoEquipePage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novaEquipe = !id;
  const [equipe, setEquipe] = useState({});
  const [modalidades, setModalidades] = useState([]);
  const [modulos, setModulos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!novaEquipe) {
      equipeService.getEquipeByCodigo(history, id).then(function (result) {
        setEquipe(result.data);
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

  function cadastrarEquipe(values, setSubmitting) {
    const promisse = equipeService.createEquipe(history, values);
    promisse.then(function (result) {
      if (result.StatusCode === 200) {
        history.push(".");
      }
    });
    setSubmitting(false);
  }

  function atualizarEquipe(values, setSubmitting) {
    const promisse = equipeService.updateEquipe(history, values);
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
        if (novaEquipe) {
          cadastrarEquipe(values, setSubmitting);
        } else {
          atualizarEquipe(values, setSubmitting);
        }
      }}
      enableReinitialize
      initialValues={equipe ? equipe : {
        descricao: "",
        ativo: false,
        modalidade_codigo: 0,
        modulo_codigo: 0,
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
                      Formulário de Equipe
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeDescricao">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder="Nome da Equipe"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeDescricao">
                      <Form.Label>Atleta Responsável</Form.Label>
                      <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeDescricao">
                      <Form.Label>Valor R$</Form.Label>
                      <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEquipeModalidade">
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
                    <Form.Group as={Col} controlId="formGridEquipeModulo">
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

export { CadastroEdicaoEquipePage };
