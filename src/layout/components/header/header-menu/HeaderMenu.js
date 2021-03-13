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

              {/*Menu QUADRAS - QUADRAS */}
              <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/quadra')}`}>
                <NavLink className="menu-link menu-toggle" to="/quadra">
                <span className="menu-text">QUADRA</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/cadstros')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/quadra/cadastros">
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
                                    <li className={`menu-item ${getMenuItemActive('/quadra/cadastros/clientes')}`}>
                                        <NavLink className="menu-link" to="/quadra/cadastros/clientes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE CLIENTES</span>
                                        </NavLink>
                                    </li>
                                    <li
                                        className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/cadastros/clientes/edicao')}`}
                                        style={{display: "none"}}
                                    >
                                        <NavLink className="menu-link" to="/quadra/cadastros/clientes/edicao">
                                            <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                            </span>
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">EDIÇÃO</span>
                                        </NavLink>
                                    </li>
                                    <li
                                        className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/cadastros/clientes/visualizar')}`}
                                        style={{display: "none"}}
                                    >
                                        <NavLink className="menu-link" to="/quadra/cadastros/clientes/visualizar">
                                            <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                            </span>
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">VISUALIZAR</span>
                                        </NavLink>
                                    </li>

                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/quadra/cadastros/equipes')}`}>
                                        <NavLink className="menu-link" to="/quadra/cadastros/equipes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE EQUIPES</span>
                                        </NavLink>
                                    </li>
                                    <li
                                        className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/cadastros/equipes/edicao')}`}
                                        style={{display: "none"}}
                                    >
                                        <NavLink className="menu-link" to="/quadra/cadastros/equipes/edicao">
                                            <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                            </span>
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">EDIÇÃO</span>
                                        </NavLink>
                                    </li>
                                    <li
                                        className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/cadastros/equipes/visualizar')}`}
                                        style={{display: "none"}}
                                    >
                                        <NavLink className="menu-link" to="/quadra/cadastros/equipes/visualizar">
                                            <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                            </span>
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">VISUALIZAR</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/pagamento')}`}
                        >
                            <NavLink className="menu-link" to="/quadra/pagamento">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
                                </span>
                              
                                <span className="menu-text">
                                    PAGAMENTOS
                                </span>
                            </NavLink>

                        </li>
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/quadra/relatorios')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/quadra/relatorios">
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
                                    <li className={`menu-item ${getMenuItemActive('/quadra/relatorios/clientes')}`}>
                                        <NavLink className="menu-link" to="/quadra/relatorios/clientes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CLIENTES CADASTRADOS</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/quadra/relatorios/equipes')}`}>
                                        <NavLink className="menu-link" to="/quadra/relatorios/equipes">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">EQUIPES CADASTRADAS</span>
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
            {/*Menu QUADRAS*/}

            {/*Menu ACADEMIA - QUADRAS */}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/academia')}`}>
                <NavLink className="menu-link menu-toggle" to="/academia">
                <span className="menu-text">ACADEMIA</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/academia/cadastros')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/academia/cadastros">
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
                                    <li className={`menu-item ${getMenuItemActive('/academia/cadastros/alunos')}`}>
                                        <NavLink className="menu-link" to="/academia/cadastros/alunos">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE ALUNOS</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level
                                    <li className={`menu-item ${getMenuItemActive('/plano/cadastro')}`}>
                                        <NavLink className="menu-link" to="/plano/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">CADASTRO DE PLANOS</span>
                                        </NavLink>
                                    </li>
                                    end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/academia/pagamentos')}`}
                        >
                            <NavLink className="menu-link" to="/academia/pagamentos">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
                                </span>
                              
                                <span className="menu-text">
                                    PAGAMENTOS
                                </span>
                            </NavLink>

                        </li>
                        begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/academia/relatorios')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/academia/relatorios">
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
                                    <li className={`menu-item ${getMenuItemActive('/academia/relatorios/alunos')}`}>
                                        <NavLink className="menu-link" to="/academia/relatorios/alunos">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">ALUNOS CADASTRADOS</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level
                                    <li className={`menu-item ${getMenuItemActive('/plano/gestao')}`}>
                                        <NavLink className="menu-link" to="/plano/gestao">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">PLANOS CADASTRADOS</span>
                                        </NavLink>
                                    </li>
                                    end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                      
                    </ul>
                </div>
            
            </li>
            {/*Menu ACADEMIA*/}

            {/*Menu FINANCEIRO
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
                                 
                                    <li className={`menu-item ${getMenuItemActive('/financeiro/lancamentos/NovoLancamento')}`}>
                                        <NavLink className="menu-link" to="/financeiro/lancamentos/NovoLancamento">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Novo Lançamento</span>
                                        </NavLink>
                                    </li>
                                 

                                
                                    <li className={`menu-item ${getMenuItemActive('/financeiro/lancamentos/ConsultaLancamentos')}`}>
                                        <NavLink className="menu-link" to="/financeiro/lancamentos/ConsultaLancamentos">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta Lançamento</span>
                                        </NavLink>
                                    </li>
                                  
                                </ul>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </li>
            Menu FINANCEIRO*/}

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
