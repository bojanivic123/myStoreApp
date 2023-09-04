import { Link } from "react-router-dom"; 

const Customer = ({customer, handleRemove, index}) => {
    return (
        <li className="list-group-item">{customer} <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button> <Link to={`/customers/${index}`}><button className="btn btn-info">Latest purchases</button></Link></li>
    )
}

export default Customer;









