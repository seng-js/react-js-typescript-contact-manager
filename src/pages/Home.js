import SideHeader from "../components/SideHeader";
import ContactItems from "../components/ContactItems";
import {useSelector} from "react-redux";
import {useToggleView} from "../hooks/useToggleView";

const Home = () => {
    const state = useSelector(state => state);
    const contacts = state.contacts;
    const [isGridView, switchView] = useToggleView();

    return (
        <div className="container-section">
            <SideHeader title="Home" isGridView={isGridView} switchView={switchView} data={contacts} />
            <ContactItems isGridView={isGridView} data={contacts} />
        </div>
    );
}

export default Home;