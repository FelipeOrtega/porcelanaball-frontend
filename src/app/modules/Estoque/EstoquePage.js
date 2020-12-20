import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ProdutosPage } from "./produtos/ProdutosPage";
import { CategoriasPage } from "./categorias/CategoriasPage";
import { ContentRoute } from "../../../_metronic/layout";

export default function EstoquePage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/estoque"
                to="/estoque/produtos"
            />
            {/* Produtos */}
            <ContentRoute from="/estoque/produtos" component={ProdutosPage} />

            {/* Categorias */}
            <ContentRoute from="/estoque/categorias" component={CategoriasPage} />

        </Switch>
    );
}
