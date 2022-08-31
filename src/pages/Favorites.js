import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";

const Favorites = () => {
    const state = useSelector(state => state);
    const contacts = state.contacts.filter((contact) => contact.isFavorite);
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Favorites" isGridView={isGridView} switchView={switchView} data={contacts} />
            <ContactItems isGridView={isGridView} data={contacts} />
        </div>
    );
}

export default Favorites;