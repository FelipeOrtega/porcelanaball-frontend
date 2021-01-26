/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

export function UserProfileDropdown() {
  const { user } = useSelector((state) => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light:
        objectPath.get(uiService.config, "extras.user.dropdown.style") ===
        "light",
    };
  }, [uiService]);

  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-user-profile"
      >
        <div
          className={
            "btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto"
          }
        >
          <span className="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">
        
          </span>{" "}
          <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">
            {user.username}
          </span>
          <span className="symbol symbol-35">
            <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">
              {user.username}
            </span>
          </span>
        </div>
      </Dropdown.Toggle>

    </Dropdown>
  );
}
