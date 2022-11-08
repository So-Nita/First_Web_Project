<?php
session_start();
    include './connectDatabase.php';
    // include './validate.php';

    if($_SERVER['REQUEST_METHOD']=="POST"){
        $name = $_POST['userName'];
        $password = $_POST['userPassword'];

        if(empty($name) || empty($password) || is_numeric($username)){
            echo("Invalid");

        }else{
            $query = "SELECT * FROM user WHERE name = '$name' limit 1";
            $result = mysqli_query($connect, $query);
            if(mysqli_num_rows($result)==1){
                // print_r($result);
                $user_data = mysqli_fetch_assoc($result);
                // print_r($user_data);
                if($user_data['password'] === $password){
                    header("location: indexpage.php");
                }else{
                    echo("wrong password...");
                }
            }else{
                header("location: login.php");
            }
        }
    }
    // validateName1($_POST['userName']);
    // validatePassword1($_POST['userPassword']);
?>

<!DOCTYPE html>
<html>
    <body>
        <div class="content" style="width: 400px; margin: auto; background: #f5f5f5;">
            <form method="post">
                <h3>Login</h3>
                <div>
                    <label >Username:</label>
                    <input type="text" name="userName">
                    <span class="color"><?php ?></span>
                </div><br>
                <div>
                    <label >Password:</label>
                    <input type="password" name="userPassword">
                    <span class="color"><?php ?></span>
                </div><br>
                <a href="./signup.php">Sign Up</a>
                <span>  Or</span>
                <a href="">Forgot Password</a><br><br>
                <input type="submit">
            </form>
        </div>
    </body>
</html>