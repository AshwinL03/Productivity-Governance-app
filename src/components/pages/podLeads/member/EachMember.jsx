import { useParams } from "react-router-dom";
 
const EachMember = () => {
    const { id } = useParams();
    return (
        <div style={{ padding: "20px" }}>
            <h1>Member Name: {id}</h1>
            <p>Details for member {id} will appear here.</p>
        </div>
    );
};
 
export default EachMember;