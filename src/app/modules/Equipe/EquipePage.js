import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoEquipePage } from "./gestao/GestaoEquipePage";
import { PagamentoEquipePage } from "./gestao/PagamentoEquipePage";
import { CadastroEdicaoEquipePage} from "./gestao/CadastroEdicaoEquipePage";
import { GestaoAlunoPage } from "./gestao/GestaoAlunoPage";
import { CadastroEdicaoAlunoPage} from "./gestao/CadastroEdicaoAlunoPage"
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
            <ContentRoute from="/equipe/relatorioCliente" component={GestaoAlunoPage} />
            <ContentRoute from="/equipe/cliente" component={CadastroEdicaoAlunoPage} />
            <ContentRoute from="/equipe/pagamento" component={PagamentoEquipePage} />
            <ContentRoute from="/equipe/edicao/:id" component={CadastroEdicaoEquipePage} />
            <Redirect from="/equipe/edicao/" to="/equipe/gestao" exact={true}/>
            <ContentRoute from="/equipe/cadastro" component={CadastroEdicaoEquipePage} />
        </Switch>
    );
}
