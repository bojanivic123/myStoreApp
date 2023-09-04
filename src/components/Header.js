import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/"}><button>Home</button></Link></li>
                    <li className="nav-item"><Link to={"/customers"}><button>Customers</button></Link></li>
                    <li className="nav-item"><Link to={"/products"}><button>Products</button></Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;














