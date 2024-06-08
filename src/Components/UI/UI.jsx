import "./UI.css";
import Username from "../UserName/UserName";
import Mail from "../Mail/Mail";
import FullName from "../FullName/FullName";
import DateOfBirth from "../DateOfBirth/DateOfBirth";
import Contact from "../Contact/Contact";
import Address from "../Address/Address";
import Image from "../Image/Image";

const UI = ({element}) => {

    return(
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="d-flex">
                        <div className="img">
                        <Image element={element} />
                        </div>
                        <div className="username">
                            <p className="d-flex">
                                <div>
                                    USERNAME : 
                                </div>
                                <div>
                                    <Username element={element} />
                                </div>
                            </p>
                            <p className="mail d-flex">
                                <div>
                                    MAIL : 
                                </div>

                                <div>
                                    <Mail element={element} />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="fullname">
                        <p className="padding d-flex">
                            <div>
                                FULL NAME :
                            </div>
                            <div>
                                <FullName element={element} />
                            </div>
                        </p>
                        <p className="padding d-flex">
                            <div>
                                DATE OF BIRTH : 
                            </div>
                            <div>
                                <DateOfBirth element={element} />
                            </div>
                        </p>
                        <p className="padding d-flex">
                            <div>
                                CONTACT : 
                            </div>
                            <div>
                                <Contact element={element} />
                            </div>
                        </p>
                        <p className="padding d-flex">
                            <div>
                                ADDRESS : 
                            </div>
                            <div>
                                <Address element={element} />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UI;
