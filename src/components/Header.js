import React from "react";
import { IoSettingsSharp,ImHome3 } from 'react-icons/all';

function Header() {
    return (
        <header className="header">
            <h1 className="headerTitle">Admin</h1>
            <ul className="info">
                <li className="userId">
                    기계전사
                    <span>▼</span>
                </li>
                <li className="setting">
                    <IoSettingsSharp style={{
                        width:'25px',
                        height:'25px'
                        }} 
                    />
                </li>
                <li className="home">
                    <ImHome3 style={{
                        width:'25px',
                        height:'25px'
                        }}
                    />
                </li>
            </ul>
        </header>
    )
} 
export default Header;