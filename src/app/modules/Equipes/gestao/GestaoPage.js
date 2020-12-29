import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CadastroEquipesPage from "./CadastroEquipesPage";
import ConsultaEquipesPage from "./ConsultaEquipesPage";
import { ContentRoute } from "../../../../layout";

export function GestaoPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/equipes"
                to="/equipes/gestao/cadastro"
            />
            <ContentRoute
                path="/equipes/gestao/cadastro"
                component={CadastroEquipesPage}
            />
            <ContentRoute
                path="/equipes/gestao/consulta"
                component={ConsultaEquipesPage}
            />

        </Switch>
    );
}
