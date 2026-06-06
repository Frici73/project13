<?php $title = "Főoldal";    
    $css = "home.css";
    require "layout/header.php";
?>
<div>
        <h1>Üdvözöljük a Working Souls oldalán!</h1>
        <h2>A weboldalról</h2>
        <p>
            Ez a weboldal arra készült, hogy megkönnyítse a munkakeresést és hirdetést.
            Itt a munkáltatók könnyedén közzétehetik álláshirdetéseiket, míg a munkavállalók gyorsan és egyszerűen kereshetnek a számukra megfelelő állások között.
            Célunk, hogy egy hatékony és felhasználóbarát platformot biztosítsunk mindkét fél számára, ahol könnyedén megtalálhatják egymást.
        </p>
        <p>
            Fontosnak tartjuk az álhírek kerülését, ezért a hirdetésekre kattintva van lehetőség visszajelzést adni,
            ha túl sok visszajelzést kapunk arról, hogy hamis a hirdetés azt töröljük. <br>
            Ha a hirdető több hamis hirdetést tesz közzé, akkor kitiltjuk a weboldalról, így nem tud több hirdetést közzétenni.
        </p>
        <p>
            A felhasználókat szeretnénk egyúttal arra kérni, hogy ezt a rendszert megfelelően használják, 
            és csak akkor jelentsenek egy hirdetést hamisnak, ha valóban az. <br>
            Ha egy felhasználó gyanúsan sok hamis hirdetést jelent, akkor azt is megvizsgáljuk, és ha szükséges, akkor őt is kitiltjuk a weboldalról.
        </p>
        <h2>A Regisztrációról</h2>
        <p>A megadott adatokat pusztán a profilok azonosítására használjuk, és nem tesszük közzé harmadik fél számára.</p>
    </div>

<?php
    require "layout/footer.php";
?>