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

function sendEmail(){
    Email.send({
        Host : "smtp.elasticmail.com",
        Username : "agarwaltaniya49@gmail.com",
        Password : "8ACD2725D278DC29E5354BB816E0FFD254E7",
        To : 'agarwaltaniya49@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Collaboration Details",
        Body : "Name: "+document.getElementById("name").value 
        + "<br> Email: "+document.getElementById("email").value
        + "<br> Phone no.: "+document.getElementById("phone").value
        +"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}