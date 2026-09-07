console.log("Regisztráció JS betöltve");

// Regisztrációs típus választása és frontend hozzáigazítása
let reg = 0; // 0 magán | 1 cég
function changeType(type) { 
    if (type === "magan") {
        console.log("Magánszemély kiválasztva");
        console.log(document.getElementById("magan").classList)
        document.getElementById("magan").classList.add("active");
        document.getElementById("ceg").classList.remove("active");
        reg = 0;
        document.getElementById("adoszam").style.display = "none";
    }
    else if (type === "ceg") {
        console.log("Cég kiválasztva");
        console.log(document.getElementById("ceg").classList)
        document.getElementById("ceg").classList.add("active");
        document.getElementById("magan").classList.remove("active");
        reg = 1;
        document.getElementById("adoszam").style.display = "table-row";
    }
}

document.getElementById("magan").addEventListener("click", function() {
    changeType("magan");
});

document.getElementById("ceg").addEventListener("click", function() {
    changeType("ceg");
});

document.getElementById("magan").classList.add("active");
document.getElementById("adoszam").style.display = "none";


// regisztráció gomb
document.getElementById("reg").addEventListener("click", function() {
    console.log("Regisztráció gomb megnyomva");
    let nev = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let jelszo = document.getElementById("password").value;
    let jelszo2 = document.getElementById("confirmPassword").value;
    let adoszam = document.getElementById("taxNumber").value;

    if (nev === "" || email === "" || jelszo === "") {
        alert("Kérem töltse ki a kötelező mezőket!");
        return;
    }
    if (reg === 1 && adoszam === "") {
        if (adoszam === "") {
            alert("Adószám megadása kötelező!");
            return;
        }
        else if (adoszam.length !== 11 || isNaN(adoszam)) {
            alert("Érvénytelen adószám! Az adószám 11 számjegyből áll.");
            return;
        }
        try {
            adoszam = parseInt(adoszam);
        } catch (error) {
            alert("Érvénytelen adószám! Az adószám csak számjegyekből áll.");
            return;
        }
    }
    if (jelszo !== jelszo2) {
        alert("A jelszavak nem egyeznek!");
        return;
    }
    if (jelszo.length < 6) {
        alert("A jelszónak legalább 6 karakter hosszúnak kell lennie!");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) { 
        alert("Érvénytelen email cím!");
        return;
    }

    adatok = {
        nev: nev,
        email: email,
        jelszo: jelszo,
        adoszam: adoszam,
        tipus: reg === 0 ? "magan" : "ceg",
        kep: document.getElementById("profileImage").value
    };

    // küldés a szervernek
    // ...
    kuldve = true; // tesztelés miatt

    // nullázás
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("taxNumber").value = "";
    document.getElementById("profileImage").value = "";

    if (kuldve) { 
        alert("Sikeres regisztráció!");
    }
    else {
        alert("A megadott email cím már használatban van!");
    }
});

window.onload = (e) => {
    console.log("Az oldal betöltődött!")
    document.getElementById("fileSelector").onclick = (e) => {
        document.getElementById("profileImage").click()
    }
    document.getElementById("profileImage").onchange = (e) => {
        document.getElementById("fileSelector").innerText = e.href
    }
};


function showPassword(input) {
        console.log("Jelszó megjelenítése");
        if (input.type === "password") {
            input.type = "text";
            console.log("Jelszó megjelenítve");
        } else {
            input.type = "password";
            console.log("Jelszó elrejtve");
        }
    }

for (var input of document.getElementsByTagName("input")) {
        if (input.type === "password") {
            input.addEventListener("dblclick", function() {
                showPassword(this);
            });
        }
    }