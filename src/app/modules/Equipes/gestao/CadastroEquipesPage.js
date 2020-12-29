import React from "react";
import {Button, Form, InputGroup, Col, Row, Badge} from "react-bootstrap";
import {KTCodeExample} from "../../../../_partials/controls";
import {Card, CardBody, CardHeader, Notice} from "../../../../_partials/controls";

export default class CadastroEquipesPage extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">

                        <Card className="mt-4">
                            <CardHeader
                                title={
                                    <>
                                        Cadastro de Equipes
                                        <small>

                                        </small>
                                    </>
                                }
                            />
                            <CardBody>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formGridModalidade">
                                        <Form.Label>Business / Modalidade</Form.Label>
                                        <Form.Control as="select">
                                            <option>Quadras - Equipe</option>
                                            <option>Academia - Planos</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formGridDesc">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control type="name" placeholder="Nome da Equipe/Plano" required />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formGridAtletaPrincipal">
                                        <Form.Label>Atleta Responsável</Form.Label>
                                        <Form.Control as="select">
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridDataStart">
                                        <Form.Label>Data 1º Lanç.</Form.Label>
                                        <Form.Control type="date" placeholder="dd/mm/aaaa" required />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCobranca">
                                        <Form.Label>Cobrança</Form.Label>
                                        <Form.Control as="select">
                                            <option>Mensal</option>
                                            <option>Bimestral</option>
                                            <option>Trimestral</option>
                                            <option>Semestral</option>
                                            <option>Anual</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridValor">
                                        <Form.Label>Valor <Badge variant="secondary">R$</Badge></Form.Label>
                                        <Form.Control type="text" placeholder="R$0,00" required />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridRenAuto">
                                        <Form.Label>Ren. Auto</Form.Label>
                                        <Form.Control as="select">
                                            <option>Sim</option>
                                            <option>Não</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridFreeAcademia">
                                        <Form.Label>Free Academia</Form.Label>
                                        <Form.Control as="select">
                                            <option>Sim</option>
                                            <option>Não</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAbs">
                                        <Form.Label>Observações</Form.Label>
                                        <Form.Control as="textarea" rows="10" />
                                    </Form.Group>
                                </Form.Row>

                                <Button variant="success" type="submit">
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






