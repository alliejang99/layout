import React from "react";
import { IoSettingsSharp } from 'react-icons/io';
import '../scss/style.scss';

function Header() {
    return (
        <header className="header">
            <h1 className="headerTitle">Admin</h1>
            <ul className="info">
                <li className="naming">
                    기계전사
                    <span>▼</span>
                </li>
                <li className="setting">설정</li>
                <IoSettingsSharp />
                <li className="home">처음 페이지로</li>
            </ul>
        </header>
    )
} 
export default Header;