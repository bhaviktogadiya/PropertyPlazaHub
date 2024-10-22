
import { Link } from 'react-router-dom'
import { obj1 } from '../javascript/PropertyType'
import { obj2 } from '../javascript/PropertyListing'



function PropertyType(){
    return(
        <div>
             <div className="container-fluid">
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

                </div>
        </div>
    )
}


export default PropertyType