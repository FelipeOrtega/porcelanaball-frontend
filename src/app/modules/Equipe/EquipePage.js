import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoEquipePage } from "./gestao/GestaoEquipePage";
import { CadastroEdicaoEquipePage} from "./gestao/CadastroEdicaoEquipePage"
import { ContentRoute } from "../../../layout";

export default function EquipePage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/equipe"
                to="/equipe/gestao"
            />
            {/* equipes */}
            <ContentRoute from="/equipe/gestao" component={GestaoEquipePage} />
            <ContentRoute from="/equipe/edicao/:id" component={CadastroEdicaoEquipePage} />
            <ContentRoute from="/equipe/cadastro" component={CadastroEdicaoEquipePage} />
        </Switch>
    );
}
