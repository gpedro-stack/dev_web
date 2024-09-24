import { Link,BrowserRouter,Router, Route, Routes } from "react-router-dom";
import { FaBookmark} from "react-icons/fa6";
import { BsHouseDoorFill } from "react-icons/bs";


function Navbar(){
    

    

    return(
        <nav className="navbar-container">
            
            <BsHouseDoorFill/><Link to='/' >Home</Link>
            
            <FaBookmark/><Link to='bookmarks' >Bookmarks</Link>
        </nav>
    );
}


export default Navbar