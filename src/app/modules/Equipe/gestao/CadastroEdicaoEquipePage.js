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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!novaEquipe) {
      setLoading(true);
      equipeService.getEquipeByCodigo(history, id).then(function (result) {
        setEquipe(result.data);
      });
    }
    const promisseModalidade = modalidadeService.getModalidades(history);
      promisseModalidade.then(function (result) {
        if (result != null) {
          setModalidades(result.data);
        }
      });
      const promisseModulo = moduloService.getModulos(history);
      promisseModulo.then(function (result) {
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
      initialValues={equipe ? equipe : {
        descricao: "",
        modalidade_codigo: 0,
        ativo: false,
        modulo_codigo: 0,
        codigo: 0,
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
                    <Form.Group as={Col} md="4" controlId="formGridNome">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox" style={{ marginLeft: "50px", marginTop: "30px" }}>
                      <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="Ativo"
                        defaultChecked={values.ativo}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridApelido">
                      <Form.Label>Modalidade / Esporte</Form.Label>
                      <Form.Control as="select" >
                        {modalidades.map(mdld => (<option>{mdld.descricao}</option>))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridApelido">
                      <Form.Label>Módulo</Form.Label>
                      <Form.Control as="select">
                        {modulos.map(mdl => (<option key={mdl.codigo}>{mdl.descricao}</option>))}
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
