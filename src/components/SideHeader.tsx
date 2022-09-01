import './SideHeader.css';
import {Link} from "react-router-dom";
import {getLocationsByData, getSetting} from "../util";
import {useDispatch, useSelector} from "react-redux";
import {getFilterData} from "../services/actions";
import {ContainerModal} from "./Form/ContainerModal";
import {useGetProfile} from "../hooks/useGetProfile";
import React from 'react';
import {defaultContact} from "../util/constants";

type SideHeaderProps = {
    isGridView:any,
    switchView:any,
    title:any
}
const SideHeader: React.FC<SideHeaderProps> = ({isGridView, switchView, title}) => {
    const dispatch = useDispatch();
    const profile = useGetProfile();
    const {locationFilter} = getSetting();
    const state:any = useSelector(state => state);

    const renderLocationOptions = getLocationsByData(state?.tempContacts).map((location, key) => {
        return <option value={location.toString()} key={key}>{location}</option>
    });

    return (
        <>
            <div className="row">
                <div>
                    <input type="search"
                           id="search"
                           value={state.selectedFilterByName}
                           placeholder="Search..."
                           onChange={(event) => dispatch(getFilterData(
                               {
                                   filterByName: event.target.value,
                                   filterByLocation: state.selectedFilterByLocation})
                           )
                    } />
                </div>
                <div>
                    <Link className="nav-link nav-profile" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={profile?.avatar} alt={profile?.avatar} className="rounded-circle" />
                        <span className="login-name">{profile?.name}</span>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="filter-option">
                    <ul>
                        <li><h1 className="filter-label">{title}</h1></li>
                        <li onClick={() => switchView(true)}><i className={`fa fa-th-large ${isGridView ? 'active' : ''}`}></i></li>
                        <li onClick={() => switchView(false)}><i className={`fa fa-bars ${!isGridView ? 'active' : ''}`}></i></li>
                    </ul>
                </div>
                <div>
                    {title === 'People' && (<ContainerModal isShowButton={true} triggerText="Add people" item={defaultContact} />)}
                </div>
                <div>
                    <img alt={locationFilter} src={locationFilter} />
                    <select id="location"
                            value={state.selectedFilterByLocation}
                            className="location"
                            onChange={
                                (event) => dispatch(getFilterData(
                                {
                                    filterByLocation: event.target.value,
                                    filterByName: state.selectedFilterByName
                                }))
                            }>
                        <option value="">Filter locations</option>
                        {renderLocationOptions}
                    </select>
                </div>
            </div>
        </>
    )
}

export default SideHeader
