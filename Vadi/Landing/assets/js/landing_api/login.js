function login_function(event){
    event.preventDefault(); // Prevent default form submission

    var user_input = document.getElementById("input").value;
    var user_password = document.getElementById("password").value;

    const data = {user_input, user_password};

    fetch("http://localhost:5115/login-user", {
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