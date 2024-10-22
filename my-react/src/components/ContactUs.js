import Footered from "./Footered"
import Navbared from "./Navbared"
import Search from "./Search"




import photo2 from '../assets/photo/img1.jpg'
import photo3 from '../assets/photo/img2.jpg'







function ContactUs(){
    return(
        <div>
            <Navbared />
            
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="/home">Home</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="./Testimonial.html">Pages</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'gray', textTransform: 'uppercase', fontWeight:'bold'}} href="./about.html">Contact Us</a></li>
                            </ol>
                        </nav>
                    </div>


                    <div className="col col-md-6 col-12">
                        <div id="carouselExampleFade" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={photo2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={photo3} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                                <span className="visually-hidden ">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div> 

            <Search />

                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" style={{maxWidth: "600px"}}>
                            <h1 class="mb-3">Contact Us</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod
                                sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="row gy-4">
                                    <div class="col-md-6 col-lg-4 wow fadeIn">
                                        <div class="bg-light rounded p-3">
                                            <div class="d-flex align-items-center bg-white rounded p-3"
                                                style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                                <div style={{width: "45px", height: "45px"}}>
                                            
                                                    <i class="fa-solid fa-location-dot text-success pt-3 ps-3"></i>
                                                </div>
                                                <span>147/148 Street, Motavarachha,Surat</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 wow fadeIn">
                                        <div class="bg-light rounded p-3">
                                            <div class="d-flex align-items-center bg-white rounded p-3"
                                                style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                                <div class="icon me-3" style={{width: "45px", height: "45px"}}>
                                                    <i class="fa-solid fa-envelope text-success pt-3 ps-3"></i>
                                                </div>
                                                <span>propertyhub@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 wow fadeIn">
                                        <div class="bg-light rounded p-3">
                                            <div class="d-flex align-items-center bg-white rounded p-3"
                                                style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                                <div class="icon me-3" style={{width: "45px", height: "45px"}}>
                                                    <i class="fa-solid fa-phone  text-success pt-3 ps-3"></i>
                                                </div>
                                                <span>+91 8460819070</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 wow fadeInUp">
                                <iframe class="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0" style={{minHeight: "400px", border: 0}} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <p class="mb-4">The contact form is currently inactive. Get a functional and working contact
                                        form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and
                                        you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                    <form>
                                        <div class="row g-3">
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a message here" id="message"
                                                        style={{height: "150px"}}></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-success w-100 py-3" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











            <Footered />
        </div>
    )
}

export default ContactUs