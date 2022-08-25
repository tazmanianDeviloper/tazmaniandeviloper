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
            <Header className={"home-header--div"}/>
            <Main className={"home-main--div"}/>
            <Footer className={"home-footer--div"}/>
        </div>
    )
}