<?php
    session_start();
        include './connectDatabase.php';
        echo($_SESSION['name']);
?>
<!DOCTYPE html>
<html>
    <head>
        <h2>Hello</h2>
        <a href="./logout.php">Logout here</a>
    </head>
</html>
