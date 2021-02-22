import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../layout";
import { DashboardPage } from "./pages/DashboardPage";

const QuadraPage = lazy(() =>
    import("./modules/Quadra/QuadraPage")
);
const AcademiaPage = lazy(() =>
    import("./modules/Academia/AcademiaPage")
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
                <Route path="/academia" component={AcademiaPage} />
                <Route path="/quadra" component={QuadraPage} />
                <Redirect to="error/error-v1" />
        </Switch>
    </Suspense>
    );
}