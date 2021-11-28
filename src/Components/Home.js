import React, { Component } from "react";
import Student from "./Student";


const Home = () => {
    return(
        <div>
        <div>
        
        <Student name="Durjoy" id="1-3" cgpa="2.50" />
        <Student name="Rahim" id="2-1" cgpa="2.45" />
        <Student name="Karim" id="3-2" cgpa="3.99" />
        <Student name="Sabbir" id="4-3" cgpa="3.50" />
        </div>
        <div>
        </div>

        </div>
    )
}

export default Home;