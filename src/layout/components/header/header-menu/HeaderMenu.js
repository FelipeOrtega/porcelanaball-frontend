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
                    <span className="menu-text">Agenda</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*Menu DASHBOARD*/}

            {/*Menu ATLETA - ALUNO - CLIENTE */}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/aluno')}`}>
                <NavLink className="menu-link menu-toggle" to="/aluno">
                    <span className="menu-text">Atleta</span>
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
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                    Gestão do Atleta
                                </span>
                            </NavLink>
                            
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/aluno/cadastro">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Cadastro</span>
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
                                <span className="menu-text">Edição</span>
                            </NavLink>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu ALUNO*/}

            {/*Menu EQUIPE*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/equipes')}`}>
                <NavLink className="menu-link menu-toggle" to="/equipes">
                    <span className="menu-text">Equipes</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipes/gestao')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/equipes/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <span className="menu-text">
                                    Gestão de Equipes
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipes/gestao/cadastro')}`}>
                                        <NavLink className="menu-link" to="/equipes/gestao/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Cadastro</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipes/gestao/consulta')}`}>
                                        <NavLink className="menu-link" to="/equipes/gestao/consulta">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/equipes/recebimentos')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/equipes/recebimentos">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />
                                </span>
                                <span className="menu-text">
                                    Recebimentos
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/equipes/recebimentos/baixaMensalidade')}`}>
                                        <NavLink className="menu-link" to="/equipes/recebimentos/baixaMensalidade">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Baixa de Mensalidade</span>
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
            {/*Menu EQUIPE*/}

            {/*Menu PLANO*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/planos')}`}>
                <NavLink className="menu-link menu-toggle" to="/planos">
                    <span className="menu-text">Planos</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/planos/gestao')}`}
                        >
                            <NavLink className="menu-link" to="/planos/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">
                                    Gestão de Planos
                                </span>
                            </NavLink>
                            
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/planos/cadastro')}`}
                        >
                            <NavLink className="menu-link" to="/planos/cadastro">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Cadastro</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/aluno/edicao')}`}
                            style={{display: "none"}}
                        >
                            <NavLink className="menu-link" to="/planos/edicao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Design/PenAndRuller.svg")} />
                                </span>
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Edição</span>
                            </NavLink>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*Menu PLANO*/}

            {/*Menu MODALIDADE*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/modalidade')}`}>
                <NavLink className="menu-link menu-toggle" to="/modalidade">
                    <span className="menu-text">Business</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/modalidade/gestao')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/modalidade/gestao">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Flag.svg")} />
                                </span>
                                <span className="menu-text">
                                    Gestão
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/modalidade/gestao/cadastro')}`}>
                                        <NavLink className="menu-link" to="/modalidade/gestao/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Cadastro</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/modalidade/gestao/consulta')}`}>
                                        <NavLink className="menu-link" to="/modalidade/gestao/consulta">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta</span>
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
            {/*Menu MODALIDADE*/}

            {/*Menu ESTOQUE*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/estoque')}`}>
                <NavLink className="menu-link menu-toggle" to="/estoque">
                    <span className="menu-text">Estoque</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/estoque/produtos')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/estoque/produtos">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
                                </span>
                                <span className="menu-text">
                                    Produtos
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/estoque/produtos/cadastro')}`}>
                                        <NavLink className="menu-link" to="/estoque/produtos/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Cadastro</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/estoque/produtos/consulta')}`}>
                                        <NavLink className="menu-link" to="/estoque/produtos/consulta">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/estoque/categorias')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/estoque/categorias">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box1.svg")} />
                                </span>
                                <span className="menu-text">
                                    Categorias
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/estoque/categorias/cadastro')}`}>
                                        <NavLink className="menu-link" to="/estoque/categorias/cadastro">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Cadastro</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/estoque/categorias/consulta')}`}>
                                        <NavLink className="menu-link" to="/estoque/categorias/consulta">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Consulta</span>
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
            {/*Menu ESTOQUE*/}

            {/*Menu FINANCEIRO*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/financeiro')}`}>
                <NavLink className="menu-link menu-toggle" to="/financeiro">
                    <span className="menu-text">Financeiro</span>
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
                    <span className="menu-text">Sair</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*Menu SAIR*/}

        </ul>
        {/*FINAL DO MENU*/}
    </div>;
}
