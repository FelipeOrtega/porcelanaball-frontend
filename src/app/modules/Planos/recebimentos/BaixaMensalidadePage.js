import React from "react";
import {Button, Form, InputGroup, Col, Row, Badge} from "react-bootstrap";
import {KTCodeExample} from "../../../../_metronic/_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_metronic/_partials/controls";

export default class BaixaMensalidadePage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Baixa de Mensalidade
                                        <small> Academia ou Quadras</small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="formGridModalidade">
                                            <Form.Label>Modalidade <Badge variant="success">Business</Badge></Form.Label>
                                            <Form.Control as="select">
                                                <option>Academia</option>
                                                <option>Quadras</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridAtleta">
                                            <Form.Label>Atleta</Form.Label>
                                            <Form.Control as="select">
                                                <option>...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridEquipe">
                                            <Form.Label>Equipe</Form.Label>
                                            <Form.Control as="select">
                                                <option>...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridValorTotal">
                                            <Form.Label>Valor Total <b>R$</b></Form.Label>
                                            <Form.Control type="name" placeholder="R$0,00" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridValorPago">
                                            <Form.Label>Valor Pago <b>R$</b></Form.Label>
                                            <Form.Control type="name" placeholder="R$0,00" />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridMesParcela">
                                            <Form.Label>Referente ao mês</Form.Label>
                                            <Form.Control as="select">
                                                <option>...</option>
                                                <option>...</option>
                                                <option>...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridData">
                                            <Form.Label>Data</Form.Label>
                                            <Form.Control type="date" placeholder="dd/mm/aaaa" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridFormaPgto">
                                            <Form.Label>Forma de Pgto.</Form.Label>
                                            <Form.Control as="select">
                                                <option>Cartão de Crédito</option>
                                                <option>Cartão de Débito</option>
                                                <option>Dinheiro</option>
                                                <option>Cheque</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridObs">
                                            <Form.Label>Observações</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Button variant="success" type="submit">
                                        Confirmar
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






