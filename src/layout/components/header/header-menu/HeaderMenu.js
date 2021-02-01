/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
            {/*INICIO DO MENU*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*Menu DASHBOARD*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                <span className="menu-text">INÍCIO</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*Menu DASHBOARD*/}

             {/*Menu CLIENTE - ALUNO - ATLETA */}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/aluno')}`}>
                <NavLink className="menu-link menu-toggle" to="/aluno">
                <span className="menu-text">CLIENTE</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/gestao')}`}
                        >
                            <NavLink className="menu-link" to="/aluno/gestao">
                                <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Binocular.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                GESTÃO
                                </span>
                            </NavLink>
                            
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/aluno/cadastro">
                                <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">CADASTRO</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/edicao')}`}
                            style={{display: "none"}}
                        >
                            <NavLink className="menu-link" to="/aluno/edicao">
                                <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">EDIÇÃO</span>
                            </NavLink>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu CLIENTE*/}

             {/*Menu EQUIPE - QUADRAS */}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/equipe')}`}>
                <NavLink className="menu-link menu-toggle" to="/equipe">
                <span className="menu-text">QUADRAS</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/gestao')}`}
                        >
                            <NavLink className="menu-link" to="/equipe/gestao">
                                <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Binocular.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                GESTÃO DE EQUIPE
                                </span>
                            </NavLink>

                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/equipe/cadastro">
                                <span className="svg-icon menu-icon">
                                <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">CADASTRO DE EQUIPE</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/edicao')}`}
                            style={{ display: "none" }}
                        >
                            <NavLink className="menu-link" to="/equipe/edicao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">EDIÇÃO</span>
                            </NavLink>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu EQUIPE*/}


            {/*Menu SAIR*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/logout')}`}>
                <NavLink className="menu-link" to="/logout">
                <span className="menu-text">SAIR</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*Menu SAIR*/}

        </ul>
        {/*FINAL DO MENU*/}
    </div>;
}
