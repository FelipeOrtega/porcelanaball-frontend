import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoPage } from "./gestao/GestaoPage";
import { ContentRoute } from "../../../layout";

export default function ModalidadePage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/modalidade"
                to="/modalidade/gestao"
            />
            {/* Modalidade */}
            <ContentRoute from="/modalidade/gestao" component={GestaoPage} />

        </Switch>
    );
}
