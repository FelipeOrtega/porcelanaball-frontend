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
                <span className="menu-text">CALENDÁRIO</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*Menu DASHBOARD*/}

            {/*Menu EQUIPE - QUADRAS */}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/equipe')}`}>
                <NavLink className="menu-link menu-toggle" to="/equipe">
                <span className="menu-text">QUADRA</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/cadastro')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/equipe/cadastro">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")} />
                                </span>
                                <span className="menu-text">
                                    CADASTROS
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipe/cliente')}`}>
                                        <NavLink className="menu-link" to="/equipe/cliente">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE CLIENTE</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipe/cadastro')}`}>
                                        <NavLink className="menu-link" to="/equipe/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE EQUIPE</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/gestao')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/equipe/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box1.svg")} />
                                </span>
                                <span className="menu-text">
                                    RELATÓRIOS
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipe/relatorioCliente')}`}>
                                        <NavLink className="menu-link" to="/equipe/relatorioCliente">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CLIENTES</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipe/gestao')}`}>
                                        <NavLink className="menu-link" to="/equipe/gestao">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">EQUIPES</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipe/pagamento')}`}
                        >
                            <NavLink className="menu-link" to="/equipe/pagamento">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
                                </span>
                              
                                <span className="menu-text">
                                    PAGAMENTOS
                                </span>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            
            </li>
            {/*Menu EQUIPE*/}

            {/*Menu PLANO*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/plano')}`}>
                <NavLink className="menu-link menu-toggle" to="/plano">
                    <span className="menu-text">ACADEMIA</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/aluno/cadastro">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">CADASTRO DE CLIENTE</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/edicao')}`}
                            style={{display: "none"}}
                        >
                            <NavLink className="menu-link" to="/aluno/edicao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">EDIÇÃO</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/gestao')}`}
                        >
                            <NavLink className="menu-link" to="/aluno/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Files/User-folder.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                    RELATÓRIO DE CLIENTE
                                </span>
                            </NavLink>

                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/plano/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/plano/cadastro">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">CADASTRO DE PLANOS</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/edicao')}`}
                            style={{display: "none"}}
                        >
                            <NavLink className="menu-link" to="/plano/edicao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">EDIÇÃO</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/plano/gestao')}`}
                        >
                            <NavLink className="menu-link" to="/plano/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/Binocular.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                    GESTÃO DE PLANOS
                                </span>
                            </NavLink>
                            
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu PLANO*/}

              {/*Menu FINANCEIRO*/}
              <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/financeiro')}`}>
                <NavLink className="menu-link menu-toggle" to="/financeiro">
                    <span className="menu-text">FINANCEIRO</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/financeiro/lancamentos')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/financeiro/lancamentos">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
                                </span>
                                <span className="menu-text">
                                    Lançamentos
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/financeiro/lancamentos/NovoLancamento')}`}>
                                        <NavLink className="menu-link" to="/financeiro/lancamentos/NovoLancamento">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Novo Lançamento</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/financeiro/lancamentos/ConsultaLancamentos')}`}>
                                        <NavLink className="menu-link" to="/financeiro/lancamentos/ConsultaLancamentos">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta Lançamento</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu FINANCEIRO*/}

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
