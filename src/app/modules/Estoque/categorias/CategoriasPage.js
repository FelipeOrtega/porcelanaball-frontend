import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CadastroCategoriasPage from "./CadastroCategoriasPage";
import ConsultaCategoriasPage from "./ConsultaCategoriasPage";
import { ContentRoute } from "../../../../layout";

export function CategoriasPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/estoque"
                to="/estoque/categorias/cadastro"
            />
            <ContentRoute
                path="/estoque/categorias/cadastro"
                component={CadastroCategoriasPage}
            />
            <ContentRoute
                path="/estoque/categorias/consulta"
                component={ConsultaCategoriasPage}
            />

        </Switch>
    );
}
