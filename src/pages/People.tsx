import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";
import React from "react";

const People = () => {
    const state:any = useSelector(state => state);
    const contacts:any = state.contacts;
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="People" isGridView={isGridView} switchView={switchView} />
            <ContactItems isGridView={isGridView} data={contacts} />
        </div>
    );
}

export default People;
