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

    $sql_query = "INSERT INTO entry_details(fname, email, message) VALUES ('$fname','$email','$message')";

    if(mysqli_query($conn,$sql_query))
    {
         echo "New Details Entry Inserted Successfully ! <br>";
        
         echo "Your Message is Successfully Sent ! <br>";
        
    }
    else
    {
        echo "Error: ". $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>

<br>
<div class="btn"><button onclick="location.href='index.html'">Back to Home!</button></div>