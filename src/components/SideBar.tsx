import {NavLink, useLocation} from "react-router-dom";
import './SideBar.css';
import {menuItems} from "../util/constants";
import {useGetProfile} from "../hooks/useGetProfile";
import React from "react";

const SideBar = () => {
    const profile = useGetProfile();
    const location = useLocation();
    const { pathname } = location;

    const renderMenuItems= menuItems.map(({link, icon, name}, key) => (
        <li key={key} className={pathname === link ? "active" : ""}>
            <NavLink to={link}><i className={icon} aria-hidden="true"></i><span>{name}</span></NavLink>
        </li>
    ));

    return (
        <>
            <nav className="side-bar">
                <div className="user-p">
                    <img alt={profile?.avatar} src={profile?.avatar} />
                        <h4>{profile?.name}</h4>
                        <h6>{profile?.company}, {profile?.position}</h6>
                </div>
                <ul>
                    {renderMenuItems}
                </ul>
            </nav>
        </>
    )
}

export default SideBar
