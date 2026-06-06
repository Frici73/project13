<?php 
    $title = "Regisztráció";
    $css = "register_and_login.css";
    require 'layout/header.php';
?>
    <table>
        <tr>
            <th><input type="button" value="Regisztráció magánszemélyként" id="magan"></th>
            <th><input type="button" value="Regisztráció cégként" id="ceg"></th>
        </tr>
        <tr>
            <td>e-mail cím</td>
            <td><input type="email" name="email" id="email"></td>
        </tr>
        <tr>
            <td>felhasználónév</td>
            <td><input type="text" name="username" id="username"></td>
        </tr>
        <tr>
            <td>jelszó</td>
            <td><input type="password" name="password" id="password"></td>
        </tr>
        <tr>
            <td>jelszó megerősítése</td>
            <td><input type="password" name="confirmPassword" id="confirmPassword"></td>
        </tr>
        <tr>
            <td>Profil kép (opcionális)</td>
            <td><input type="file" name="profileImage" id="profileImage"></td>
        </tr>
        <tr id="adoszam">
            <td>Adószám</td>
            <td><input type="text" name="taxNumber" id="taxNumber"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" value="Regisztráció" id="reg"></td>
        </tr>
    </table>
    
<?php
    $script = "register.js";
    require "layout/footer.php";
?>