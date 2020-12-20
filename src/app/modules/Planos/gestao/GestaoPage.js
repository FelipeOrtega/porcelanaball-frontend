import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CadastroPlanoPage from "./CadastroPlanoPage";
import ConsultaPlanoPage from "./ConsultaPlanoPage";
import { ContentRoute } from "../../../../_metronic/layout";

export function GestaoPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/planos"
                to="/planos/gestao/cadastro"
            />
            <ContentRoute
                path="/planos/gestao/cadastro"
                component={CadastroPlanoPage}
            />
            <ContentRoute
                path="/planos/gestao/consulta"
                component={ConsultaPlanoPage}
            />

        </Switch>
    );
}
