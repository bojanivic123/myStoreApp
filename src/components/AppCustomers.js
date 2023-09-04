import { useState } from "react";
import Customer from "./Customer";

const AppCustomers = () => {
    const [customers, setCustomers] = useState(["Marko Markovic", "Petar Petrovic", "Nina Babic", "Nikola Nikolic", "Maja Savic"]);

    const handleRemove = index => {
        setCustomers(previousValue => previousValue.filter((customer, i) => i !== index));
    }

    return (
        <ul className="list-group">
            {customers.map((customer, index) => {
                return (
                    <Customer
                    key={index}
                    customer={customer}
                    handleRemove={handleRemove}
                    index={index}
                    />
                )
            })}
        </ul>
    )
}

export default AppCustomers;






