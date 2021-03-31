import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";

function PagamentoPlanoAlunoPage({ match }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
      return <div className="d-flex flex-wrap justify-content-between align-items-center">
        <span className="ml-3 spinner spinner-white"></span>
      </div>
    }

  return (
      <>
          <div className="row">
              <div className="col-md-12">
                 
              <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                     1º MÊS
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGAMENTO DATA</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                  
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>TIPO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="PARCIAL OU INTEGRAL"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGO POR</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="NOME DA PESSOA"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VALOR PAGO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        />
                    </Form.Group>
                  
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="PAGAMENTO INTEGRAL"
                        
                        />
                  </Form.Group>
                  

                  <Button type="submit">SALVAR</Button>
                </CardBody>
              </Card>
            </div>
          </div>

              </div>

          </div>

          <div className="row">
              <div className="col-md-12">
                 
              <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                     2º MÊS
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGAMENTO DATA</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                  
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>TIPO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="PARCIAL OU INTEGRAL"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGO POR</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="NOME DA PESSOA"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VALOR PAGO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        />
                    </Form.Group>
                  
                  
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="PAGAMENTO INTEGRAL"
                        
                        />
                  </Form.Group>
                  

                  <Button type="submit">SALVAR</Button>
                </CardBody>
              </Card>
            </div>
          </div>

              </div>

          </div>

          <div className="row">
              <div className="col-md-12">
                 
              <div className="row">
            <div className="col-md-12">
              <Card className="mt-4">
                <CardHeader
                  title={
                    <>
                     3º MÊS
                    <small></small>
                    </>
                  }
                />
                <CardBody>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGAMENTO DATA</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                  
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>TIPO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="PARCIAL OU INTEGRAL"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGO POR</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="NOME DA PESSOA"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VALOR PAGO</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        />
                    </Form.Group>
                  
                  
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="ativo"
                        label="PAGAMENTO INTEGRAL"
                        
                        />
                  </Form.Group>
                  

                  <Button type="submit">SALVAR</Button>
                </CardBody>
              </Card>
            </div>
          </div>

              </div>

          </div>
      </>
  );
}

export { PagamentoPlanoAlunoPage };












