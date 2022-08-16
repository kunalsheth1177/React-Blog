import "./sidebar.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
                src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
            />
            <p>
                Hi I am Kunal Sheth of DEPSTAR-CSE and this my project for 
                react js and mongo db for 2nd year intership
            </p>
        </div>
        <div className="siderItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c) =>(
                <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            ))}
         </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
            </div>
        </div>
    </div>
  )
}
