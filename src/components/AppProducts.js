import { useState } from "react";
import Product from "./Product";
import SearchProduct from "./SearchProduct";

const AppProducts = () => {
    const [products, setProducts] = useState([{name: "chocolate", amount: 200}, {name: "soap", amount: 50}, {name: "bottle", amount: 100}, {name: "apple", amount: 30}, {name: "paper", amount: 400}, {name: "pencil", amount: 15}]);

    const incrementAmount = index => {
        setProducts(previousValue => previousValue.map((product, id) => {
            if (id === index) {
                return {...product, amount: product.amount + 1}
            }
            return product;
        }));
    }  

    const decrementAmount = index => {
        setProducts(previousValue => previousValue.map((product, id) => {
            if (id === index && product.amount > 0) {
                return {...product, amount: product.amount - 1}   
            }
            return product;
        }));
    } 
    
    return (
        <div>
            <div>
                <SearchProduct 
                products={products}
                />
            </div>
            <ul className="list-group">
            {products.map((product, index) => {
                return (
                    <Product 
                    key={index}
                    name={product.name}
                    amount={product.amount}
                    incrementAmount={incrementAmount}
                    decrementAmount={decrementAmount}
                    index={index}
                    />
                )
            })}
            </ul>
        </div>
    )
}

export default AppProducts;




