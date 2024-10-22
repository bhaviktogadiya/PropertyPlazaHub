function handleSubmit(event){
    event.preventDefault()
    let obj = {
        brand: document.getElementById('brand').value,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
        discountPercentage: document.getElementById('discountPercentage').value,
        images: document.getElementById('images').value,
        price: document.getElementById('price').value,
        rating: document.getElementById('rating').value,
        stock: document.getElementById('stock').value,
        thumbnail: document.getElementById('thumbnail').value,
    }

 



    let isSuccess = true


    if (!obj.brand) {
        isSuccess = false
        document.getElementById('errorBrand').innerText = "please Enter brand"
    } else{
        isSuccess = true
        document.getElementById('errorBrand').innerText = ""
    }
        
    if (!obj.title) {
        isSuccess = false
        document.getElementById('errortitle').innerText = "please Enter title"
    }
    else{
        isSuccess = true
        document.getElementById('errortitle').innerText = ""
    }

    if (!obj.description) {
        isSuccess = false
        document.getElementById('errordescription').innerText = "please Enter description"
    }
    else{
        isSuccess = true
        document.getElementById('errordescription').innerText = ""
    }

    if (!obj.category) {
        isSuccess = false
        document.getElementById('errorcategory').innerText = "please Enter category"
    }
    else{
        isSuccess = true
        document.getElementById('errorcategory').innerText = ""
    }

    if (!obj.discountPercentage) {
        isSuccess = false
        document.getElementById('errordiscountPercentage').innerText = "please Enter discountPercentage"
    }
    else{
        isSuccess = true
        document.getElementById('errordiscountPercentage').innerText = ""
    }

    if (!obj.images) {
        isSuccess = false
        document.getElementById('errorimages').innerText = "please Enter images"
    }
    else{
        isSuccess = true
        document.getElementById('errorimages').innerText = ""
    }
    
    if (!obj.price) {
        isSuccess = false
        document.getElementById('errorprice').innerText = "please Enter price"
    }
    else{
        isSuccess = true
        document.getElementById('errorprice').innerText = ""
    }

    if (!obj.rating) {
        isSuccess = false
        document.getElementById('errorrating').innerText = "please Enter rating"
    }
    else{
        isSuccess = true
        document.getElementById('errorrating').innerText = ""
    }

    if (!obj.stock) {
        isSuccess = false
        document.getElementById('errorstock').innerText = "please Enter stock"
    }
    else{
        isSuccess = true
        document.getElementById('errorstock').innerText = ""
    }

    if (!obj.thumbnail) {
        isSuccess = false
        document.getElementById('errorthumbnail').innerText = "please Enter thumbnail"
    }
    else{
        isSuccess = true
        document.getElementById('errorthumbnail').innerText = ""
    }

    if (isSuccess) {
        console.log(obj,"obj === ");
        productData.products.push(obj)
        displayData(productData.products)
        document.getElementById('form').reset();
    }
}