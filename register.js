console.log("Regisztráció JS betöltve");

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

let reg = 0; // 0 magán | 1 cég
function changeType(type) { 
    if (type === "magan") {
        console.log("Magánszemély kiválasztva");
        console.log(document.getElementById("magan").classList)
        document.getElementById("magan").classList.add("active");
        document.getElementById("ceg").classList.remove("active");
        reg = 0;
    }
    else if (type === "ceg") {
        console.log("Cég kiválasztva");
        console.log(document.getElementById("ceg").classList)
        document.getElementById("ceg").classList.add("active");
        document.getElementById("magan").classList.remove("active");
        reg = 1;
    }
}

document.getElementById("magan").addEventListener("click", function() {
    changeType("magan");
});

document.getElementById("ceg").addEventListener("click", function() {
    changeType("ceg");
});

document.getElementById("magan").classList.add("active");