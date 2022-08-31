import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";

const Contacts = () => {
    const state = useSelector(state => state);
    const contacts = state.contacts.filter((contact) => contact.isContact);
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Contacts" isGridView={isGridView} switchView={switchView} data={contacts}/>
            <ContactItems data={contacts} isGridView={isGridView} />
        </div>
    );
}

export default Contacts;