import React from "react";
import {useSubheader} from "../../_metronic/layout";

export const AcademiaPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Teste!");

  return (<>My Page</>);
};
