import React, { useState, useEffect } from "react";
import { Button, Form, Col, Alert, InputGroup, FormControl } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../../services/equipe/EquipeService";
import modalidadeService from "../../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../../services/modulo/ModuloService";
import alunoService from "../../../../../services/aluno/AlunoService";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

function CadastroEdicaoEquipesPage({ match }) {
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
        console.log(result);
        history.push("/quadra/relatorios/equipes");
      }
    });

    setSubmitting(false);
  }

  function atualizarEquipe(values, setSubmitting) {
    equipeService.updateEquipe(history, values).then(function (result) {
      if (result.statusCode === 200) {
        console.log(result);
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
        modalidade_codigo: 0,
        modulo_codigo: 0,
        codigo: 0,
        valor: "",
        jogo_dia_da_semana: "",
        jogo_horario_inicial: "",
        jogo_horario_final: "",
        dia_vencimento: "",
        quadra_codigo: 1,
        ativo: false,
        adere_academia: false
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
                
                <Alert variant="secondary">
                  <Alert.Heading>INFORMAÇÃO <i class="fas fa-info-circle"></i></Alert.Heading>
                  <hr />
                    <p>
                     Preencha corretamente os campos do cadastro de <b>EQUIPES</b> e clique em <b>SALVAR</b>.
                    </p>
                    <p>
                     Marque <b>ADERE ACADEMIA</b> para vinclular automaticamente <b>TODOS OS JOGADORES</b> dessa <b>EQUIPE</b> com o módulo de <b>ACADEMIA</b>.
                    </p>
                </Alert>

                <br />

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>NOME DA EQUIPE</b></Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="descricao"
                        placeholder="BARCELONA"
                        autoComplete="off"
                        value={values.descricao || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeClienteResponsavel">
                      <Form.Label><b>CLIENTE RESPONSÁVEL</b></Form.Label>
                      <Form.Control as="select"
                        required
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
                    
                    <Form.Group as={Col} md="3" controlId="formGridDataPrimeiroJogo">
                    <Form.Label><b>DIA DE VENCIMENTO</b></Form.Label>
                    <Form.Control
                        type="number"
                        name="dia_vencimento"
                        placeholder="1"
                        autoComplete="off"
                        value={values.dia_vencimento || ""}
                        onChange={handleChange} />
                    </Form.Group>
                  </Form.Row>

                  <hr /><br />

                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridDataPrimeiroJogo">
                    <Form.Label><b>DIA DE JOGO</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="jogo_dia_da_semana"
                        placeholder="segunda"
                        autoComplete="off"
                        value={values.jogo_dia_da_semana || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>INÍCIO DA PARTIDA</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="jogo_horario_inicial"
                        placeholder=""
                        autoComplete="off"
                        value={values.jogo_horario_inicial || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridValor">
                    <Form.Label><b>FIM DA PARTIDA</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="jogo_horario_final"
                        placeholder=""
                        autoComplete="off"
                        value={values.jogo_horario_final || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridQuadra">
                    <Form.Label><b>QUADRA</b></Form.Label>
                    <Form.Control
                        type="number"
                        name="quadra_codigo"
                        placeholder=""
                        autoComplete="off"
                        value={values.quadra_codigo || ""}
                        onChange={handleChange} />
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
                        name="ativo"
                        label="ADERE ACADEMIA"
                        defaultChecked={values.ativo || false}
                        value={values.adere_academia}
                        onChange={handleChange} />
                  </Form.Group>
                 
                  </Form.Row>

    
                </CardBody>
                <Button type="submit" variant="success">SALVAR</Button>
              </Card>
              
           
            </div>
          </div>
         
        </Form>
      )}
    </Formik>


  );
}

export { CadastroEdicaoEquipesPage };
