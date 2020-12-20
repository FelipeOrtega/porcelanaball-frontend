import React from "react";
import { Redirect, Switch } from "react-router-dom";
import BaixaMensalidadePage from "./BaixaMensalidadePage";
import { ContentRoute } from "../../../../_metronic/layout";

export function RecebimentosPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/planos"
                to="/planos/recebimentos/baixaMensalidade"
            />
            <ContentRoute
                path="/planos/recebimentos/baixaMensalidade"
                component={BaixaMensalidadePage}
            />


        </Switch>
    );
}
