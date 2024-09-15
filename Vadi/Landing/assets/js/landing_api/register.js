function register_function(event){
    event.preventDefault(); // Prevent default form submission

    var  user_name = document.getElementById("user_name").value;
    var user_email = document.getElementById("user_email").value;
    var user_password = document.getElementById("user_password").value;
    var user_phonenumber = document.getElementById("user_phonenumber").value;



    const data = {user_name, user_email, user_password, user_phonenumber};

    fetch("http://localhost:5115/register-user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            alert("Something went wrong 😕");
        }
        return response.json();
    })
    .then(data => {
        alert('Response: ' + JSON.stringify(data));
    })
    .catch(error => {
        alert('Error: ' + error);
    });
}