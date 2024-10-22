import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


import photo21 from '../assets/photo/img13.jpg'
import photo22 from '../assets/photo/img14.jpg'
import photo23 from '../assets/photo/img15.jpg'
import photo24 from '../assets/photo/img16.jpg'
import photo25 from '../assets/photo/img17.jpg'
import photo26 from '../assets/photo/img18.jpg'
import photo27 from '../assets/photo/news-1.jpg'


import '../assets/css/home2.css'






function Footered(){
    return(
        <div>
            
            <div className="container-fluid mt-5 text-white pt-5 vv">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-3 col-xl-3 col-md-6">
                                <h4 className="mb-4">Get In Touch</h4>
                                <p className="mb-2"><FontAwesomeIcon icon={faLocationDot} /> &nbsp; 147/148 Street,MotaVaracha,Surat</p>
                                <p className="mb-2"><FontAwesomeIcon icon={faPhone} /> &nbsp;+91 8460819070</p>
                                <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} /> &nbsp;propertyhub.gmail.com</p>
                                <div className="pt-3">
                                    <a href="https://twitter.com/i/flow/login" className="btn btn-outline-light  me-2"  style={{borderRadius:'50%'}}>
                                        <FontAwesomeIcon icon={faTwitter} />   </a>
                                    <a href="https://www.facebook.com/" className="btn btn-outline-light me-2" style={{borderRadius:'50%'}}>
                                        <FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="https://www.youtube.com/watch?v=FNsCWDip8lg" className="btn btn-outline-light me-2" style={{borderRadius:'50%'}}>
                                        <FontAwesomeIcon icon={faYoutube} /></a>
                                    <a href="https://in.linkedin.com/" className="btn btn-outline-light me-2" style={{borderRadius:'50%'}}>
                                        <FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-xl-3 col-md-6 mt-5 mt-md-0 mt-lg-0">
                                <h4 className="mb-4 ">Quick Links</h4>
                                <p className="mb-2"> <span className="fw-bold"> &gt; </span><a href="./about.html"
                                        className="text-white text-decoration-none">About Us</a></p>
                                <p className="mb-2"> <span className="fw-bold"> &gt; </span><a href="./Contact.html"
                                        className="text-white text-decoration-none">Contact Us</a></p>
                                <p className="mb-2"> <span className="fw-bold"> &gt; </span><a href="#"
                                        className="text-white text-decoration-none">Our Services </a></p>
                                <p className="mb-2"> <span className="fw-bold"> &gt; </span><a href="#"
                                        className="text-white text-decoration-none">Privacy Policy</a></p>
                                <p className="mb-2"> <span className="fw-bold"> &gt; </span><a href="#"
                                        className="text-white text-decoration-none">terms & condition</a></p>
                            </div>

                            <div className="col-lg-3 col-xl-3 col-md-6  mt-5 mt-lg-0">
                                <h4 className="mb-4">Photo Gallery</h4>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={photo21} alt="img" className="img-fluid rounded nn" />
                                    </div>

                                    <div className="col-4">
                                        <img src={photo22} alt="img" className="img-fluid rounded nn" />
                                    </div>

                                    <div className="col-4">
                                        <img src={photo23} alt="img" className="img-fluid rounded nn" />
                                    </div>

                                    <div className="col-4 mt-3">
                                        <img src={photo24} alt="img" className="img-fluid rounded nn" />
                                    </div>

                                    <div className="col-4 mt-3">
                                        <img src={photo25} alt="img" className="img-fluid rounded nn" />
                                    </div>

                                    <div className="col-4 mt-3">
                                        <img src={photo26} alt="img" className="img-fluid rounded nn" />
                                    </div>


                                </div>
                            </div>

                            <div className="col-lg-3 col-xl-3 col-md-6  mt-5  mt-lg-0">
                                <h4 className="mb-4">Newsletter</h4>
                                <p>Best Home News</p>
                                <a href="https://www.guptasen.com/do-newspaper-property-ads-work/"><img src={photo27}
                                        width="225px" height="150px" /></a>
                            </div>
                        </div>
                    </div>


                    <div className="row border-top pt-4 m-4">


                        <div className="col-lg-6  col-xl-6 col-12  mt-3 mt-md-0 mt-lg-0">
                            <div className="d-flex">
                                <p className="ms-4 border-end pe-2">Home</p>
                                <p className="ms-4 border-end pe-2">Cookies</p>
                                <p className="ms-4 border-end pe-2">Help</p>
                                <p className="ms-4">FQAS</p>
                            </div>
                        </div>
                    </div>


                </div> 

        </div>
    )
}

export default Footered