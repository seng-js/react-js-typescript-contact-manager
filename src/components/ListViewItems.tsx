import React from 'react'
import './ListViewItems.css';
import SocialList from "./SocialList";
import ActionList from "./ActionList";
import ContainerModal from "./Form/ContainerModal";
import {deleteDataHandler} from "../services";
import {useDispatch} from "react-redux";

const ListViewItems = ({data = []}) => {
    const contactEnableDelete:any = process.env.REACT_APP_CONTACT_ENABLE_DELETE
    const dispatch = useDispatch();
    const deleteData = (index: string) => {
        deleteDataHandler(index, dispatch);
    }
    const items = data.map( (item, key) => {
        const {avatar, name, company, position, city, social_networks, index} = item;
        return (
                <div className="list-card" key={key}>
                    <div className="content">
                        <ContainerModal item={item} />
                        {JSON.parse(contactEnableDelete) && (
                            <button onClick={() => deleteData(index)} className="btn btn-lg center modal-button"><i className="fa fa-trash"></i></button>
                        )}
                        <div className="img">
                            <img src={avatar} alt={avatar} />
                        </div>
                        <div className="details">
                            <div className="name">{name}</div>
                            <div className="job">{company + ', ' + position}</div>
                            <div className="city">{city}</div>
                            <SocialList data={social_networks} />
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

export default ListViewItems
