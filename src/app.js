fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(userData) {
        document.getElementById("person").innerHTML = userData
            .map(
                (user) =>
                `<div>
                <div id = "user-card">
                
                    <button id = "btnMore" onclick= "getElementById('userInfo').innerHTML='ID: ${user.id}<br> user name: ${user.name}<br> user email ${user.email} <br>    '">Details</button>
                    
            </div>
                  </div>`
            )
            .join("");
    });