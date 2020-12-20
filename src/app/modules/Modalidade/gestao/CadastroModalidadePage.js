import React from "react";
import {Button, Form, InputGroup, Col, Row} from "react-bootstrap";
import {KTCodeExample} from "../../../../_metronic/_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_metronic/_partials/controls";

export default class CadastroModalidadePage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Cadastro de Modalidade / Business
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridNome">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control type="name" placeholder="" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Ativo" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                            </Form>
                            </CardBody>
                        </Card>

                    </div>

                </div>
            </>
        );
    }
}






