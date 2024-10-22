

obj9 = { propertyOffice : [
    {
        image: './photo/img36.avif',
        heading: "Avadh copper Stone",
        rent: 'This office for rent ',
        address: 'in vesu, surat',
        price: '23,500',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '75,000',
        sqft: '1890 sqft',
        sqm: '(176 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        full : 'Full window',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Situated in vesu surat, Avadh copper Stone is well set",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/img37.jpg',
        heading: "Rajhansh",
        rent: 'This office for rent ',
        address: 'in vesu, surat',
        price: '29,500',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '1,00,000',
        sqft: '2100 sqft',
        sqm: '(158 sqm)',
        area: 'Carpet Area',
        Highlight: 'Highlight :',
        full : 'fully window',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "new office all amenities allout car parking",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/img38.webp',
        heading: "Royal plaza",
        rent: 'This office for rent ',
        address: 'in vesu, surat',
        price: '23,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '75,000',
        sqft: '1700 sqft',
        sqm: '(158 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        full : 'Full AC.',
        Backup: 'full Power Backup',
        plus: '+1',
        address2 : "Situated in vesu surat,Royal plaza is well set",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/img39.webp',
        heading: "Silver plaza",
        rent: 'This office for rent ',
        address: 'in vesu, surat',
        price: '22,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '78,000',
        sqft: '1090 sqft',
        sqm: '(158 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        full : 'North-East Facing',
        Backup: 'Top floor',
        plus: '+2',
        address2 : "Situated in vesu surat,Royal plaza is well set",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },

    {
        image: './photo/img40.jpg',
        heading: "Silver plaza",
        rent: 'This office for rent ',
        address: 'in vesu, surat',
        price: '21,000',
        month: '/month ',
        Deposite: '+Deposite',
        price2: '75,000',
        sqft: '1215 sqft',
        sqm: '(113 sqm)',
        area: 'Super Built-up Area',
        Highlight: 'Highlight :',
        full : 'Full AC.',
        Backup: 'full Power Backup',
        plus: '+3',
        address2 : "A rent is available althan in Royal arcade",
        Dealer: '2w ago',
        name : 'kamlesh Property',
        contact : 'Contact'
    },
] }


function displayData(allProduct){
    let str = ''
    allProduct.map((p) => {
        str += `<div class="row Apartments-bdr d-flex justify-content-around mt-3 b1" >
             
                    <div class="col-lg-3 col-md-5 col-sm-12">
                        <img src=${p.image} alt="" width="300px" height="300px">
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row ">
                            <div class="col-lg-12">
                                <h5>${p.heading}</h5>
                                <p><span style="font-weight: 500;">${p.rent} </span>${p.address}</p>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <p><i class="fa-solid fa-indian-rupee-sign"></i><b> ${p.price}</b>${p.month} <br>${p.Deposite}
                                            <i class="fa-solid fa-indian-rupee-sign" style="font-size: 13px;"></i> ${p.price2}
                                        </p>
                                    </div>
                                    <div class="col-lg-3">
                                        <p><b>${p.sqft} </b>${p.sqm}<br>${p.area}</p>
                                    </div>
                                
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <br>
                                <p><b> ${p.Highlight}</b> <small class="bg-light p-2 rounded">${p.full} </small>&nbsp; <small
                                        class="bg-light p-2 rounded"> ${p.Backup}</small>&nbsp; <small
                                        class="bg-light p-2 rounded">+1</small></p>
                                <p>${p.address2}</p>
                            </div>
                            
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p>${p.Dealer} <br>${p.name}</p>
                                </div>
                                <div>
                                    <button class="px-4 py-1 mt-3 fw-bold bg-transparent rounded dec"><a href="./Contact.html"><i
                                                class="fa-solid fa-phone"></i> ${p.contact}</a></button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>`
    })

    document.getElementById('productHome').innerHTML = str
}

displayData(obj9.propertyOffice)