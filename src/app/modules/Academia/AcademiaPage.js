import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../layout";
import { CadastroEdicaoAlunosPage} from "./cadastros/alunos/CadastroEdicaoAlunosPage"
import { CadastroEdicaoPlanosPage} from "./cadastros/planos/CadastroEdicaoPlanosPage";
import { PagamentoPlanoAlunoPage } from "./pagamentos/PagamentoPlanoAlunoPage";
import { RelatorioAlunosPage } from "./relatorios/alunos/RelatorioAlunosPage";
import { RelatorioPlanosPage } from "./relatorios/planos/RelatorioPlanosPage";

export default function AcademiaPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/academia"
                to="/dashboard"
            />
            {/* ACADEMIA */}
            <ContentRoute from="/academia/relatorios/planos" component={RelatorioPlanosPage} />
            <ContentRoute from="/academia/relatorios/alunos" component={RelatorioAlunosPage} />
            <ContentRoute from="/academia/cadastros/alunos/edicao/:id" component={CadastroEdicaoAlunosPage} />
            <Redirect from="/academia/cadastros/alunos/edicao/" to="/academia/relatorios/alunos" exact={true}/>
            <ContentRoute from="/academia/cadastros/alunos" component={CadastroEdicaoAlunosPage} />
            <ContentRoute from="/academia/pagamentos" component={PagamentoPlanoAlunoPage} />
            <ContentRoute from="/academia/cadastros/planos/edicao/:id" component={CadastroEdicaoPlanosPage} />
            <Redirect from="/academia/cadastros/planos/edicao/" to="/academia/relatorios/planos" exact={true}/>
            <ContentRoute from="/academia/cadastros/planos/" component={CadastroEdicaoPlanosPage} />
            
        </Switch>
    );
}
