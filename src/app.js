fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(userData) {
        document.getElementById("person").innerHTML = userData
            .map(
                (user) =>
                `<div>
                    <p>User Id=> ${user.id}</p>
                    <div>User Name=> ${user.name}</div>
                    <div>E-mail=> ${user.email}</div>
                  </div>`
            )
            .join("");
    });