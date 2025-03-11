async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        let userList = document.getElementById('userList');

        users.forEach(user => {
            let userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>@${user.username}</p>
                <p>📧 ${user.email}</p>
                <p>📞 ${user.phone}</p>
                <p>🌐 <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>🏢 ${user.company.name}</p>
            `;
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();
