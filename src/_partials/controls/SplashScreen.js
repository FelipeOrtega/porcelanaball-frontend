import React from "react";
import {CircularProgress} from "@material-ui/core";
import {toAbsoluteUrl} from "../../_helpers";

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img
          src={toAbsoluteUrl("/media/logos/logoBall.png")}
          alt="Porcelana Ball"
        />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
