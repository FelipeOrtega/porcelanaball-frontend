import React from "react";
import {Button, Form, InputGroup, Col, Row} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class ConsultaModalidadePage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Consulta de Modalidade / Business
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPlano">
                                        <Form.Label>Modalidades / Business Cadastrados</Form.Label>
                                        <Form.Control as="select">
                                            <option>Academia</option>
                                            <option>Quadras</option>
                                            <option>Bar & Restaurante</option>
                                            <option>Geral</option>
                                        </Form.Control>
                                    </Form.Group>
                                    </Form.Row>

                                    <Button variant="primary" type="submit">
                                        Pesquisar
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






