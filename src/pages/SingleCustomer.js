import { useParams } from "react-router-dom";

const SingleCustomer = ({customers}) => {
    const {id} = useParams();
    const customer = customers[id];

    return (
        <div>
            <h1>{customer}</h1>
            <p>{customer} is one of our most loyal customers.</p>
        </div>
    )
}

export default SingleCustomer;



