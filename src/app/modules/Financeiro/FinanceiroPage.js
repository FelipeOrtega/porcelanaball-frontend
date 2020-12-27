import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { LancamentosPage } from "./lancamentos/LancamentosPage";
import { ContentRoute } from "../../../layout";

export default function FinanceiroPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/financeiro"
                to="/financeiro/lancamentos"
            />
            {/* Lançamento */}
            <ContentRoute from="/financeiro/lancamentos" component={LancamentosPage} />

        </Switch>
    );
}
