import React from "react";
import {Button, Form, InputGroup, Col, Row, Badge} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class NovoLancamentoPage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Lançamento Manual
                                        <small> Entrada / Saída</small>
                                    </>
                                }
                            />
                            <CardBody>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="formGridModalidade">
                                            <Form.Label>C. de Custo</Form.Label>
                                            <Form.Control as="select">
                                                <option>Academia</option>
                                                <option>Quadras</option>
                                                <option>Bar & Restaurante</option>
                                                <option>Geral</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridTipoLanc">
                                            <Form.Label>Tipo</Form.Label>
                                            <Form.Control as="select">
                                                <option>Entrada (+)</option>
                                                <option>Saída (-)</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridDesc">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control type="name" placeholder="" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridValor">
                                            <Form.Label>Valor <b>R$</b></Form.Label>
                                            <Form.Control type="name" placeholder="R$0,00" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridGrupo">
                                            <Form.Label>Grupo</Form.Label>
                                            <Form.Control as="select">
                                                <option>Mensalidades (ENTRADA)</option>
                                                <option>Venda de Produto (ENTRADA)</option>
                                                <option>Despesas Fixas (SAÍDA)</option>
                                                <option>Despesas Variáveis (SAÍDA)</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="formGridAtleta">
                                            <Form.Label>Atleta/Cliente</Form.Label>
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

                                        <Form.Group as={Col} controlId="formGridRepete">
                                            <Form.Label>Repetir por</Form.Label>
                                            <Form.Control as="select">
                                                <option>01 mês</option>
                                                <option>02 meses</option>
                                                <option>03 meses</option>
                                                <option>04 meses</option>
                                                <option>05 meses</option>
                                                <option>06 meses</option>
                                                <option>07 meses</option>
                                                <option>08 meses</option>
                                                <option>09 meses</option>
                                                <option>10 meses</option>
                                                <option>11 meses</option>
                                                <option>12 meses</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Observações</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Button variant="success" type="submit">
                                        Incluir Lançamento
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






