

import photo15 from '../assets/photo/img22.jpg'
import photo16 from '../assets/photo/img21.jpg'
import photo17 from '../assets/photo/img20.jpg'
import photo18 from '../assets/photo/img23.jpg'







import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



function Agent(){
    return(
        <div>
            <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                            <h1 className="mb-3">Property Agents</h1>
                            <p>A typical day might involve: time at the office, meeting with clients, staging and showing homes, and
                                scheduling appraisals and inspections. </p>
                        </div>

                        

                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team rounded overflow-hidden box2">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={photo15} alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            <a className="btn btn-square mx-1" href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a className="btn btn-square mx-1" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Elisha json</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team rounded overflow-hidden box2">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={photo16} alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            <a className="btn btn-square mx-1" href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a className="btn btn-square mx-1" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Jake donald</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team rounded overflow-hidden box2">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={photo17} alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            <a className="btn btn-square mx-1" href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a className="btn btn-square mx-1" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Emma Segev</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team rounded overflow-hidden box2">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={photo18} alt="" />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            <a className="btn btn-square mx-1" href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a className="btn btn-square mx-1" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Abhi Roy</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Agent