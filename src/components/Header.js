import React from "react";
import { IoSettingsSharp,IoHomeSharp,BsSearch } from 'react-icons/all';

function Header() {
    return (
        <header className="header">
            {/* headerTitle */}
            <h1 className="headerTitle">Admin</h1>
            
            {/* searchBox */}
            {/* <button type="button" className="searchBox">
                <BsSearch style={{
                        paddingLeft: '7px',
                        color: '#fff'
                    }}
                />
                
            </button> */}
            <div className="searchBox">
                <BsSearch style={{
                        paddingLeft: '7px',
                        paddingRight: '7px',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                />
                <input className="search" type="text" />
            </div>

            {/* info */}
            <ul className="info">
                <li className="userId">
                    Name
                    <span className="iconTriangle">▼</span>
                </li>
                <li className="setting">
                    <IoSettingsSharp style={{
                            width:'25px',
                            height:'25px'
                        }} 
                    />
                </li>
                <li className="home">
                    <IoHomeSharp style={{
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