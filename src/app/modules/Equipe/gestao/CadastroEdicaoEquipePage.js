import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import alunoService from "../../../../services/aluno/AlunoService";
import { useHistory } from "react-router-dom";

function CadastroEdicaoEquipePage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novaEquipe = !id;
  const [equipe, setEquipe] = useState({});
  const [modalidades, setModalidades] = useState([]);
  const [modulos, setModulos] = useState([]);
  const [aluno, setAluno] = useState([]);
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
    alunoService.getAluno(history).then(function (result) {
      if (result != null) {
        setAluno(result.data);
      }
    });
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  function cadastrarEquipe(values, setSubmitting) {
    if (!values.modalidade_codigo) {
      values.modalidade_codigo = 1;
    }
    if (!values.modulo_codigo) {
      values.modulo_codigo = 1;
    }
    equipeService.createEquipe(history, values).then(function (result) {
      if (result.statusCode === 200) {
        history.push(".");
      }
    });

    setSubmitting(false);
  }

  function atualizarEquipe(values, setSubmitting) {
    equipeService.updateEquipe(history, values).then(function (result) {
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
        modalidade_codigo: 0,
        modulo_codigo: 0,
        codigo: 0,
        valor: "",
        quantidade_parcelas_mensais: "",
        data_primeiro_jogo: "",
        ativo: false
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                      CADASTRO DE EQUIPE
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeDescricao">
                      <Form.Label><b>*NOME DA EQUIPE</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder=""
                        autoComplete="off"
                        value={values.descricao || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeClienteResponsavel">
                      <Form.Label><b>CLIENTE RESPONSÁVEL</b></Form.Label>
                      <Form.Control as="select"
                        name="aluno_codigo"
                        value={values.aluno_codigo}
                        onChange={handleChange}
                      >
                        {aluno.map(aluno => (<option value={aluno.codigo}
                          defaultValue={values.aluno_codigo === aluno.codigo}
                          key={aluno.codigo}>
                          {aluno.nome}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridValor">
                    <Form.Label><b>*VALOR R$</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder=""
                        autoComplete="off"
                        value={values.valor || ""}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridDataPrimeiroJogo">
                    <Form.Label><b>DIA DA SEMANA</b></Form.Label>
                    <Form.Control
                        type="date"
                        name="data_02"
                        placeholder=""
                        value={values.data_primeiro_jogo || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridValor">
                    <Form.Label><b>HORÁRIO INICIAL</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder=""
                        autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridValor">
                    <Form.Label><b>HORÁRIO FINAL</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder=""
                        autoComplete="off"
                        />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridQuadra">
                    <Form.Label><b>QUADRA</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="quadra"
                        placeholder=""
                        autoComplete="off"
                        />
                    </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="ATIVO"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>

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

export { CadastroEdicaoEquipePage };
