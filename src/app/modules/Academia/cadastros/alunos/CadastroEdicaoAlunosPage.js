import React, { useState, useEffect } from "react";
import { Button, Form, Col, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import AlunoService from "../../../../../services/aluno/aluno.service";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

function CadastroEdicaoAlunosPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novoAluno = !id; 
  const [aluno, setAluno] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!novoAluno) {
      setLoading(true);
      AlunoService.getAlunoByCodigo(history, id).then(function (result) {
        setAluno(formataAtributos(result.data));
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  function formataAtributos(aluno) {
    var d = new Date(aluno.data_nascimento),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    aluno.data_nascimento = `${year}-${month}-${day}`;
    return aluno;
  };

  function cadastrarAluno(values, setSubmitting) {
    AlunoService.createAluno(history, values).then(function (result) {
      if (result.statusCode === 200) {
        history.push("/academia/relatorios/clientes");
      }
    });

    setSubmitting(false);
  }

  function atualizarAluno(values, setSubmitting) {
    const promisse = AlunoService.updateAluno(history, values);
    promisse.then(function(result) {
      if (result.statusCode === 200) {
        history.push("/academia/relatorios/clientes");
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
        if (novoAluno) {
          cadastrarAluno(values, setSubmitting);
        } else {
          atualizarAluno(values, setSubmitting);
        }
      }}
      initialValues={aluno ? aluno : {
        nome: "",
        apelido: "",
        data_nascimento: "",
        rg: "",
        cpf: "",
        altura: 0,
        peso: 0,
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
        uf: "",
        complemento: "",
        telefone_celular: "",
        telefone_residencial: "",
        celular: "",
        email: "",
        ativo: false
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4 justify-content-end">
                <CardHeader
                  title={
                    <>
                    CADASTRO DE ALUNOS
                    <small> ACADEMIA</small>
                   
                    </>
                    
                  }
                  
                />
              
                <CardBody>

                <Alert variant="secondary">
                  <Alert.Heading>INFORMA????O <i class="fas fa-info-circle"></i></Alert.Heading>
                  <hr />
                    <p>
                     Preencha corretamente os campos do cadastro de <b>ALUNOS</b> e selecione a <b>EQUIPE</b>, em seguida clique em <b>SALVAR</b>.
                    </p>
                
                </Alert>

                <br />

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridNome">
                    <Form.Label><b>NOME DO CLIENTE</b></Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="nome"
                        placeholder="NOME COMPLETO"
                        autoComplete="off"
                        value={values.nome || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridApelido">
                      <Form.Label><b>APELIDO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="apelido"
                        placeholder="APELIDO (OPCIONAL)"
                        autoComplete="off"
                        value={values.apelido || ""}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridDataNas">
                    <Form.Label><b>DATA NASC.</b></Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="data_nascimento"
                        autoComplete="off"
                        placeholder="dd/mm/aaaa"
                        value={values.data_nascimento || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>

                    <Form.Group as={Col} controlId="formGridRG">
                       <Form.Label><b>RG</b></Form.Label>
                       <NumberFormat
                        customInput={Form.Control}
                        required
                        format="##.###.###-#"
                        type="text"
                        name="rg"
                        placeholder="00.000.000-0"
                        autoComplete="off"
                        removeFormatting="numericString"
                        value={values.rg || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label><b>CPF/CNPJ</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        required
                        format="###.###.###-##"
                        type="text"
                        name="cpf"
                        placeholder="000.000.000-00"
                        autoComplete="off"
                        value={values.cpf || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                    <Form.Label><b>CELULAR / TELEFONE</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        format="(##) #####-####"
                        type="text"
                        name="telefone_celular"
                        placeholder="(00) 00000-0000"
                        autoComplete="off"
                        required
                        value={values.telefone_celular || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCel">
                    <Form.Label><b>E-MAIL</b></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="cliente@email.com.br"
                        autoComplete="off"
                        value={values.email || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="10" controlId="formGridEndereco">
                    <Form.Label><b>ENDERE??O</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="endereco"
                        placeholder="RUA DUQUE DE CAXIAS"
                        autoComplete="off"
                        value={values.endereco || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label><b>N??MERO</b></Form.Label>
                    <Form.Control
                        type="number"
                        name="numero"
                        placeholder="15"
                        autoComplete="off"
                        value={values.numero || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>

                   
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label><b>BAIRRO</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="bairro"
                        placeholder="JARDIM SANTANA"
                        autoComplete="off"
                        value={values.bairro || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label><b>CIDADE</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="cidade"
                        placeholder="CABRE??VA"
                        autoComplete="off"
                        value={values.cidade || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridCep">
                    <Form.Label><b>CEP</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        type="text"
                        name="cep"
                        format="##.###-###"
                        placeholder="13.315-000"
                        autoComplete="off"
                        value={values.cep || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="formGridEstadoUf">
                    <Form.Label><b>UF</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="uf"
                        placeholder="SP"
                        autoComplete="off"
                        value={values.uf || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>
                  </Form.Row>

                  <hr /><br />

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridEquipeDescricao">
                      <Form.Label><b>EQUIPE</b></Form.Label>
                       <Form.Control as="select">
                      <option>SELECIONE A EQUIPE</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PLANO</b></Form.Label>
                       <Form.Control as="select"
                       disabled
                       >
                      <option>NENHUM PLANO CADASTRADO</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>

                <hr /><br />

                  <Form.Row>
                  <Form.Group id="formGridCheckboxAtivo">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="ATIVO"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
                        onChange={handleChange} />
                  </Form.Group>
                  &nbsp;&nbsp;
                  <Form.Group id="formGridCheckboxBiometria">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="BIOMETRIA"
                        defaultChecked={values.ativo || false}
                        value={values.ativo}
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

export { CadastroEdicaoAlunosPage };
