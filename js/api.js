const API_URL = "http://SEU_IP:8000";

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
    }
}