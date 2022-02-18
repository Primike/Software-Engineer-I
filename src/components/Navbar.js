import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className ='header'>
            <h4 className = "title"> Dr Chungus NYC guide</h4>
            <nav className = "tabs">
                <ul className = "nav">
                    <li className = 'links'><Link to="/">Home</Link></li>
                    <li className = 'links'><Link to="/events">Events</Link></li>
                    <li className = 'links'><Link to="/extras">Extras</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar