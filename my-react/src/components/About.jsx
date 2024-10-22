
import Navbared from './Navbared'
import Search from './Search'



import photo2 from '../assets/photo/img1.jpg'
import photo3 from '../assets/photo/img2.jpg'
import Place from './Place'
import Contact from './Contact'
import Agent from './Agent'
import Footered from './Footered'




function About(){
    return(
        <div>
            <Navbared />
            
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="/home">Home</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="./Testimonial.html">Pages</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'gray', textTransform: 'uppercase', fontWeight:'bold'}} href="./about.html">About Us</a></li>
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
            <Place />
            <Contact />
            <Agent />
            <Footered />
                        
        </div>

    )
}

export default About