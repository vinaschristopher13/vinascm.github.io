<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="database_contact";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)

{die("Connection Failed:" . mysqli_connect_error());}

if(isset($_POST['save'])){
    $fname= $_POST['fname'];
    $email= $_POST['email'];
    $message= $_POST['message'];

    $sql_query = "INSERT INTO entry_details (fname, email, message) VALUES ('$fname','$email','$message')";

    if(mysqli_query($conn,$sql_query))
    {
        echo '<script>alert("Your Message is Successfully Submitted!")</script>';
    }
    else
    {
        echo "Error: ". $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VinasCM</title>
</head>
<body>
    <script>
    window.location.href= "index.html";
    </script>
</body>
</html>