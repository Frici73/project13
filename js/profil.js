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

document.querySelectorAll(".check-cell span").forEach(span => {
    span.onclick = () => {
        const input = span.parentElement.querySelector("input");
        if (input.checked) {
            span.innerHTML = "&#10006;";
        }
        else {
            span.innerHTML = "&#10004;";
        }
        input.checked = !input.checked;
        
    };
});
