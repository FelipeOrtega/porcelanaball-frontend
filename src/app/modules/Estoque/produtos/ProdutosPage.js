import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CadastroProdutosPage from "./CadastroProdutosPage";
import ConsultaProdutosPage from "./ConsultaProdutosPage";
import { ContentRoute } from "../../../../_metronic/layout";

export function ProdutosPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/estoque"
                to="/estoque/produtos/cadastro"
            />
            <ContentRoute
                path="/estoque/produtos/cadastro"
                component={CadastroProdutosPage}
            />
            <ContentRoute
                path="/estoque/produtos/consulta"
                component={ConsultaProdutosPage}
            />

        </Switch>
    );
}
