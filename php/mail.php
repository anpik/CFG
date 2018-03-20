<?php

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$contactMsg = $_POST['contactMsg'];
$to = "anna.pik404@gmail.com";
$subject = "Third Dimension Contact Mail";

$body = "From: $fullName\n\nEmail: $email\n\n$contactMsg";

mail($to, $subject, $body);
header("location: ../emailConfirm.html");
die();

?>
