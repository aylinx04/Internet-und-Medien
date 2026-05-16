const benutzerListe =
    [{name: "Aylin", passwort: "geheim"},
     {name: "Sophia", passwort: "auchgeheim"}];

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    updateUI(isLoggedIn);
});

function form(event) {
    event.preventDefault();
    const nameEingabe = document.getElementById('name').value.trim();
    const passwort = document.getElementById('passwort').value.trim();

    let errorMessage = '';

    const benutzer = benutzerListe.find(user => user.name === nameEingabe);

    if (nameEingabe === "") {
        errorMessage += "Das 'Name' Feld darf nicht leer sein!<br>";
    } else if (!benutzer) {
        errorMessage += "Name ist falsch!<br>";
    }

    if (passwort === "") {
        errorMessage += "Das 'Passwort' Feld darf nicht leer sein!<br>";
    } else if (benutzer && benutzer.passwort !== passwort) {
        errorMessage += "Passwort ist falsch!<br>";
    }

    if (errorMessage) {
        document.getElementById('errors').innerHTML = errorMessage;
    } else {
        localStorage.setItem('loggedIn', 'true');
        window.location = 'StartSeite.html';
    }
}

function login() {
    window.location = 'Login.html';
}

function logout() {
    localStorage.setItem("loggedIn", "false");
    updateUI(false);
    window.location.href = 'StartSeite.html';
}

function updateUI(isLoggedIn) {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const forumLink = document.getElementById("forumLink");

    if (isLoggedIn) {
        loginButton.style.display = "none";
        logoutButton.style.display = "inline-block";
        forumLink.style.display = "inline-block";
    } else {
        loginButton.style.display = "inline-block";
        logoutButton.style.display = "none";
        forumLink.style.display = "none";
    }
}
