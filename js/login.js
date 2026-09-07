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