import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import planoService from "../../../../../services/plano/PlanoService";
import modalidadeService from "../../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";

function CadastroEdicaoPlanosPage({ match }) {
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
        modalidade_codigo: 2,
        ativo: false,
        modulo_codigo: 2
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                      CADASTRO DE PLANOS
                    <small> ACADEMIA</small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="8" controlId="formGridPlanoDescricao">
                      <Form.Label><b>*DESCRIÇÃO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder="DESCRIÇÃO DO PLANO"
                        value={values.descricao}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridPlanoValor">
                      <Form.Label><b>*VALOR R$</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        value={values.valor}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>

                  
                  <Form.Row>
                  <Form.Group id="formGridCheckboxPlanoAtivo">
                      <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="ATIVO"
                        defaultChecked={values.ativo}
                        onChange={handleChange} />
                    </Form.Group>
                  
                  </Form.Row>

                  <Button type="submit">SALVAR</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Form>
      )}
    </Formik>


  );
}

export { CadastroEdicaoPlanosPage };
