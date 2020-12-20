import React from "react";
import { Redirect, Switch } from "react-router-dom";
import NovoLancamentoPage from "./NovoLancamentoPage";
import ConsultaLancamentosPage from "./ConsultaLancamentosPage";
import { ContentRoute } from "../../../../_metronic/layout";

export function LancamentosPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/financeiro"
                to="/financeiro/lancamentos/NovoLancamento"
            />
            <ContentRoute
                path="/financeiro/lancamentos/NovoLancamento"
                component={NovoLancamentoPage}
            />
            <ContentRoute
                path="/financeiro/lancamentos/ConsultaLancamentos"
                component={ConsultaLancamentosPage}
            />
        </Switch>
    );
}
