import { useState } from "react";

const SearchProduct = ({products}) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterBySearch = e => {
        const searchValue = e.target.value;
        let updatedList = [...products];
        updatedList = updatedList.filter(product => product.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
        setFilteredProducts(updatedList);
    }

    return (
        <div className="mb-5">
            <input onChange={e => filterBySearch(e)}/>
            <ul className="list-group">
                {filteredProducts.map((product, index) => {
                    return (
                        <li className="list-group-item" key={index}>{product.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchProduct;





