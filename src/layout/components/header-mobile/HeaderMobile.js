import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import objectPath from "object-path";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";

export function HeaderMobile() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerLogo: uiService.getStickyLogo(),
      asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
      headerMenuSelfDisplay:
        objectPath.get(uiService.config, "header.menu.self.display") === true,
      headerMobileCssClasses: uiService.getClasses("header_mobile", true),
      headerMobileAttributes: uiService.getAttributes("header_mobile"),
    };
  }, [uiService]);

  return (
    <>
      {/*begin::Header Mobile*/}
      <div
        id="kt_header_mobile"
        className={`header-mobile ${layoutProps.headerMobileCssClasses}`}
        {...layoutProps.headerMobileAttributes}
      >
        {/* begin::Logo */}
        <Link to="/">
          <img
            alt="Logo"
            className="logo-default max-h-30px"
            src={toAbsoluteUrl("/media/logos/logoBall.png")}
          />
        </Link>
        {/* end::Logo */}

        {/* begin::Toolbar */}
        <div className="d-flex align-items-center">
          {layoutProps.asideDisplay && (
            <button
              className="btn p-0 burger-icon burger-icon-left"
              id="kt_aside_mobile_toggle"
            >
              <span />
            </button>
          )}

          {layoutProps.headerMenuSelfDisplay && (
            <button
              className="btn p-0 burger-icon burger-icon-left ml-4"
              id="kt_header_mobile_toggle"
            >
              <span />
            </button>
          )}

        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header Mobile */} {/*end::Header Mobile*/}
    </>
  );
}
