<?php 
    
    $page = $_GET['page'] ?? 'index';

switch ($page) {
    case 'login':
        require 'pages/login.php';
        break;

    case 'register':
        require 'pages/register.php';
        break;

    default:
        require 'pages/home.php';
}
        ?>