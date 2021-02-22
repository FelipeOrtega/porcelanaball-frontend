import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../layout";
import { CadastroEdicaoClientesPage} from "./cadastros/clientes/CadastroEdicaoClientesPage"
import { CadastroEdicaoEquipesPage} from "./cadastros/equipes/CadastroEdicaoEquipesPage";
import { PagamentoEquipePage } from "./pagamentos/PagamentoEquipePage";
import { RelatorioClientesPage } from "./relatorios/clientes/RelatorioClientesPage";
import { RelatorioEquipesPage } from "./relatorios/equipes/RelatorioEquipesPage";

export default function QuadraPage() {
    return (
        <Switch>
            <Redirect
                exact={true}
                from="/quadra"
                to="/quadra/relatorios"
            />
            {/* QUADRA */}
            <ContentRoute from="/quadra/relatorios/equipes" component={RelatorioEquipesPage} />
            <ContentRoute from="/quadra/relatorios/clientes" component={RelatorioClientesPage} />

            <ContentRoute from="/quadra/cadastros/clientes/edicao/:id" component={CadastroEdicaoClientesPage} />
            <ContentRoute from="/quadra/cadastros/clientes" component={CadastroEdicaoClientesPage} />

            <ContentRoute from="/quadra/pagamentos" component={PagamentoEquipePage} />

            <ContentRoute from="/quadra/cadastros/equipes/edicao/:id" component={CadastroEdicaoEquipesPage} />
            <ContentRoute from="/quadra/cadastros/equipes" component={CadastroEdicaoEquipesPage} />
                    
        </Switch>
    );
}
