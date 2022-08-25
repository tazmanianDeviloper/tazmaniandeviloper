import React from "react";
import {AiOutlineHome, AiOutlineMail, AiOutlineFileDone, AiOutlineUser, AiOutlineAppstoreAdd} from "react-icons/ai"

export default function Header(){

    return(
        <div className="header--div" >
            <div className={"profile--pic--div"}>
                <img className={"profile--pic"} src={require("../styles/images/profile_pic.jpg")} alt={""}/>
            </div>
            <button className={"home--button"}><AiOutlineHome/>Home</button>
            <button className={"about--button"}><AiOutlineUser/>About</button>
            <button className={"cv--button"}><AiOutlineFileDone/>CV</button>
            <button className={"projects--button"}><AiOutlineAppstoreAdd/>Projects</button>
            <button className={"contact--button"}><AiOutlineMail/>Contacts</button>
        </div>
    )
}