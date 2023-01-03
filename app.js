
function sendEmail() {
    Email.send({
        secureToken: "d05450da-6faa-42f8-baea-a7ddc902b233",
        To: 'alok15120803@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New message from portfolio " +
         "<br> Name" + document.getElementById('name').value +
         " <br>  Email" + document.getElementById('email').value +
         "<br> Message" + document.getElementById('message').value
    }).then(
        message => alert("Message sent successfully !")
    );
}
