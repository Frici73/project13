console.log("Basic JS betöltve!");

// Alapvető HTML struktúra létrehozása ellenőrzött módon
let headerDown = ``;
if (false) { // cég
    headerDown = `<li><a href="pages/uploader.html">Álláshirdetés</a></li>
        <li><a href="pages/searcherASC.html">Munkaerő kereső</a></li>`;
}
else if (false) { // magánszemély
    headerDown = `<li><a href="pages/searcherASP.html">Álláskereső</a></li>`;
}
else { // vendég / tesztelő
    headerDown = `
        <li><a href="pages/uploader.html">Álláshirdetés</a></li>
        <li><a href="pages/searcherASP.html">Álláskereső</a></li>
        <li><a href="pages/searcherASC.html">Munkaerő kereső</a></li>`;
}
let icon = `<link rel="icon" href="imgs/icon.ico" type="image/x-icon">`;
let fullHeader = `
    <header id="header">
        <h1>Working Souls</h1>
        <h2 id="title">${document.title.slice(5)}</h2>
    </header>
    <menu>
        <li><a href="index.html">Főoldal</a></li>
        <li><a href="pages/register.html">Regisztráció</a></li>
        <li><a href="pages/login.html">Bejelentkezés</a></li>
        ${headerDown}
        <li><a href="pages/profil.html">Profil</a></li>
        <li><a href="pages/mail.html">Levelező</a></li>
    </menu>`;
if (document.title !== "WS - Főoldal") {
    fullHeader = fullHeader.replaceAll("index.html", "../index.html")
        .replaceAll("pages/", "../pages/");
    icon = icon.replaceAll("imgs/icon.ico", "../imgs/icon.ico");
    }
document.body.innerHTML += fullHeader;
document.head.innerHTML += icon;