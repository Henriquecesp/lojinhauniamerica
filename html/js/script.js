function showDiv() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'none'){
            cart.style.display = "block";
        }else{  
            cart.style.display = "none";   
        }
 }

function hideDiv(){
    document.getElementById('cart').style.display ="none";
} 

function delItem1(){
    var item2 = document.getElementById('item2');
    if (item2.style.display === 'none'){
        document.getElementById('none').style.display ="flex"
    }
    document.getElementById('item1').style.display = "none"
}

function delItem2(){
    var item1 = document.getElementById('item1');
    if (item1.style.display === 'none'){
        document.getElementById('none').style.display ="flex"
    }
    document.getElementById('item2').style.display = "none"
}

function addItem1(){
    document.getElementById('item1').style.display = "flex"
    document.getElementById('none').style.display ="none"
}

function addItem2(){
    document.getElementById('item2').style.display = "flex"
    document.getElementById('none').style.display ="none"
}

//TO TOP BUTTON jQuery

jQuery.fn.scrollTo = function(elem, speed) { 
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
    }, speed == undefined ? 1000 : speed); 
    return this; 
};
var oflow = document.getElementById('overflow');

$(oflow).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $('.to-top').fadeIn();
     }
    else
     {
        $(".to-top").fadeOut();
     }
 });
function myfunction(){
    $("#overflow").scrollTo("#top");
}
