import React from "react";
import png from '../assets/img/png.PNG';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={png} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p><h3>WITHOUT MUSIC LIFE WOULD BE A MISTAKE</h3></p>
                            <Link to={"/login"} className="btnn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;