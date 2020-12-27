import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CadastroModalidadePage from "./CadastroModalidadePage";
import ConsultaModalidadePage from "./ConsultaModalidadePage";
import { ContentRoute } from "../../../../layout";

export function GestaoPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/modalidade"
                to="/modalidade/gestao/cadastro"
            />
            <ContentRoute
                path="/modalidade/gestao/cadastro"
                component={CadastroModalidadePage}
            />
            <ContentRoute
                path="/modalidade/gestao/consulta"
                component={ConsultaModalidadePage}
            />

        </Switch>
    );
}
