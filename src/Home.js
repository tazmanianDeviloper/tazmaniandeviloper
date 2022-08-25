import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../src/styles.css"
import "./styles/header_styles.css"
import "./styles/main_styles.css"
import "./styles/footer_styles.css"

export default function Home(){
    return(
        <div className={"home--div"}>
            <div className={"home-header--div"}>
                <Header/>
            </div>
            <div className={"home-main--div"}>
                <Main/>
            </div>
            <div className={"home-footer--div"}>
                <Footer/>
            </div>
        </div>
    )
}