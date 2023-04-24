import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/SettingsRounded";
import BookIcon from "@mui/icons-material/MenuBookRounded";
import ContractIcon from '@mui/icons-material/ReceiptLongRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';

import "./Sidebar.css"

import logo from "./../assets/logo.png"

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <Link to="/">
                            <div className="item">
                                <PersonIcon />
                                <span>Bem-vinda, Dani!</span>
                            </div>  
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses">
                            <div className="item">
                                <BookIcon />
                                <span>Disciplinas</span>
                            </div>  
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="item">
                                <ContractIcon />
                                <span>Contratos</span>
                            </div>  
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="item">
                                <SettingsIcon />
                                <span>Configurações</span>
                            </div>  
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
