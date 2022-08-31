import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";
import React from "react";

const Contacts = () => {
    const state:any = useSelector(state => state);
    const contacts:any = state.contacts.filter((contact: { isContact: any; }) => contact.isContact);
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Contacts" isGridView={isGridView} switchView={switchView}/>
            <ContactItems data={contacts} isGridView={isGridView} />
        </div>
    );
}

export default Contacts;
