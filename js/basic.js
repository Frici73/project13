var points = "Working Souls - Főoldal" == document.title ? ".":".."

var icon = document.querySelector("link[rel~='icon']") // Ha van már icon akkor azt kötjük a változóhoz
if (!icon) { // ha nincs link element kötve a változóhoz akkor létrehozunk egyet
    icon = document.createElement('link')
    icon.rel = 'icon'
    document.head.appendChild(icon)
}
icon.href = `${points}/imgs/icon.ico` // beállítjuk az ikon képet

var basicCSS = document.querySelector("link[rel~='stylesheet'][href='./css/basic.css']") // lekérjük a közös css bekötését
if (!basicCSS) {
    basicCSS = document.createElement('link')
    basicCSS.rel = "stylesheet"
    document.head.appendChild(basicCSS)
}
basicCSS.href = `${points}/css/basic.css`


document.body.innerHTML += `
    <header id="header">
        <h1>Working Souls</h1>
        <h2></h2>
    </header>
    <menu>
        <li><a href="${points}/index.html">Főoldal</a></li>
        <li><a href="${points}/pages/register.html">Regisztráció</a></li>
        <li><a href="${points}/pages/login.html">Bejelentkezés</a></li>
        <li><a href="${points}/pages/profil.html">Profil</a></li>
        <li><a href="${points}/pages/stat.html">Statisztikák</a></li>
    </menu>`