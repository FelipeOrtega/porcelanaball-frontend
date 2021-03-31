import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../../_partials/controls";
import { Formik } from "formik";
import AlunoService from "../../../../../services/aluno/aluno.service";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import ReactGa from "react-ga";

function VisualizarClientesPage({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const novoAluno = !id; 
  const [aluno, setAluno] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    ReactGa.initialize('G-36BCY6E3RY')
    //to report page view
    ReactGa.pageview('/quadra/cadastros/clientes')

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
        history.push("/quadra/relatorios/clientes");
      }
    });

    setSubmitting(false);
  }

  function atualizarAluno(values, setSubmitting) {
    const promisse = AlunoService.updateAluno(history, values);
    promisse.then(function(result) {
      if (result.statusCode === 200) {
        history.push("/quadra/relatorios/clientes");
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
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <Card className="mt-4 justify-content-end">
                <CardHeader
                  title={
                    <>
                    DETALHES DO CLIENTE - {aluno.nome}
                    <small> QUADRAS</small>
                   
                    </>
                    
                  }
                  
                />
              
                <CardBody>
            
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridNome">
                    <Form.Label><b>NOME DO CLIENTE</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="text"
                        name="nome"
                        value={values.nome || ""}
                         />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridApelido">
                      <Form.Label><b>APELIDO</b></Form.Label>
                      <Form.Control
                      readOnly
                        type="text"
                        name="apelido"
                        value={values.apelido || ""}
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridDataNas">
                    <Form.Label><b>DATA NASC.</b></Form.Label>
                      <Form.Control
                        readOnly
                        type="date"
                        name="data_nascimento"
                        value={values.data_nascimento || ""}
                        
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
                        
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label><b>CPF/CNPJ</b></Form.Label>
                    <NumberFormat
                        customInput={Form.Control}
                        readOnly
                        format="###.###.###-##"
                        type="text"
                        name="cpf"
                        value={values.cpf || ""}
                       
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
                       
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCel">
                    <Form.Label><b>E-MAIL</b></Form.Label>
                      <Form.Control
                      readOnly
                        type="email"
                        name="email"
                        value={values.email || ""}
                        
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
                        
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label><b>NÚMERO</b></Form.Label>
                    <Form.Control
                    readOnly
                        type="number"
                        name="numero"
                        value={values.numero || ""}
                        
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
                        
                         />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label><b>CIDADE</b></Form.Label>
                    <Form.Control
                    readOnly
                        type="text"
                        name="cidade"
                        value={values.cidade || ""}
                        
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridCep">
                    <Form.Label><b>CEP</b></Form.Label>
                    <NumberFormat
                    readOnly
                        customInput={Form.Control}
                        type="text"
                        name="cep"
                        format="##.###-###"
                        value={values.cep || ""}
                        
                         />
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="formGridEstadoUf">
                    <Form.Label><b>UF</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="uf"
                        readOnly
                        value={values.uf || ""}
                        
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
                         />
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

export { VisualizarClientesPage };
