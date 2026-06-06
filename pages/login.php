<?php 
    $title = "Bejelentkezés";
    $css = "register_and_login.css";
    require 'layout/header.php';
?>

<table>
    <tr>
        <td>e-mail cím vagy tel. szám</td>
        <td><input type="email" id="email"></td>
    </tr>
    <tr>
        <td>jelszó</td>
        <td><input type="password" id="password"></td>
    </tr>
    <tr>
        <td colspan="2"><input type="button" value="Belépés" id="log"></td>
    </tr>
</table>
<?php
    $script = "login.js";
    require "layout/footer.php";
?>