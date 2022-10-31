
/* Create  xmlhttp-request object */
let http = new XMLHttpRequest();

//  next i prepare the request with the open() method
http.open('get', 'json-product.json',true);
// set argument http method
//  pass the file json where data is lives.
//  true is set request to be async

http.send();
// sent the request

// catch the response
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        // covert to js array
        let products = JSON.parse(this.responseText);
        let output = ""

        for(let item of products){
            output += `
                <div class="products">
                    <img src="${item.image}" alt="">
                    <p class="id">${item.id}</p>
                    <p class="name">${item.name}</p>
                    <p class="price">
                        <span>${item.price}</span>
                        <span>&euro;</span>
                    </p>
                </div>
            `
        }
        document.querySelector('.products').innerHTML= output;
    }
}
