import { faBath, faBed, faLocationDot, faRulerCombined } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { obj2 } from '../javascript/PropertyListing'



function PropertyListing(){
    return(
        <div>
            <div className="container-fluid mt-5 pt-5">
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
                                                    {/* <i class="fa-solid fa-soap text-success me-2"></i> */}
                                                </div>
                                            </div>
                        
                                        </div>
                                )
                            })
                        }
                    </div>
            </div>
            
           
        </div>
    )
}

export default PropertyListing