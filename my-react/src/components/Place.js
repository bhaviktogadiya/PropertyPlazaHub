
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photo12 from '../assets/photo/img12.jpg'
import photo13 from '../assets/photo/img14.jpg'

import { faCheck } from '@fortawesome/free-solid-svg-icons'


function Place(){
    return(
        <div>
            
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
                                <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Tempor erat elitr rebum at clita</p>
                                <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Aliqu diam amet diam et eos</p>
                                <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Clita duo justo magna dolore erat amet</p>

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
                                    <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Tempor erat elitr rebum at clita</p>
                                    <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Aliqu diam amet diam et eos</p>
                                    <p><FontAwesomeIcon icon={faCheck} className="me-3 text-success" />Clita duo justo magna dolore erat amet</p>

                                </div>
                            </div>

                            <div className="col col-xl-6 col-lg-6 col-12 ">
                                <img src={photo13} alt="img" className="img-fluid w-100" />

                            </div>
                        </div>
                    </div>
                </div>


                
            
        </div>
    )
}

export default Place