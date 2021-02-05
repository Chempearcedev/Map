$(document).ready(function() {
    $("#button").on("click", function() {
        $("#button").text("Thank you for your interest");
    })
});

function sendMail(contactForm) {
    emailjs.send("service_8jzchbj","restaurant-finder", {
     "message": contactForm.message.value,
     "from_name": contactForm.name.value,
     "from_email": contactForm.emailaddress.value,
    })
    .then(
        function (response){
        console.log("Success", response);
    },
    function(error) {
        console.log("Error", error)
    });
    return false;
}

 function myFunction() {
    alert('Congratulations your email has been sent!');
  }
