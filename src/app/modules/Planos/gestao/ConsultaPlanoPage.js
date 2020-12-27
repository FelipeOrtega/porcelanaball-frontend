import React from "react";
import {Button, Form, InputGroup, Col, Row, Badge} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class ConsultaPlanoPage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Consulta de Equipes ou Planos
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>
                                    <Form.Group as={Col} md="3" controlId="formGridPesquisarPor">
                                        <Form.Label>Pesquisar por:</Form.Label>
                                        <Form.Control as="select">
                                            <option>Equipe</option>
                                            <option>Planos</option>
                                        </Form.Control>
                                    </Form.Group>
                                        <Form.Group as={Col} controlId="formGridDesc">
                                            <Form.Label>Digite</Form.Label>
                                            <Form.Control type="name" placeholder="" />
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
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Resultado da Consulta
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>

                                    </Form.Row>

                                </Form>
                            </CardBody>
                        </Card>

                    </div>

                </div>
            </>
        );
    }
}






