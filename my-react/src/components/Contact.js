import { faCalendar, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import photo14 from '../assets/photo/img19.jpg'





function Contact(){
    return(
        <div>
            <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="rounded p-3 goli">
                            <div className="bg-white rounded p-3 gol">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-xl-6">
                                        <img src={photo14} alt="img" className="img-fluid" />
                                    </div>

                                    <div className="col-lg-6 col-xl-6">
                                        <h1>Contact With Our Certified Agent</h1>
                                        <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam
                                            just sed vero dolor duo.</p>

                                        <a href="./Contact.html" className="btn btn-success py-3 px-4 me-2">
                                        <FontAwesomeIcon icon={faPhone} /> Make A Call
                                        </a>
                                        <a href="./Contact.html" className="btn btn-success py-3 px-5 mt-3 mt-sm-0 mt-lg-0 mt-md-0">
                                        <FontAwesomeIcon icon={faCalendar} /> Get Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact