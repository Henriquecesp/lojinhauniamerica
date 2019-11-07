function showDiv() {
    var cart = document.getElementById('cart');
    var menu = document.getElementById('menu');
    if (cart.style.display === 'none'){
            cart.style.display = "block";
        }else{  
            cart.style.display = "none";   
        }
 }

function hideDiv(){
    document.getElementById('cart').style.display ="none";
} 
