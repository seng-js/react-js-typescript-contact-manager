import React from "react";
import SideHeader from "../components/SideHeader";
import {useToggleView} from "../hooks/useToggleView";

const Companies = () => {
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Companies" isGridView={isGridView} switchView={switchView}/>
        </div>
    );
}

export default Companies;
