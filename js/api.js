const API_URL = "http://32.192.219.170:8000";

function getToken() {
    return localStorage.getItem("token");
}

function getHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    };
}

function checkAuth() {
    if (!getToken()) {
        window.location.href = "index.html";
        return false;
    }
    return true;
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = atob(base64Url);
    return JSON.parse(base64);
}

function checkSuperUserAccess() {
    const token = getToken();

    if (!token) {
        window.location.href = "index.html";
        return false;
    }

    const isSuper = localStorage.getItem("is_superuser");

    if (isSuper !== "true") {
        alert("Acesso restrito!");
        window.location.href = "profile.html";
        return false;
    }

    return true;
}