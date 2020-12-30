import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoPlanoPage } from "./gestao/GestaoPlanoPage";
import { CadastroEdicaoPlanoPage } from "./gestao/CadastroEdicaoPlanoPage";
import { ContentRoute } from "../../../layout";

export default function PlanoPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/plano"
                to="/plano/gestao"
            />
            {/* Planos */}
            <ContentRoute from="/plano/gestao" component={GestaoPlanoPage} />
            <ContentRoute from="/plano/edicao/:id" component={CadastroEdicaoPlanoPage} />
            <ContentRoute from="/plano/cadastro" component={CadastroEdicaoPlanoPage} />
            
        </Switch>
    );
}
