$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    })
});
var btn=document.getElementById('button');
btn.addEventListener('click',function(e){
    e.preventDefault()
    console.log('hi');
})
