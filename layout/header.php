<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?="WS - " . $title?></title>
    <link rel="stylesheet" href="./css/basic.css">
    <link rel="stylesheet" href=<?="./css/" . $css?>>
    <link rel="shortcut icon" href=".imgs/icon.ico" type="image/x-icon">
</head>
<body>
    <header id="header">
        <h1>Working Souls</h1>
        <h2><?=$title?></h2>
    </header>
    <menu>
        <li><a href="?page=home">Főoldal</a></li>
        <li><a href="?page=register">Regisztráció</a></li>
        <li><a href="?page=login">Bejelentkezés</a></li>
        <li><a href="?page=profil">Profil</a></li>
        <li><a href="?page=stat">Statisztikák</a></li>
    </menu>
