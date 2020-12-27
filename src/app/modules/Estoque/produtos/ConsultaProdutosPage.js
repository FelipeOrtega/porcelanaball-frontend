import React from "react";
import {Button, Form, InputGroup, Col, Row} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class ConsultaProdutosPage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Consulta de Produtos Cadastrados
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>


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






