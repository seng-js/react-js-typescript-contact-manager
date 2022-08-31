import React from "react";
import GridViewItems from "./GridViewItems";
import ListViewItems from "./ListViewItems";

type ContactItemProps = {
    isGridView: any,
    data: any
}

const ContactItems: React.FC<ContactItemProps> = ({isGridView, data}) => {
    return (
        <>
            {isGridView ? (
                <GridViewItems data={data} />
            ):(
                <ListViewItems data={data} />
            )}
        </>
    )
}

export default ContactItems
