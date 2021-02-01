import React, { useState, useEffect } from "react";
import { Button, Form, Col, ButtonGroup } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import equipeAlunoService from "../../../../services/equipe/EquipeAlunoService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";
import { ListagemAluno } from "../../Aluno/ListagemAluno"
import { CadastroEdicaoAlunoPage } from "../../Aluno/gestao/CadastroEdicaoAlunoPage";

function CadastroEdicaoEquipePage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novaEquipe = !id;
  const [equipe, setEquipe] = useState({});
  const [modalidades, setModalidades] = useState([]);
  const [modulos, setModulos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [alunos, setAlunos] = useState([]);
  const [showAlunoForm, setShowAlunoForm] = useState(false);

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

  const handleAlunosSelecionados = (event, aluno) => {
    if (event.target.checked) {
      setAlunos([...alunos, aluno]);
    } else {
      setAlunos(alunos.filter(a => a.codigo !== aluno.codigo))
    }
  }

   const handleCadastroAluno = () => {
     setShowAlunoForm(false);
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
                      CADASTRO DE EQUIPES
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridEquipeDescricao">
                      <Form.Label><b>*DESCRIÇÃO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="descricao"
                        placeholder="Nome da Equipe"
                        value={values.descricao || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEquipeModalidade">
                      <Form.Label><b>*MODALIDADE / ESPORTE</b></Form.Label>
                      <Form.Control as="select"
                        name="modalidade_codigo"
                        value={values.modalidade_codigo}
                        onChange={handleChange}
                      >
                        {modalidades.map(mdld => (<option value={mdld.codigo}
                          defaultValue={values.modalidade_codigo === mdld.codigo}
                          key={mdld.codigo}>
                          {mdld.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEquipeModulo">
                      <Form.Label><b>*MÓDULO</b></Form.Label>
                      <Form.Control as="select"
                        name="modulo_codigo"
                        value={values.modulo_codigo}
                        onChange={handleChange}
                      >
                        {modulos.map(mdl => (<option value={mdl.codigo}
                          defaultValue={values.modulo_codigo === mdl.codigo}
                          key={mdl.codigo}>
                          {mdl.descricao}
                        </option>))}
                      </Form.Control>
                    </Form.Group>
                 
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridValor">
                    <Form.Label><b>*VALOR R$</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder=""
                        value={values.valor || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridQuantidadeParcelas">
                      <Form.Label><b>QTD. PARCELAS</b></Form.Label>
                      <Form.Control
                        type="number"
                        name="quantidade_parcelas_mensais"
                        placeholder=""
                        value={values.quantidade_parcelas_mensais || ""}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridDataPrimeiroJogo">
                    <Form.Label><b>DATA 1º JOGO</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_primeiro_jogo"
                        placeholder="dd/mm/aaaa"
                        value={values.data_primeiro_jogo || ""}
                        onChange={handleChange}
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
                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="ADERE ACADEMIA"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>

                  <Button type="submit">SALVAR</Button>
                </CardBody>
              </Card>
              <Card>
                <CardHeader title={
                    <>
                      SELECIONE OU CADASTRE O CLIENTE RESPONSÁVEL
                    <small></small>
                    </>
                  }
                  >
               
                </CardHeader>
                <ButtonGroup>
                <Button variant="primary" size="sm" onClick={e => setShowAlunoForm(false)}><b>LISTAR</b></Button>
                <Button variant="info" size="sm" onClick={e => setShowAlunoForm(true)}><b>CADASTRAR</b></Button>
                </ButtonGroup>
                <CardBody> 
                  {showAlunoForm? <CadastroEdicaoAlunoPage match={match} handleOnParent={handleCadastroAluno}/> : 
                                  <ListagemAluno alunosCallBack={alunos} handleChange={handleAlunosSelecionados} />}
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
