import React from "react";

export default function Footer(){
    return(
        <div className={"footer--div"}>
            <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                <img
                    alt="Creative Commons License"
                    src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
                />
            </a>
            <br/>
            <p>
                This work is licensed under a{' '}
                <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                    Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                </a>
            </p>
        </div>

    )
}