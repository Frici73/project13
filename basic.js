console.log("Basic JS betöltve!");

// Alapvető HTML struktúra létrehozása ellenőrzött módon

let headerDown = ``;
if (false) { // cég
    headerDown = `<li><a href="pages/uploader.html">Álláshirdetés</a></li>`;
}
else if (false) { // magánszemély
    headerDown = `<li><a href="pages/searcher.html">Álláskereső</a></li>
        <li><a href="pages/statistic.html">Statisztikák</a></li>`;
}
else { // vendég / tesztelő
    headerDown = `
        <li><a href="pages/uploader.html">Álláshirdetés</a></li>
        <li><a href="pages/searcher.html">Álláskereső</a></li>
        <li><a href="pages/statistic.html">Statisztikák</a></li>`;
}

let fullHeader = `
    <header id="header">
        <h1>Working Souls</h1>
        <h2 id="title">Főoldal</h2>
    </header>
    <menu>
        <li><a href="index.html">Főoldal</a></li>
        <li><a href="pages/login.html">Bejelentkezés</a></li>
        <li><a href="pages/register.html">Regisztráció</a></li>
        ${headerDown}
        <li><a href="pages/profil.html">Profil</a></li>
    </menu>`;
if (document.title !== "WS - Főoldal") {
    fullHeader = fullHeader.replaceAll("index.html", "../index.html")
        .replaceAll("pages/", "../pages/");
    }
document.body.innerHTML += fullHeader;