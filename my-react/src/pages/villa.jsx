import { obj6 } from "../javascript/villa"

export function villa(){
    return(
        obj6.propertyVill.map((p) => {
        
            <div class="b1">
                <div class="row Apartments-bdr d-flex justify-content-around">
                    <div class="col-lg-3 col-md-5 col-sm-12">
                        <img src={p.image} alt="" width="300px" height="305px" />
    
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row ">
                            <div class="col-lg-12">
                                <h5>{p.heading}</h5>
                                <p><span style="font-weight: 500;">{p.bhk} </span>{p.address}</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <p><i class="fa-solid fa-indian-rupee-sign"></i><b> {p.price}</b>{p.month} <br />{p.Deposite}
                                            <i class="fa-solid fa-indian-rupee-sign" style="font-size: 13px;"></i> {p.price2}
                                        </p>
                                    </div>
                                    <div class="col-lg-3">
                                        <p><b>{p.sqft} </b>{p.sqm}<br />{p.area}</p>
                                    </div>
                                    <div class="col-lg-3">
                                        <p><b>{p.bhk2}</b><br />{p.Baths}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <br />
                                <p><b> {p.Highlight}</b> <small class="bg-light p-2 rounded">{p.bhk2} </small>&nbsp; <small
                                        class="bg-light p-2 rounded"> {p.Backup}</small>&nbsp; <small
                                        class="bg-light p-2 rounded">{p.plus}</small></p>
                                <p>{p.address2}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="">{p.Dealer} <br />{p.name}</p>
                                </div>
                                <div>
                                    <button class="px-4 py-1 mt-3 fw-bold bg-transparent rounded dec"><a
                                            href="./Contact.html"><i class="fa-solid fa-phone"></i> {p.contact}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    )

}