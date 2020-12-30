import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoPage } from "./gestao/GestaoPage";
import { RecebimentosPage } from "../Planos/recebimentos/RecebimentosPage";
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
            <ContentRoute from="/planos/gestao" component={GestaoPage} />

            {/* Recebimentos */}
            <ContentRoute from="/planos/recebimentos" component={RecebimentosPage} />

        </Switch>
    );
}