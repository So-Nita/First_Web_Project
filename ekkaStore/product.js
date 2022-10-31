let http = new XMLHttpRequest();
http.open('get','product.json',true);
http.send();
http.onload = function(){
    if(this.readyState==4 && this.status==200){
        let product = JSON.parse(this.responseText);
        let output =""
        for(let i of product){
            output+=
            `
            <div class="product">
                <div class="image">
                    <img src="${i.image}" alt="">
                </div>
                <div class="descript">
                    <div class="title"><a href="#">${i.title}</a></div>
                    <div class="price">$ ${i.price}</div>
                    <div class="star">${i.star}</div>                 
                </div>
            </div>
            `
        }
        document.querySelector('.product').innerHTML = output;
    }
}