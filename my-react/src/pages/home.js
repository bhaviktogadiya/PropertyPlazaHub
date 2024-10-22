import '../assets/css/home2.css'
// import { Apartment } from './Apartment'
// import { obj1 } from '../javascript/PropertyType'
// import { obj2 } from '../javascript/PropertyListing'


import Navbared from '../components/Navbared'
import Search from '../components/Search'
import Footer from '../components/Footered'
import Agent from '../components/Agent'
import Display from '../components/Display'








// import photo2 from '../assets/photo/img1.jpg'
// import photo3 from '../assets/photo/img2.jpg'

// import photo12 from '../assets/photo/img12.jpg'
// import photo13 from '../assets/photo/img14.jpg'
import { Link, useNavigate } from 'react-router-dom'


// import photo
// import photo14 from '../assets/photo/img19.jpg'

// import photo15 from '../assets/photo/img22.jpg'
// import photo16 from '../assets/photo/img21.jpg'
// import photo17 from '../assets/photo/img20.jpg'
// import photo18 from '../assets/photo/img23.jpg'
import photo19 from '../assets/photo/img24.jpg'
import photo20 from '../assets/photo/img25.jpg'
// import photo21 from '../assets/photo/img13.jpg'
// import photo22 from '../assets/photo/img14.jpg'
// import photo23 from '../assets/photo/img15.jpg'
// import photo24 from '../assets/photo/img16.jpg'
// import photo25 from '../assets/photo/img17.jpg'
// import photo26 from '../assets/photo/img18.jpg'
// import photo27 from '../assets/photo/news-1.jpg'




// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faBed } from '@fortawesome/free-solid-svg-icons'
// import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
// import { faBath } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Place from '../components/Place'
import PropertyListing from '../components/PropertyListing'
import PropertyType from '../components/PropertyTypes'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



function Home (){

    const navigate=useNavigate();
    


        return(
            <>

                {/* <div className='App'> 
                    <Header /> 
                </div> */}

               
                <Navbared />
                {/* <UncontrolledExample /> */}
                <Display />
                <Search />   


                {/* Navbar start  */}
               


                {/* <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">

                                <a href="#" className="navbar-brand d-flex align-items-center">
                                    <div className="icon p-2 me-2">
                                        <img className="img-fluid" src={photo1} alt="img" style={{width: '30px', height: '30px'}} />
                                    </div>
                                    <h1 className="m-0 text-success">Property Plaza Hub</h1>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link text-success" aria-current="page" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="./about.html">About</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Property
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="Property List.html">Property List</a></li>
                                                <li><a className="dropdown-item" href="Property Type.html">Property Type</a></li>
                                                <li><a className="dropdown-item" href="Property Agent.html">Property Agent</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="Testimonial.html">Testimonial</a></li>
                                                <li><a className="dropdown-item"
                                                        href="https://www.moneycontrol.com/news/tags/real-estate.html">News</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" aria-disabled="true" href="Contact.html">Contact</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <div className='App'> 
                                            <Header /> 
                                        </div>
                                        <button className="btn btn-success " type="submit"><a href="./submitPr.html"
                                                style={{color: 'white', textDecoration: 'none'}}>Submit Property</a></button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div> */}

                {/* Nabar End  */}






                {/* <div className="container-fluid header bg-white p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-6 p-5 mt-lg-5">
                            <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>Find A <span className="text-success">Perfect
                                    Home</span> To
                                Live With Your Family</h1>
                            <p className="mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                                sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="#" className="btn btn-success py-2 px-5" style={{fontSize: '20px'}}>Get Start's</a>
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
                </div> */}




                {/* <div className="container-fluid bg-success mb-5" style={{padding: "35px"}}>
                    <div className="container">

                        <div className="row g-2">

                            <div className="col col-12 col-lg-3 col-xl-3">
                                <select className="form-select border-0 py-3">
                                    <option selected>Selected keyword</option>
                                </select>
                            </div>

                            <div className="col col-12 col-lg-3 col-xl-3">
                                <select className="form-select border-0 py-3">
                                    <option selected>Property Type</option>
                                    <option value="1">Flat</option>
                                    <option value="2">Home</option>
                                    <option value="3">Appartment</option>
                                    <option value="4">Villa</option>
                                    <option value="5">Office</option>
                                </select>
                            </div>

                            <div className="col col-12 col-lg-3 col-xl-3">
                                <select className="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Surat</option>
                                    <option value="2">Navsari</option>
                                    <option value="3">Vesu</option>
                                    <option value="4">Rajkot</option>
                                    <option value="5">Amreli</option>
                                </select>
                            </div>

                            <div className="col col-12 col-lg-3 col-xl-3">
                                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                            </div>

                        </div>
                    </div>

                </div> */}



                {/* propertyTypes start  */}


                <PropertyType />



                {/* <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-6 col-lg-6 text-center mx-auto mb-5">
                                <h1 className="mb-3">Property Types</h1>
                                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                                    eirmod
                                    sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                            </div>
                        </div>


                        <div className="row">
                            {
                                obj1.propertyTypes.map((p) => {
                                    return(
                                    
                                        <div class="col-xl-3 col-lg-3 col-sm-6">
                                            <Link class="nav-link text-center rounded p-3 Properties ms-3 mt-5"  to={`/Apartment/${p.id}`}>
                                                <div class="rounded p-4">
                                                    <img src={p.image} alt="img" class="mb-3" />
                                                    <h5>{p.heading}</h5>
                                                    <span>{p.prtes}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )      
                                    
                                })
                            }
                        </div>

                    </div>

                </div> */}


                {/* propertyTypes end  */}



            
                {/* Perfect Property start  */}



                <Place />

{/* 
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col col-xl-6 col-lg-6 cl-12">
                                <div className="pe-0">
                                    <img src={photo12} alt="img" className="img-fluid w-100" />
                                </div>
                            </div>

                            <div className="col col-xl-6 col-lg-6 col-12">
                                <h1 className="mb-4 text-success">#1 Place To Find The Perfect Property</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                    eos. Clita erat
                                    ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <p><i className="fa-solid fa-check me-3 text-success"></i>Tempor erat elitr rebum at clita</p>
                                <p><i className="fa-solid fa-check me-3 text-success"></i>Aliqu diam amet diam et eos</p>
                                <p><i className="fa-solid fa-check me-3 text-success"></i>Clita duo justo magna dolore erat amet</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col col-xl-6 col-lg-6 cl-12">
                                <div className="pe-0">
                                    <h1 className="mb-4 text-success">#2 Place To Find The Perfect Property</h1>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                        diam et
                                        eos. Clita erat
                                        ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                    </p>
                                    <p><i className="fa-solid fa-check me-3 text-success"></i>Tempor erat elitr rebum at clita</p>
                                    <p><i className="fa-solid fa-check me-3 text-success"></i>Aliqu diam amet diam et eos</p>
                                    <p><i className="fa-solid fa-check me-3 text-success"></i>Clita duo justo magna dolore erat amet</p>

                                </div>
                            </div>

                            <div className="col col-xl-6 col-lg-6 col-12 ">
                                <img src={photo13} alt="img" className="img-fluid w-100" />

                            </div>
                        </div>
                    </div>
                </div> */}



                {/* Perfect Property end  */}





                {/* Property Listing start  */}


                <PropertyListing />


                {/* <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="text-start mx-auto mb-5">
                                <h1 className="mb-3">Property Listing</h1>
                                <p data-aos="zoom-in-up">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem
                                    kasd vero ipsum sit
                                    eirmod sit diam justo sed rebum.</p>
                            </div>
                        </div>

                    </div>




                    <div className="row">

                        {
                            obj2?.PropertyListing?.map((p) => {
                                return(
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-3">
                                            <div class="rounded box">
                                                <div class="position-relative">
                                                    <a href="https://www.youtube.com/watch?v=TlMUknHQYLU"><img src={p.image} alt="img" class="img-fluid" /></a>
                                                    <div class="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a href="#" class="text-white text-decoration-none">{p.sell}</a>
                                                        </div>
                                                    <div
                                                        class="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                        {p.type}</div>
                                                </div>
                                                <div class="p-4 pb-0">
                                                    <h5 class="text-success mb-3">{p.price}</h5>
                                                    <h4 class="mb-2">{p.name}</h4>
                                                    <p> <FontAwesomeIcon icon={faLocationDot} /> {p.address}</p>
                                                </div>
                                                <div class="d-flex border-top">
                                                    <p class="flex-fill py-2 text-center  border-end "> <FontAwesomeIcon icon={faRulerCombined} /> {p.Sqft}</p>
                                                    <p class="flex-fill py-2 text-center  border-end"> <FontAwesomeIcon icon={faBed} /> {p.bed}</p>

                                                    <p class="flex-fill py-2 text-center"> <FontAwesomeIcon icon={faBath} /> {p.bath} </p>
                                                   
                                                </div>
                                            </div>
                        
                                        </div>
                                )
                            })
                        }


                    </div>

                </div> */}










                        {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=TlMUknHQYLU"><img src="./photo/img13.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-white text-decoration-none">For sell</a>
                                    </div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">₹2.95 cr</h5>
                                    <h4 className="mb-2">Golden Urban House For Sell</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>123 Street, vesu, surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>4 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>1100 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>3 Bath
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=gGzGT5pqq0k"><img src="./photo/img14.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-white text-decoration-none">For rent</a>
                                    </div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">₹1.96 cr</h5>
                                    <h4 className="mb-2">Nandanvan Bangalows</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>149 Street, piplod, surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>3 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>1160 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>3 Bath
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=VZzYgR4J7Co"><img src="./photo/img15.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-white text-decoration-none">For sell</a>
                                    </div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Farm house</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">₹3.45 cr</h5>
                                    <h4 className="mb-2">Angle Bungalows</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>17 Street,punagam,surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>5 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>1500 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>5 Bath
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=kBbj8LiUoEg"><img src="./photo/img16.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-decoration-none text-white">For
                                            rent</a></div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">90 lakh</h5>
                                    <h4 className="mb-2">Sai Samrudhi Residensi</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>59 Street,kamrej,surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>5 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>1000 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>3 Bath
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=R2fDRObS6OQ"><img src="./photo/img17.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-white text-decoration-none">For
                                            rent</a></div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        House</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">₹2.05 cr</h5>
                                    <h4 className="mb-2">Vrundavan Bungalows</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>46 Street,Ashvini Kumar,surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>2 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>800 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>2 Bath
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 mt-3">
                            <div className="rounded box">
                                <div className="position-relative">
                                    <a href="https://www.youtube.com/watch?v=vTI9F525Pj8"><img src="./photo/img18.jpg" alt="img"
                                            className="img-fluid" /></a>
                                    <div className="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a
                                            href="#" className="text-white text-decoration-none">For
                                            sell</a></div>
                                    <div
                                        className="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-success mb-3">₹3.10 cr</h5>
                                    <h4 className="mb-2">Shantivan Row-House</h4>
                                    <p><i className="fa-solid fa-location-dot me-2 text-success"></i>128 Street,Ankleshvar,surat</p>
                                </div>
                                <div className="d-flex border-top">
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-bed text-success me-2"></i>4 Bed</p>
                                    <p className="flex-fill py-2 text-center  border-end"><i
                                            className="fa-solid fa-ruler-combined text-success me-2"></i>1000 Sqft</p>
                                    <p className="flex-fill py-2 text-center"><i className="fa-solid fa-soap text-success me-2"></i>3 Bath
                                    </p>
                                </div>
                            </div>

                        </div> */}

                        {/* <div className="col-12 text-center mt-5">
                            <a className="btn btn-success py-3 px-5" href="./Property List.html">Browse More Property</a>
                        </div> */}

                 




                {/* Contact start  */}

                

                {/* <div className="container-fluid mt-5">
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
                </div> */}

            
                {/* Contact end  */}
                


                {/* Property Agents start  */}

                <Agent />

                {/* <div className="container-xxl py-5">
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
                </div> */}


                {/* Property Agents end */}
                



                {/* Our Clients start  */}

                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mx-auto" style={{maxWidth: "600px"}}>
                                <h1 className="mb-3">Our Clients Say!</h1>
                                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                                    eirmod
                                    sit. Ipsum diam justo sed rebum vero dolor duo.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-5 d-flex justify-content-around">

                            <div className="col-lg-6 col-xl-6 goli rounded p-3" style={{maxWidth: "550px"}}>
                                <div className="bg-white gol p-3">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet
                                        diam
                                        stet. Est stet ea lorem amet est kasd kasd erat eos
                                    </p>
                                    <div className="d-flex">
                                        <img src={photo19} alt="img" style={{width: "45px", height: "45px"}}
                                            className="img-fluid rounded" />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Jack Denial</h6>
                                            <p>Profession</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6 col-xl-6 rounded goli p-3 mt-3 mt-lg-0" style={{maxWidth: "550px"}}>
                                <div className="bg-white gol p-3 ">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet
                                        diam
                                        stet. Est stet ea lorem amet est kasd kasd erat eos
                                    </p>
                                    <div className="d-flex">
                                        <img src={photo20} alt="img" style={{width: "45px", height: "45px"}}
                                            className="img-fluid rounded" />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Pankaj Vadi</h6>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                {/* Our Clients end  */}




                {/* footer start  */}


                <Footer />

                {/* <div className="container-fluid mt-5 text-white pt-5 vv">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-3 col-xl-3 col-md-6">
                                <h4 className="mb-4">Get In Touch</h4>
                                <p className="mb-2"><FontAwesomeIcon icon={faLocationDot} /> &nbsp; 147/148 Street,MotaVaracha,Surat</p>
                                <p className="mb-2"><FontAwesomeIcon icon={faPhone} /> &nbsp;+91 8460819070</p>
                                <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} /> &nbsp;propertyhub.gmail.com</p>
                                <div className="pt-3">
                                    <a href="https://twitter.com/i/flow/login" className="btn btn-outline-light ro me-2">
                                        <FontAwesomeIcon icon={faTwitter} />   </a>
                                    <a href="https://www.facebook.com/" className="btn btn-outline-light ro me-2">
                                        <FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="https://www.youtube.com/watch?v=FNsCWDip8lg" className="btn btn-outline-light ro me-2">
                                        <FontAwesomeIcon icon={faYoutube} /></a>
                                    <a href="https://in.linkedin.com/" className="btn btn-outline-light ro me-2">
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
                            <div className="d-flex justify-content-end">
                                <p className="ms-4 border-end pe-2">Home</p>
                                <p className="ms-4 border-end pe-2">Cookies</p>
                                <p className="ms-4 border-end pe-2">Help</p>
                                <p className="ms-4">FQAS</p>
                            </div>
                        </div>
                    </div>


                </div> */}

                {/* footer start  */}

                
            </>
        )
        
}
    
export default Home