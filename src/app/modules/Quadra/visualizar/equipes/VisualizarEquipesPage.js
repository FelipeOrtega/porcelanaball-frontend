import React, { useState, useEffect } from "react";
import { Button, Form, Col, Alert, InputGroup, FormControl } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import EquipeService from "../../../../../services/equipe/equipe.service";
import QuadraService from "../../../../../services/quadra/quadra.service";
import diaSemanaService from "../../../../../services/dia.semana/dia.semana.service";
import AlunoService from "../../../../../services/aluno/aluno.service";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import ReactGa from "react-ga";

function VisualizarEquipesPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novaEquipe = !id;
  const [equipe, setEquipe] = useState({});
  const [aluno, setAluno] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [quadras, setQuadras] = useState([]);
  const [diasSemana, setDiasSemana] = useState([]);

  useEffect(() => {
    ReactGa.initialize('G-36BCY6E3RY')
    //to report page view
    ReactGa.pageview('/quadra/cadastros/equipes')

    async function initializeComponent() {
      if (!novaEquipe) {
      await EquipeService.getEquipeByCodigo(history, id).then(function (result) {
        if(result.data.equipeAluno[0]){
          result.data.aluno_responsavel_codigo = result.data.equipeAluno[0].aluno_codigo;
        }
        setEquipe(result.data);
      });
    }
    AlunoService.getAluno(history).then(function (result) {
      if (result != null) {
        setAluno(result.data);
      }
    });
    QuadraService.getQuadra(history).then(function (result) {
      if (result != null) {
        setQuadras(result.data);
      }
    });
    diaSemanaService.getDiaSemana(history).then(function (result) {
      if (result != null) {
        setDiasSemana(result.data);
      }
    });
    setLoading(false);
    }
    initializeComponent();
    // eslint-disable-next-line
  }, []);

  function cadastrarEquipe(values, setSubmitting) {
    if (!values.modalidade_codigo) {
      values.modalidade_codigo = 1;
    }
    if (!values.modulo_codigo) {
      values.modulo_codigo = 2;
    }
    if (!values.quadra_codigo) {
      values.quadra_codigo = 1;
    }
    if (!values.aluno_responsavel_codigo) {
      values.aluno_responsavel_codigo = 1;
    }
    values.equipeAluno = [{
      'aluno_codigo': values.aluno_responsavel_codigo,
      'responsavel': true
    }];
    EquipeService.createEquipe(history, values).then(function (result) {
      if (result.statusCode === 200) {
        history.push("/quadra/relatorios/equipes");
      }
    });
    setSubmitting(false);
  }

  function atualizarEquipe(values, setSubmitting) {
    values.equipeAluno = [{
      'aluno_codigo': values.aluno_responsavel_codigo,
      'equipe_codigo': values.codigo,
      'responsavel': true
    }];
    EquipeService.updateEquipe(history, values).then(function (result) {
      if (result.statusCode === 200) {
        history.push("/quadra/relatorios/equipes");
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
        modalidade_codigo: 1,
        modulo_codigo: 2,
        codigo: 0,
        valor: "",
        jogo_dia_da_semana: "",
        jogo_horario_inicial: "",
        jogo_horario_final: "",
        dia_vencimento: "",
        quadra_codigo: 0,
        ativo: false,
        adere_academia: false,
        equipeAluno:[{
          aluno: null,
          aluno_codigo: 0,
          codigo: 0,
          equipe_codigo: 0,
          responsavel: false
        }],
        aluno_responsavel_codigo: 0
        
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
                    <small> QUADRAS</small>
                    </>
                  }
                />
                <CardBody>

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
                        readOnly
                        name="aluno_responsavel_codigo"
                        value={values.aluno_responsavel_codigo}
                        onChange={handleChange}
                      >
                        {aluno.map(aluno => (<option value={aluno.codigo}
                          defaultValue={values.aluno_responsavel_codigo === aluno.codigo}
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
                          defaultValue={values.jogo_dia_da_semana === diaSemana}
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
                          defaultValue={values.quadra_codigo === q.codigo}
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
                    <Form.Group id="formGridCheckboxEquipeAtivo">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="ATIVO"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>
                  &nbsp;&nbsp;&nbsp;
                  <Form.Group id="formGridCheckboxAdereAcademia">
                    <Form.Check
                        type="checkbox"
                        name="adere_academia"
                        label="ADERE ACADEMIA"
                        defaultChecked={values.adere_academia || false}
                        value={values.adere_academia}
                        onChange={handleChange} />
                  </Form.Group>
                 
                  </Form.Row>

    
                </CardBody>
                <Button type="back" variant="primary">VOLTAR</Button>
              </Card>
              
           
            </div>
          </div>
         
        </Form>
      )}
    </Formik>


  );
}

export { VisualizarEquipesPage };
