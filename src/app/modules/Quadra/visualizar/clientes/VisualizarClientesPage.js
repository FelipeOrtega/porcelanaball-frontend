import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import alunoService from "../../../../../services/aluno/AlunoService";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

function VisualizarClientesPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const infoAluno = id; 
  const [aluno, setAluno] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (infoAluno) {
      setLoading(true);
      alunoService.getAlunoByCodigo(history, id).then(function (result) {
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


  if (isLoading) {
    return <div className="d-flex flex-wrap justify-content-between align-items-center">
      <span className="ml-3 spinner spinner-white"></span>
    </div>
  }

  return (
    <Formik
    onLoading={(values, { setStatus, setSubmitting }) => {
      setStatus();
    
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
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4 justify-content-end">
                <CardHeader
                  title={
                    <>
                    VISUALIZAÇÃO DO CLIENTE
                    <small> {values.nome}</small>
                   
                    </>
                    
                  }
                  
                />
              
                <CardBody>

                <br />

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridNome">
                    <Form.Label><b>NOME DO CLIENTE</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="text"
                        name="nome"
                        value={values.nome || ""}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridApelido">
                      <Form.Label><b>APELIDO</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="text"
                        name="apelido"
                        value={values.apelido || ""}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridDataNas">
                    <Form.Label><b>DATA NASC.</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="date"
                        name="data_nascimento"
                        value={values.data_nascimento || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>

                    <Form.Group as={Col} controlId="formGridRG">
                       <Form.Label><b>RG</b></Form.Label>
                       <NumberFormat
                        readOnly
                        customInput={Form.Control}
                        format="##.###.###-#"
                        type="text"
                        name="rg"
                        removeFormatting="numericString"
                        value={values.rg || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label><b>CPF/CNPJ</b></Form.Label>
                    <NumberFormat
                        readOnly
                        customInput={Form.Control}
                        format="###.###.###-##"
                        type="text"
                        name="cpf"
                        value={values.cpf || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTel">
                    <Form.Label><b>CELULAR / TELEFONE</b></Form.Label>
                    <NumberFormat
                        readOnly
                        customInput={Form.Control}
                        format="(##) #####-####"
                        type="text"
                        name="telefone_celular"
                        value={values.telefone_celular || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCel">
                    <Form.Label><b>E-MAIL</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="email"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="10" controlId="formGridEndereco">
                    <Form.Label><b>ENDEREÇO</b></Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        name="endereco"
                        value={values.endereco || ""}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label><b>NÚMERO</b></Form.Label>
                    <Form.Control
                        readOnly
                        type="number"
                        name="numero"
                        value={values.numero || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label><b>BAIRRO</b></Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        name="bairro"
                        value={values.bairro || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label><b>CIDADE</b></Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        name="cidade"
                        value={values.cidade || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridCep">
                    <Form.Label><b>CEP</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        readOnly
                        type="text"
                        name="cep"
                        format="##.###-###"
                        value={values.cep || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="formGridEstadoUf">
                    <Form.Label><b>UF</b></Form.Label>
                    <Form.Control
                        readOnly
                        type="text"
                        name="uf"
                        value={values.uf || ""}
                        onChange={handleChange}
                         />
                    </Form.Group>
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

export { VisualizarClientesPage };
