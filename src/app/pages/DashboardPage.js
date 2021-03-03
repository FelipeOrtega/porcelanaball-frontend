import React, { useEffect } from "react";
import ReactGa from "react-ga";

export function DashboardPage() {

  useEffect(() => {
    ReactGa.initialize('G-36BCY6E3RY')

    //to report page view
    ReactGa.pageview('/')

  },[])

  return <>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FSao_Paulo&amp;src=Y19xYTNkMHNkdGl1MWowNm9sbHF2aGY5c29zNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23D50000&amp;showTitle=0&amp;showTabs=1&amp;showTz=0&amp;showCalendars=0&amp;title=PorcelanaBall"
width="100%" height="100%" scrolling="no"
></iframe>
  </>;
}



