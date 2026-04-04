async function loadProfile() {
    checkAuth();

    const userId = parseInt(localStorage.getItem("user_id"));

    if (!userId) {
        alert("Usuário não identificado");
        return;
    }

    const response = await fetch(`${API_URL}/users/${userId}`, {
        headers: getHeaders()
    });

    const user = await response.json();

    document.getElementById("profile").innerHTML = `
        <p><strong>Nome:</strong> ${user.nome}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;

    const isSuper = localStorage.getItem("is_superuser");

    const actionDiv = document.getElementById("actionButton");

    if (isSuper === "true") {
        actionDiv.innerHTML = `
            <a href="dashboard.html" class="btn btn-primary mt-3">Voltar</a>
        `;
    } else {
        actionDiv.innerHTML = `
            <button onclick="logout()" class="btn btn-danger mt-3">Sair</button>
        `;
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_superuser");

    window.location.href = "index.html";
}