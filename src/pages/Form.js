import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({handleAddCustomer}) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); handleAddCustomer(name); navigate("/customers") }}>
                <div className="form-group">
                    <label>Name <input className="form-control mb-3" type="text" value={name} onChange={e => setName(e.target.value)}/></label>
                </div>
                <button type="submit" className="btn btn-primary">Add customer</button>
            </form>
        </div>
    )
}

export default Form;







