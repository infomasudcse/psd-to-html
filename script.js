$(document).ready(function(){
    $("#burger-nav").on("click", function(){
        console.log('ciao');
        $("header nav ul").toggleClass("open");
    })
});