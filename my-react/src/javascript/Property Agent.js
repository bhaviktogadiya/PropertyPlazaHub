const obj3 = {
    PropertyAgent : [
        {
            image: "./photo/img22.jpg",
            name: "Elisha json",
            extra: "Designation"
        },

        {
            image: "./photo/img21.jpg",
            name: "Jake donald",
            extra: "Designation"
        },

        {
            image: "./photo/img20.jpg",
            name: "Emma Segev",
            extra: "Designation"
        },

        {
            image: "./photo/img23.jpg",
            name: "Abhi Roy",
            extra: "Designation"
        }
    ]
}


function displayData(allProduct){
    let str = ''
    allProduct.map((p) => {
        str += `<div class="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team rounded overflow-hidden box2">
                        <div class="position-relative">
                            <img class="img-fluid" src="${p.image}" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href="https://www.instagram.com/accounts/login/"><i class="fab fa-instagram"></i></a>
                                </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">${p.name}</h5>
                            <small>${p.extra}</small>
                        </div>
                    </div>
                </div>`
    })

    document.getElementById('productDataAgent').innerHTML = str

}

displayData(obj3.PropertyAgent)