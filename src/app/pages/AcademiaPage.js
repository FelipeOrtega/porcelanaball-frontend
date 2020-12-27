import React from "react";
import {useSubheader} from "../../layout";

export const AcademiaPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Teste!");

  return (<>My Page</>);
};
