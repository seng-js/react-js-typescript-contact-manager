import {useSelector} from "react-redux";

export const useGetProfile = () => {

    const state:any = useSelector(state => state);

    return state?.tempContacts[0];
}
