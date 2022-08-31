import {useSelector} from "react-redux";

export const useGetProfile = () => {

    const state = useSelector(state => state);

    return state?.tempContacts[0];
}
