import React, { useState, useEffect } from "react";
import { Button, Form, Col, Badge, Alert } from "react-bootstrap";
import { Card, CardBody, CardHeader } from "../../../../_partials/controls";
import { Formik } from "formik";
import equipeService from "../../../../services/equipe/EquipeService";
import equipeAlunoService from "../../../../services/equipe/EquipeAlunoService";
import modalidadeService from "../../../../services/modalidade/ModalidadeService";
import moduloService from "../../../../services/modulo/ModuloService";
import { useHistory } from "react-router-dom";
import { ListagemAluno } from "../../Aluno/ListagemAluno"
import { CadastroEdicaoAlunoPage } from "../../Aluno/gestao/CadastroEdicaoAlunoPage";
import { TableSearch } from "../../../../_helpers/TableSearch";

function PagamentoEquipePage({ match }) {
  const history = useHistory();
  const [equipes, setEquipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState(null);
  const [paginationData, setPaginationData] = useState([]);
  const { filteredData, loadingSearch } = TableSearch({
    searchVal,
    retrieve: equipes
  });
  

  useEffect(() => {
      setLoading(true);
      const promisse = equipeService.getEquipe(history);
      promisse.then(function (result) {
          if(result != null){
              setEquipes(result.data);
              setLoading(false);
          }
      });

  }, []);

  function onChangePage(paginationData) {
      setPaginationData(paginationData);
  }

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
                     PAGAMENTOS
                    <small> QUADRA</small>
                    </>
                  }
                />
                <CardBody>
      
                <Alert variant="secondary">
                  <Alert.Heading>INFORMAÇÃO <i class="fas fa-info-circle"></i></Alert.Heading>
                    <p>
                     Para lançar um pagamento, selecione a <b>EQUIPE</b> (deve ser previamente cadastrada através do menu <b>QUADRA - CADASTROS - CADASTRO DE EQUIPES</b>). Após selecionar a <b>EQUIPE</b>, informe a <b>DATA DO PAGAMENTO</b> e o <b>TIPO</b>:
                     <br /><br />
                     <h6><Badge variant="success"><b>1.</b>  INTEGRAL</Badge></h6>
                     Quando escolhida essa opção, automaticamente o sistema preenche o campo <b>VALOR PAGO</b> com a informação do <b>VALOR TOTAL</b>. Confira e clique em <b>SALVAR</b>.
                     <br /><br />
                     <h6><Badge variant="warning"><b>2.</b>  PARCIAL</Badge></h6>
                     Quando escolhida essa opcão, preencha qual é o valor que está sendo pago pelo <b>CLIENTE/EQUIPE</b> nesse momento e clique em <b>SALVAR</b>.
                    </p>
                </Alert>

                <br />
                
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridEquipeDescricao">
                      <Form.Label><b>EQUIPE</b></Form.Label>
                       <Form.Control as="select">
                      <option>AVULSO - NÃO É EQUIPE RECORRENTE</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VENCIMENTO</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>VALOR TOTAL</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="R$"
                        />
                    </Form.Group>
                </Form.Row>

                <hr /><br/>

                <Form.Row>
                <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>DATA DO PAGAMENTO</b></Form.Label>
                      <Form.Control
                        type="date"
                        name="data_01"
                        placeholder=""
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>TIPO</b></Form.Label>
                      <Form.Control as="select">
                      <option>INTEGRAL</option>
                      <option>PARCIAL</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridEquipeDescricao">
                      <Form.Label><b>PAGO POR</b></Form.Label>
                      <Form.Control
                        type="text"
                        name="valor"
                        placeholder="NOME DO CLIENTE"
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
                  <hr /><br />
                  
                </CardBody>
                <Button type="submit" variant="success">SALVAR</Button>
              </Card>
            </div>
          </div>

              </div>

          </div>

        
           
      </>
  );
}

export { PagamentoEquipePage };












