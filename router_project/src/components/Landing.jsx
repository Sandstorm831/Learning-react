import { Link, Outlet } from "react-router-dom";

export default function Landing(){
    const id = 1;
    return <div>
        Landing page
        <div>
            <Outlet />
        </div>
        <button><Link to={"/dashboard"}>Go to DashBaord</Link></button><button><Link to={"/"}>Go to Home</Link></button><button><Link to={`/contacts/${id}`}>To Contacts</Link></button>
        
    </div>
}