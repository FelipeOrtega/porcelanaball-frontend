import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../layout";
import { DashboardPage } from "./pages/DashboardPage";
const AlunoPage = lazy(() =>
    import("./modules/Aluno/AlunoPage")
);
const PlanosPage = lazy(() =>
    import("./modules/Planos/PlanosPage")
);
const ModalidadePage = lazy(() =>
    import("./modules/Modalidade/ModalidadePage")
);
const EstoquePage = lazy(() =>
    import("./modules/Estoque/EstoquePage")
);
const FinanceiroPage = lazy(() =>
    import("./modules/Financeiro/FinanceiroPage")
);
const RelatoriosPage = lazy(() =>
    import("./modules/Relatorios/RelatoriosPage")
);
const ConfigPage = lazy(() =>
    import("./modules/Config/ConfigPage")
);


export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (<
        Suspense fallback={< LayoutSplashScreen />} >
        <Switch > {/* Redirect from root URL to /dashboard. */ <Redirect exact from="/" to="/dashboard" />}
                <ContentRoute path="/dashboard" component={DashboardPage} />
                <Route path="/aluno" component={AlunoPage} />
                <Route path="/planos" component={PlanosPage} />
                <Route path="/modalidade" component={ModalidadePage} />
                <Route path="/estoque" component={EstoquePage} />
                <Route path="/financeiro" component={FinanceiroPage} />
                <Route path="/relatorios" component={RelatoriosPage} />
                <Route path="/config" component={ConfigPage} />
                <Redirect to="error/error-v1" />
        </Switch>
    </Suspense>
    );
}