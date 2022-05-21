$(document).ready(function() {

    $('#img1').animate({left:"+=345px"},4000,'linear');

    let description = $('<p>').css('color', 'blue').appendTo('body');
    console.log(`${$('#img1').get(0).outerHTML}`);
    setInterval(function (){
        description.text(`${$('#img1').get(0).outerHTML}`);
    },100)

})