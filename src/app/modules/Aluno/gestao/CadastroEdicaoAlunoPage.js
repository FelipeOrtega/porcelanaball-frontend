import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import AlunoService from "../../../../services/aluno/aluno.service";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

function CadastroEdicaoAlunoPage({ match, handleOnParent}) {
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
        history.push(".");
      }
    });

    setSubmitting(false);
  }

  function atualizarAluno(values, setSubmitting) {
    AlunoService.updateAluno(history, values).then(function (result) {
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
        telefone_celular: "",
        telefone_residencial: "",
        celular: "",
        ativo: false,
        email: ""
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                      CADASTRO DE CLIENTE 
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridNome">
                    <Form.Label><b>*NOME DO CLIENTE</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="nome"
                        placeholder="NOME COMPLETO"
                        value={values.nome || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridApelido">
                      <Form.Label><b>APELIDO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="apelido"
                        placeholder="Apelido (Opcional)"
                        value={values.apelido || ""}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridDataNas">
                    <Form.Label><b>DATA NASC.</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_nascimento"
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
                        format="##.###.###-#"
                        type="text"
                        name="rg"
                        placeholder="00.000.000-0"
                        removeFormatting="numericString"
                        value={values.rg || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label><b>CPF/CNPJ</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        format="###.###.###-##"
                        type="text"
                        name="cpf"
                        placeholder="000.000.000-00"
                        value={values.cpf || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAltura">
                      <Form.Label>Altura</Form.Label>
                      <NumberFormat
                        customInput={Form.Control}
                        format="#.##"
                        type="text"
                        name="altura"
                        placeholder=""
                        removeFormatting="numericString"
                        value={values.altura || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPeso">
                      <Form.Label>Peso</Form.Label>
                      <NumberFormat
                        customInput={Form.Control}
                        format="###.##"
                        type="text"
                        name="peso"
                        placeholder=""
                        removeFormatting="numericString"
                        value={values.peso || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEndereco">
                    <Form.Label><b>ENDERE??O</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="endereco"
                        placeholder=""
                        value={values.endereco || ""}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label><b>N??MERO</b></Form.Label>
                    <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                         />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label><b>BAIRRO</b></Form.Label>
                    <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                         />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label><b>CIDADE</b></Form.Label>
                    <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                         />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCep">
                    <Form.Label><b>CEP</b></Form.Label>
                    <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                         />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstadoUf">
                    <Form.Label><b>ESTADO (UF)</b></Form.Label>
                    <Form.Control
                        type="text"
                        name=""
                        placeholder=""
                         />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridTel">
                    <Form.Label><b>TELEFONE/CELULAR</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        format="(##) #####-####"
                        type="text"
                        name="telefone_celular"
                        placeholder="(00) 00000-0000"
                        value={values.telefone_celular || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCel">
                    <Form.Label><b>E-MAIL</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        placeholder=""
                        value={values.email || ""}
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

export { CadastroEdicaoAlunoPage };
