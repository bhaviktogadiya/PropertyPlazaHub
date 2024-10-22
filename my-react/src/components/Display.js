


// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../assets/photo/img1.jpg';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;




















import photo2 from '../assets/photo/img1.jpg'
import photo3 from '../assets/photo/img2.jpg'




function Display(){
    return(
        <div>
        
            
            <div className="container-fluid header bg-white p-0">
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
            </div> 

        </div>
    )
}

export default Display