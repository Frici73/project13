// Jelszó megjelenítése / elrejtése dupla kattintással
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

document.getElementById("password").addEventListener("dblclick", function() {
    showPassword(this);
});