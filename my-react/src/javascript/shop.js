const obj13 = { propertyShop : [
    {
        image: './photo/shop-1.png',
        heading: "Royal Arcade",   
        address: 'situated in vesu, surat',
        price: '1.7 cr',       
        sqft: '2226 sqft',
        sqm: '(498 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        ac: '1 ton 2AC',
        Backup: 'Private Parking',
        plus: '+3',
        address2 : "Surat's Most Populer Mall,Royal Arcade",
        Dealer: '3d ago',
        name : 'SIDDHI PROPERTY',
        contact : 'Contact'
    },

    {
        image: './photo/shop-2.png',
        heading: "ShivDhara Mall",   
        address: 'Situated in Anand Mahal road, surat',
        price: '35 lakh',
        sqft: '596 sqft',
        sqm: '(325 sqm)',
        area: 'Plot Area',
        Highlight: 'Highlight :',
        ac: '1.5 Ton AC',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Surat's Most Populer Mall,Royal Arcade",
        Dealer: '3d ago',
        name : 'SIDDHI PROPERTY',
        contact : 'Contact'
    },

    {
        image: './photo/shop-3.png',
        heading: "Paladium Mall",   
        address: 'Situated in vesu, surat',
        price: '60 lakh',
        sqft: '700 sqft',
        sqm: '(260 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        ac: '1.5 ton Ac and one 42-inch big smart Tv',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "With best chipest price in Pladium Mall",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/shop-4.png',
        heading: "Raghuvir Scarlett",   
        address: 'Sitiatedin Ankleshvar GIDC Bharuch, surat',
        price: '1.99 cr',
        sqft: '2500 sqft',
        sqm: '(486 sqm)',
        area: 'Plot Area',
        Highlight: 'Highlight :',
        ac: 'Luxurias Shops',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Nearer To Market Area",
        Dealer: '8d ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/img45.jpg',
        heading: "Raghuvir Scarlett",
        address: 'Situated in piplod, surat',
        price: '1.45 cr',
        sqft: '2400 sqft',
        sqm: '(430 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        ac: 'Private Parking',
        Backup: 'full Power Backup',
        plus: '+3',
        address2 : "Best Residential Bunglow Society In Area.",
        Dealer: '2w ago',
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
                                    <p><span style="font-weight: 500;">${p.address}</p>
                                </div>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <p><i class="fa-solid fa-indian-rupee-sign"></i><b style="font-size: 38px;">${p.price}</b></p>
                                        </div>  
                                        <div class="col-lg-3">
                                            <p><b>${p.sqft} </b>${p.sqm}<br>${p.area}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <br>
                                    <p><b> ${p.Highlight}</b> <small class="bg-light p-2 rounded">${p.ac}</small>&nbsp;
                                        <small class="bg-light p-2 rounded"> ${p.Backup}</small>&nbsp; <small
                                            class="bg-light p-2 rounded">${p.plus}</small></p>
                                    <p>${p.address2}</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="">${p.Dealer}<br>${p.name}</p>
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

    document.getElementById('productShop').innerHTML = str
}

displayData(obj13.propertyShop)