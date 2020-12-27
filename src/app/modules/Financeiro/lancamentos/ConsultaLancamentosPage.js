import React from "react";
import {Button, Form, InputGroup, Col, Row} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class ConsultaLancamentoPage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Consulta Lançamento
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPlano">
                                            <Form.Label>Pesquisar Lançamento por:</Form.Label>
                                            <Form.Control as="select">
                                                <option>Data</option>
                                                <option>Modalidade</option>
                                                <option>Valor</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridNome">
                                            <Form.Label>Digite</Form.Label>
                                            <Form.Control type="name" placeholder="Data, Modalidade ou Valor do Lançamento" />
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






