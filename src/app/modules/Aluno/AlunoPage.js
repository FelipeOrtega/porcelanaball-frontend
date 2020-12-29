import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { GestaoAlunoPage } from "./gestao/GestaoAlunoPage";
import { CadastroEdicaoAlunoPage} from "./gestao/CadastroEdicaoAlunoPage"
import { ContentRoute } from "../../../layout";

export default function AlunoPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/aluno"
                to="/aluno/gestao"
            />
            {/* Alunos */}
            <ContentRoute from="/aluno/gestao" component={GestaoAlunoPage} />
            <ContentRoute from="/aluno/edicao/:id" component={CadastroEdicaoAlunoPage} />
            <ContentRoute from="/aluno/cadastro" component={CadastroEdicaoAlunoPage} />
        </Switch>
    );
}
