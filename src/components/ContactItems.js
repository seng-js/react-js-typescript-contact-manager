import GridViewItems from "./GridViewItems";
import ListViewItems from "./ListViewItems";

const ContactItems = ({isGridView, data}) => {
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