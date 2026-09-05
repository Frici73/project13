var icon = document.querySelector("link[rel~='icon']") // Ha van már icon akkor azt kötjük a változóhoz
if (!icon) { // ha nincs link element kötve a változóhoz akkor létrehozunk egyet
    icon = document.createElement('link')
    icon.rel = 'icon'
    document.head.appendChild(icon)
}
icon.href = "./imgs/icon.ico" // beállítjuk az ikon képet

var basicCSS = document.querySelector("link[rel~='stylesheet'][href='./css/basic.css']") // lekérjük a közös css bekötését
if (!basicCSS) {
    basicCSS = document.createElement('link')
    basicCSS.rel = "stylesheet"
    document.head.appendChild(basicCSS)
}
basicCSS.href = "./css/basic.css"


document.body.innerHTML += `
    <header id="header">
        <h1>Working Souls</h1>
        <h2></h2>
    </header>
    <menu>
        <li><a href="?page=home">Főoldal</a></li>
        <li><a href="?page=register">Regisztráció</a></li>
        <li><a href="?page=login">Bejelentkezés</a></li>
        <li><a href="?page=profil">Profil</a></li>
        <li><a href="?page=stat">Statisztikák</a></li>
    </menu>`