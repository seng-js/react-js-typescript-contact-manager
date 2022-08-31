import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";
import React from "react";

const Favorites = () => {
    const state:any = useSelector(state => state);
    const contacts:any = state.contacts.filter((contact: { isFavorite: any; }) => contact.isFavorite);
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Favorites" isGridView={isGridView} switchView={switchView} />
            <ContactItems isGridView={isGridView} data={contacts} />
        </div>
    );
}

export default Favorites;
