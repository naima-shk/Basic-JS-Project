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
                 
                 <div class='user-name'> ${user.username} </div>
                 <div class="user-email">${user.email}</div>
                    <button id = "btnMore" onclick= "getElementById('userInfo').innerHTML='ID: ${user.id}<br> user address: ${user.address.street}<br> user website ${user.website} <br>'">Details</button>
                    
                    
            </div>
                  </div>`
            )
            .join("");
    });