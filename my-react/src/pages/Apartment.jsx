import { useNavigate, useParams } from "react-router-dom"
import { obj5 } from "../javascript/Apartments"
import '../assets/css/home2.css'
import { obj1 } from "../javascript/PropertyType";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Navbared from "../components/Navbared";





export function Apartment(){
    let[data,setData]=useState();
    const{id}=useParams();
    console.log(id,"apartment");
    console.log(obj1);

    useEffect(()=>{
        
        setData(obj1?.propertyTypes?.find(val=>val.id==id))
    },[])
    console.log(data);
     return(


        
        <>
        
        <Navbared />
        
       <h1>helo</h1>


          { data?.subData?.map((p) => (
        
            
                <div className="container">
                    <div class="row Apartments-bdr d-flex justify-content-around mt-3 b1">
                        <div class="col-lg-3 col-md-5 col-sm-12">
                            <img src={p.image} alt="" width="300px" height="300px" />  
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-12">
                            <div class="row ">
                                <div class="col-lg-12">
                                    <h5>{p.heading}</h5>
                                    <p><span style={{fontWeight: "500"}}>{p.bhk} </span>{p.address}</p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <p><i class="fa-solid fa-indian-rupee-sign"></i><b>{p.price}</b>/month <br />{p.Deposite}
                                                <i class="fa-solid fa-indian-rupee-sign" style={{fontSize: "13px"}}></i> {p.price2}
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
                                    <p><b> Highlight :</b> <small class="bg-light p-2 rounded">{p.Baths}</small>&nbsp; <small
                                            class="bg-light p-2 rounded"> full Power Backup</small>&nbsp; <small
                                            class="bg-light p-2 rounded">{p.plus}</small></p>
                                    <p>{p.address2}</p>
                                </div>
                                
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p>{p.Dealer}<br />{p.name}</p>
                                    </div>
                                    <div>
                                        <button class="px-4 py-1 mt-3 fw-bold bg-transparent rounded dec"><a href="./Contact.html"><i
                                                    class="fa-solid fa-phone"></i> {p.contact}</a></button>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>


            
            ))
        
        }
        </>
        

        
     )
}