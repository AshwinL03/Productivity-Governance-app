import { useParams } from "react-router-dom";
 
const EachProject = () => {
    const { id } = useParams();
    return (
        <div style={{ padding: "20px" }}>
            <h1>Project ID: {id}</h1>
        </div>
    );
};
 
export default EachProject;