

function Search(){
    return(
        <div>
              <div className="container-fluid bg-success mb-5" style={{padding: "35px"}}>
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

                </div>
        </div>
    )
}

export default Search