const obj4 = {
    PerfectProperty : [
        {
            image: "./photo/img12.jpg",
            heading: "#1 Place To Find The Perfect Property",
            details: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            theam1: "Tempor erat elitr rebum at clita",
            theam2: "Aliqu diam amet diam et eos",
            theam3: "Clita duo justo magna dolore erat amet"

        },

        {
            image: "./photo/img14.jpg",
            heading: "#2 Place To Find The Perfect Property",
            details: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
            theam1: "Tempor erat elitr rebum at clita",
            theam2: "Aliqu diam amet diam et eos",
            theam3: "Clita duo justo magna dolore erat amet"

        }
    ]
}

function displayData(allProduct){
    let str = ''
    allProduct.map((p) => {
        str += `<div class="col col-xl-6 col-lg-6 cl-12">
                    <div class="pe-0">
                        <img src="${p.image}" alt="img" class="img-fluid w-100">
                    </div>
                </div>

                <div class="col col-xl-6 col-lg-6 col-12" >
                    <h1 class="mb-4 text-success">${p.heading}</h1>
                    <p class="mb-4">${p.details}</p>
                    <p><i class="fa-solid fa-check me-3 text-success"></i>${p.theam1}</p>
                    <p><i class="fa-solid fa-check me-3 text-success"></i>${p.theam2}</p>
                    <p><i class="fa-solid fa-check me-3 text-success"></i>${p.theam3}</p>
                    
                </div>`
    })

    document.getElementById('productDataPerfect').innerHTML = str
}

displayData(obj4.PerfectProperty)