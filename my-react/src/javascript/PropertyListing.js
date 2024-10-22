import photo14 from '../assets/photo/img13.jpg'
import photo15 from '../assets/photo/img14.jpg'
import photo16 from '../assets/photo/img15.jpg'
import photo17 from '../assets/photo/img16.jpg'
import photo18 from '../assets/photo/img17.jpg'
import photo19 from '../assets/photo/img18.jpg'


export const obj2 = {
    PropertyListing : [
    {
        image: photo14,
        sell: "For sell",
        type: "Appartment",
        price: "₹2.95 cr",
        name: "Golden Urban House",
        address: "123 Street, vesu, surat",
        bed: "4 Bed",
        Sqft: "1100 Sqft",
        bath: "3 Bath",

    },

    {
        image: photo15,
        sell: "For rent",
        type: "Villa",
        price: "₹1.96 cr",
        name: "Nandanvan Bangalows",
        address: "149 Street, piplod, surat",
        bed: "3 Bed",
        Sqft: "1160 Sqft",
        bath: "3 Bath",

    },
    
    {
        image: photo16,
        sell: "For sell",
        type: "Farm house",
        price: "₹3.45 cr",
        name: "Angle Bungalows",
        address: "17 Street,punagam,surat",
        bed: "5 Bed",
        Sqft: "1500 Sqft",
        bath: "5 Bath",

    },

    {
        image: photo17,
        sell: "For rent",
        type: "Villa",
        price: "₹90 lakh",
        name: "Sai Samrudhi Residensi",
        address: "59 Street,kamrej,surat",
        bed: "5 Bed",
        Sqft: "1000 Sqft",
        bath: "3 Bath",

    },

    {
        image: photo18,
        sell: "For rent",
        type: "House",
        price: "₹2.05 cr",
        name: "Vrundavan Bungalows",
        address: "46 Street,Ashvini Kumar,surat",
        bed: "2 Bed",
        Sqft: "800 Sqft",
        bath: "2 Bath",

    },
    
    {
        image: photo19,
        sell: "For sell",
        type: "Villa",
        price: "₹3.10 cr",
        name: "Shantivan Row-House",
        address: "128 Street,Ankleshvar,surat",
        bed: "4 Bed",
        Sqft: "1000 Sqft",
        bath: "5 Bath",

    },

]}



// function displayData(allProduct){
//     let str = ''

//     allProduct.map((p) => {
//         str +=`<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-3">
//                     <div class="rounded box">
//                         <div class="position-relative">
//                             <a href="https://www.youtube.com/watch?v=TlMUknHQYLU"><img src="${p.image}" alt="img" class="img-fluid"></a>
//                             <div class="bg-success rounded text-white position-absolute top-0 start-0 m-4 py-1 px-3"><a href="#" class="text-white text-decoration-none">${p.sell}</a>
//                                 </div>
//                             <div
//                                 class="bg-white rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
//                                 ${p.type}</div>
//                         </div>
//                         <div class="p-4 pb-0">
//                             <h5 class="text-success mb-3">₹${p.price}</h5>
//                             <h4 class="mb-2">${p.name}</h4>
//                             <p><i class="fa-solid fa-location-dot me-2 text-success"></i>${p.address}</p>
//                         </div>
//                         <div class="d-flex border-top">
//                             <p class="flex-fill py-2 text-center  border-end"><i
//                                     class="fa-solid fa-bed text-success me-2"></i>${p.bed}</p>
//                             <p class="flex-fill py-2 text-center  border-end"><i
//                                     class="fa-solid fa-ruler-combined text-success me-2"></i>${p.Sqft}</p>
//                             <p class="flex-fill py-2 text-center"><i class="fa-solid fa-soap text-success me-2"></i>${p.bath}
//                             </p>
//                         </div>
//                     </div>

//                 </div>`
//     })
//     document.getElementById('productDataListing').innerHTML = str
// }


// displayData(obj2.PropertyListing)