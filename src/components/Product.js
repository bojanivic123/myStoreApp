const Product = ({name, amount, incrementAmount, decrementAmount, index}) => {
    return (
        <li className="list-group-item">{name} {amount} <button onClick={() => incrementAmount(index)}>+</button> <button onClick={() => decrementAmount(index)}>-</button></li> 
    )
}

export default Product;



