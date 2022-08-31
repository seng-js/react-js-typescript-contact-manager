import SocialList from "./SocialList";
import ActionList from "./ActionList";
import './GridViewItems.css';
import {useDispatch} from "react-redux";
import ContainerModal from "./Form/ContainerModal";
import {deleteDataHandler} from "../services";
import React from "react";

const GridViewItems = ({data = []}) => {
    const contactEnableDelete:any = process.env.REACT_APP_CONTACT_ENABLE_DELETE
    const dispatch = useDispatch();
    const deleteData = (index: string) => {
        deleteDataHandler(index, dispatch);
    }
    const items = data.map( (item, key) => {
        const {avatar, name, company, position, city, social_networks, index} = item;
        return (
                <div className="card" key={key}>
                    <ContainerModal item={item} />
                    {JSON.parse(contactEnableDelete) && (
                        <button onClick={() => deleteData(index)} className="btn btn-delete btn-lg center modal-button"><i className="fa fa-trash"></i></button>
                    )}
                    <div className="content">
                        <div className="img">
                            <img src={avatar} alt={avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{name}</div>
                            <div className="job">{company + ', ' + position}</div>
                        </div>
                        <SocialList data={social_networks} />
                        <div className="details">
                            <div className="city">{city}</div>
                        </div>
                        <ActionList item={item} index={index} />
                    </div>
                </div>
            )
        }
    );

    return (
        <>
            <section className="section-1">
                <div className="main-card">
                    <div className="cards">
                        {items}
                    </div>
                </div>
            </section>
        </>
    )
}

export default GridViewItems
