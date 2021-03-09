import React, { useState, useEffect } from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../../services/equipe/EquipeService";
import quadraService from "../../../../../services/quadra/QuadraService";
import diaSemanaService from "../../../../../services/DiaSemana/DiaSemanaService";
import alunoService from "../../../../../services/aluno/AlunoService";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

function VisualizarEquipesPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const [equipe, getEquipe] = useState({});
  const [aluno, getAluno] = useState([]);
  const [quadras, getQuadras] = useState([]);
  const [diasSemana, getDiasSemana] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (equipe) {
      equipeService.getEquipeByCodigo(history, id).then(function (result) {
        getEquipe(result.data);
      });
    }
    alunoService.getAluno(history).then(function (result) {
      if (result != null) {
        getAluno(result.data);
      }
    });
    quadraService.getQuadra(history).then(function (result) {
      if (result != null) {
        getQuadras(result.data);
      }
    });
    diaSemanaService.getDiaSemana(history).then(function (result) {
      if (result != null) {
        getDiasSemana(result.data);
      }
    });
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div className="d-flex flex-wrap justify-content-between align-items-center">
      <span className="ml-3 spinner spinner-white"></span>
    </div>
  }

  return (
    <Formik
      enableReinitialize
      initialValues={equipe ? equipe : {
        descricao: "",
        modalidade_codigo: 1,
        modulo_codigo: 2,
        codigo: 0,
        valor: "",
        jogo_dia_da_semana: "",
        jogo_horario_inicial: "",
        jogo_horario_final: "",
        dia_vencimento: "",
        quadra_codigo: 0,
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
                      VISUALIZAÇÃO DE EQUIPE
                    <small> {values.descricao}</small>
                    </>
                  }
                />
                <CardBody>

                <br />

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>NOME DA EQUIPE</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="text"
                        name="descricao"
                        value={values.descricao || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeClienteResponsavel">
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
                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>MENSALIDADE</b></Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>R$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <NumberFormat
                    customInput={Form.Control}
                    readOnly
                        format="####"
                        type="valor"
                        name="valor"
                        removeFormatting="numericString"
                        value={values.valor || ""}
                        onChange={handleChange} />
                    <InputGroup.Append>
                    <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                    </Form.Group>
                    
                    <Form.Group as={Col} md="3" controlId="formGridDataPrimeiroJogo">
                    <Form.Label><b>DIA DE VENCIMENTO</b></Form.Label>
                    <Form.Control
                      readOnly
                        type="number"
                        name="dia_vencimento"
                        value={values.dia_vencimento || ""}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>

                  <hr /><br />

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridDataPrimeiroJogo">
                      <Form.Label><b>DIA DE JOGO</b></Form.Label>
                      <Form.Control as="select"
                        readOnly
                        name="jogo_dia_da_semana"
                        value={values.jogo_dia_da_semana}
                        onChange={handleChange}
                      >
                        {diasSemana.map(diaSemana =>
                        (<option value={diaSemana}
                          selected={values.jogo_dia_da_semana === diaSemana}
                          key={diaSemana}>
                          {diaSemana}
                        </option>))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>INÍCIO DA PARTIDA</b></Form.Label>
                    <Form.Control
                      readOnly
                        type="time"
                        name="jogo_horario_inicial"
                        value={values.jogo_horario_inicial || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>FIM DA PARTIDA</b></Form.Label>
                    <Form.Control
                      readOnly
                        type="time"
                        name="jogo_horario_final"
                        value={values.jogo_horario_final || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridQuadra">
                    <Form.Label><b>QUADRA</b></Form.Label>
                      <Form.Control as="select"
                        readOnly
                        name="quadra_codigo"
                        value={values.quadra_codigo}
                        onChange={handleChange}
                      >
                        {quadras.map(q => (<option value={q.codigo}
                          selected={values.quadra_codigo === q.codigo}
                          key={q.codigo}>
                          {q.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    </Form.Row>

                    <hr /><br />

                    <Form.Row>
                    <Form.Group id="formGridCheckboxAtivo">
                    <Form.Check
                      readOnly
                        type="checkbox"
                        name="ativo"
                        label="ATIVO"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>
                  &nbsp;&nbsp;&nbsp;
                 
                  </Form.Row>

    
                </CardBody>
              </Card>
              
           
            </div>
          </div>
         
        </Form>
      )}
    </Formik>


  );
}

export { VisualizarEquipesPage };
