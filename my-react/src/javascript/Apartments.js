import '../assets/css/home2.css'

export const obj5 = {
    Apartment : [
        {
            image: './photo/img31.jpg',
            heading: "Happy home nandanvan 3",
            bhk: '3 BHK flat for rent',
            address: 'in vesu, surat',
            price: '23,000',
            month: '/month ',
            Deposite: '+Deposite',
            price2: '75,000',
            sqft: '1700 sqft',
            sqm: '(158 sqm)',
            area: 'Super Built-up Area',
            bhk2: '3 BHK',
            Baths: '3 Baths',
            Highlight: 'Highlight :',
            Backup: 'full Power Backup',
            plus: '+1',
            address2 : 'Situated in vesu surat,Happy home nandanvan 3 is well set',
            Dealer: 'Dealer 2w ago',
            name : 'kamlesh Property',
            contact : 'Contact'

        },

        {
            image: './photo/img32.jpg',
            heading: "Swapanbhomi",
            bhk: '3 BHK flat for rent',
            address: 'in vesu, surat',
            price: '29,500',
            month: '/month',
            Deposite: '+Deposite',
            price2: ' 100,000',
            sqft: '2100 sqft',
            sqm: '(158 sqm)',
            area: 'Carpet Area',
            bhk2: '3 BHK',
            Baths: '3 Baths',
            Highlight: 'Highlight :',
            Backup: 'full Power Backup',
            plus: '+1',
            address2 : '3 bhk flat rent new apartment all amenities allout car parking',
            Dealer: 'Dealer 1mo ago ',
            name : 'kamlesh Property',
            contact : 'Contact'

        },

        {
            image: '../photo/img33.avif',
            heading: "Maa residancy",
            bhk: '3 BHK flat for rent',
            address: 'in vesu, surat',
            price: '23,000',
            month: '/month',
            Deposite: '+Deposite',
            price2: '75,000',
            sqft: '1700 sqft ',
            sqm: '(158 sqm)',
            area: 'Super Built-up Area',
            bhk2: '3 BHK',
            Baths: '3 Baths',
            Highlight: 'Highlight :',
            Backup: ' full Power Backup',
            plus: '+1',
            address2 : 'Situated in vesu surat,Happy home nandanvan 3 is well set ',
            Dealer: 'Dealer 2w ago',
            name : 'kamlesh Property',
            contact : 'Contact'

        },

        {
            image: './photo/img34.jpeg',
            heading: "Liberty elegance",
            bhk: '3 BHK flat for rent',
            address: 'in vesu, surat',
            price: '22,000',
            month: '/month ',
            Deposite: '+Deposite',
            price2: '2 months rent',
            sqft: '1090 sqft',
            sqm: '(158 sqm)',
            area: 'Super Built-up Area',
            bhk2: '3 BHK',
            Baths: '3 Baths',
            Highlight: 'Highlight :',
            Backup: 'Top floor',
            plus: '+2',
            address2 : 'Situated in vesu surat,Happy home nandanvan 3 is well set',
            Dealer: 'Dealer 2w ago',
            name : 'kamlesh Property',
            contact : 'Contact'

        },       


        {
            image: './photo/img35.jpg',
            heading: "Fourteen Point",
            bhk: '3 BHK flat for rent',
            address: 'in vesu, surat',
            price: ' 21,000',
            month: '/month ',
            Deposite: '+Deposite',
            price2: '75,000',
            sqft: '1215 sqft',
            sqm: '(113 sqm)',
            area: 'Super Built-up Area',
            bhk2: '2 BHK',
            Baths: '2 Baths',
            Highlight: 'Highlight :',
            Backup: 'full Power Backup',
            plus: '+1',
            address2 : 'A spacious 2bhk flat rent is available althan in happy home',
            Dealer: 'Dealer 2w ago',
            name : 'kamlesh Property',
            contact : 'Contact'

        },

        
    ]
}



// function displayData(allProduct){
//     let str = ''
//     allProduct.map((p) => {

//         str += `<div class="row Apartments-bdr d-flex justify-content-around mt-3 b1">
//                     <div class="col-lg-3 col-md-5 col-sm-12">
//                         <img src="${p.image}" alt="" width="300px" height="300px">
//                     </div>
//                     <div class="col-lg-7 col-md-6 col-sm-12">
//                         <div class="row ">
//                             <div class="col-lg-12">
//                                 <h5>${p.heading}</h5>
//                                 <p><span style="font-weight: 500;">${p.bhk} </span>${p.address}</p>
//                             </div>
//                             <div class="col-lg-12">
//                                 <div class="row">
//                                     <div class="col-lg-3">
//                                         <p><i class="fa-solid fa-indian-rupee-sign"></i><b>${p.price}</b>/month <br>${p.Deposite}
//                                             <i class="fa-solid fa-indian-rupee-sign" style="font-size: 13px;"></i> ${p.price2}
//                                         </p>
//                                     </div>
//                                     <div class="col-lg-3">
//                                         <p><b>${p.sqft} </b>${p.sqm}<br>${p.area}</p>
//                                     </div>
//                                     <div class="col-lg-3">
//                                         <p><b>${p.bhk2}</b><br>${p.Baths}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-12">
//                                 <br>
//                                 <p><b> Highlight :</b> <small class="bg-light p-2 rounded">${p.Baths}</small>&nbsp; <small
//                                         class="bg-light p-2 rounded"> full Power Backup</small>&nbsp; <small
//                                         class="bg-light p-2 rounded">${p.plus}</small></p>
//                                 <p>${p.address2}</p>
//                             </div>
                            
//                             <div class="d-flex justify-content-between">
//                                 <div>
//                                     <p>${p.Dealer}<br>${p.name}</p>
//                                 </div>
//                                 <div>
//                                     <button class="px-4 py-1 mt-3 fw-bold bg-transparent rounded dec"><a href="./Contact.html"><i
//                                                 class="fa-solid fa-phone"></i> ${p.contact}</a></button>
//                                 </div>
//                             </div>
                        
//                         </div>
//                     </div>
//                 </div>`

//     })

//     document.getElementById('productDataApartmnet').innerHTML = str
// }


// displayData(obj5.Apartment)









