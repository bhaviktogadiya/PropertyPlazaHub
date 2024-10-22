

obj10 = { propertyBuilding : [
    {
        image: './photo/building-3.webp',
        heading: 'Rajhans Feriado',
        bhk: '5 BHK  for rent',
        address: 'in piplod, surat',
        price: '42,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '1,32,000',
        sqft: '4630 sqft ',
        sqm: '(430 sqm)',
        area: 'Super Built-up Area',
        bhk2: '5 BHK',
        Baths: '4 Baths',
        Highlight: 'Highlight :',
        Backup: 'full Power Backup',
        plus: '+3',
        address2 : "Best Residential buldings Society In Area.",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/building-3.webp',
        heading: 'Ashirwad Homes',
        bhk: '4 BHK  for rent',
        address: 'in vesu, surat',
        price: '33,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '1,00,000',
        sqft: '3700 sqft ',
        sqm: '(162 sqm)',
        area: 'Super Built-up Area',
        bhk2: '4 BHK',
        Baths: '3 Baths',
        Highlight: 'Highlight :',
        Backup: 'Private Garden',
        plus: '+3',
        address2 : "Surats most populer ashirwad Homes",
        Dealer: '3d ago',
        name : 'SIDDHI PROPERTY',
        contact : 'Contact'
    },

    {
        image: './photo/building-2.jpg',
        heading: 'Jogani Nagar 2',
        bhk: '3 BHK Villa for rent',
        address: 'in Anand Mahal road, surat',
        price: '30,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '90,000',
        sqft: '3500 sqft ',
        sqm: '(325 sqm)',
        area: 'Plot Area',
        bhk2: '3 BHK',
        Baths: '3 Baths',
        Highlight: 'Highlight :',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Its In Good Location And Good Locality.",
        Dealer: '6d ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/building-2.jpg',
        heading: 'Vrundavan Homes',
        bhk: '3 BHK for sell',
        address: 'in vesu, surat',
        price: '32,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '88,000',
        sqft: '2700 sqft ',
        sqm: '(260 sqm)',
        area: 'Super Built-up Area',
        bhk2: '3 BHK',
        Baths: '3 Baths',
        Highlight: 'Highlight :',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Situated in vesu surat,Happy home nandanvan 3 is well set",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/building-4.jpg',
        heading: 'Ayodhya Puram Homes',
        bhk: '5 BHK flat for rent',
        address: 'in Ankleshvar GIDC Bharuch, surat',
        price: '39,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '1,20,000',
        sqft: '4200 sqft ',
        sqm: '(180 sqm)',
        area: 'Plot Area',
        bhk2: '5 BHK',
        Baths: '4 Baths',
        Highlight: 'Highlight :',
        Backup: 'full Power Backup',
        plus: '+2',
        address2 : "Nearer To Railway Station And Market Area",
        Dealer: '8d ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },
    
] }


function displayData(allProduct){
    let str = ''
    allProduct.map((p) => {
        str += `<div class="b1">
                    <div class="row Apartments-bdr d-flex justify-content-around">
                        <div class="col-lg-3 col-md-5 col-sm-12">
                            <img src=${p.image} alt="" width="300px" height="305px">

                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-12">
                            <div class="row ">
                                <div class="col-lg-12">
                                    <h5>${p.heading}</h5>
                                    <p><span style="font-weight: 500;">${p.bhk} </span>${p.address}</p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <p><i class="fa-solid fa-indian-rupee-sign"></i><b class="bold">${p.price}</b>
                                            </p>
                                        </div>
                                        <div class="col-lg-3">
                                            <p><b>${p.sqft} </b>${p.sqm}<br>${p.area}</p>
                                        </div>
                                        <div class="col-lg-3">
                                            <p><b>${p.bhk}</b><br>${p.Baths}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <br>
                                    <p><b> Highlight :</b> <small class="bg-light p-2 rounded">3 Baths </small>&nbsp; <small
                                            class="bg-light p-2 rounded"> ${p.Backup}</small>&nbsp; <small
                                            class="bg-light p-2 rounded">${p.plus}</small></p>
                                    <p>${p.address2} </p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="">${p.Dealer} <br>${p.name}</p>
                                    </div>
                                    <div>
                                        <button class="px-4 py-1 mt-3 fw-bold bg-transparent rounded dec"><a
                                                href="./Contact.html"><i class="fa-solid fa-phone"></i> ${p.name}</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    })

    document.getElementById('productBuilding').innerHTML = str
}

displayData(obj10.propertyBuilding)