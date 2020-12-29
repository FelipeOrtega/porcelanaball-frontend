import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoPlanosPage } from "./gestao/GestaoPlanosPage";
import { CadastroEdicaoPlanosPage } from "./gestao/CadastroEdicaoPlanosPage";
import { ContentRoute } from "../../../layout";

export default function PlanosPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/planos"
                to="/planos/gestao"
            />
            {/* Planos */}
            <ContentRoute from="/planos/cadastro" component={CadastroEdicaoPlanosPage} />
            <ContentRoute from="/planos/gestao" component={GestaoPlanosPage} />

        </Switch>
    );
}
