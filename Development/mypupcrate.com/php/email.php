<?php
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message=="")) {
        echo "All fields are required, please fill the form out again.";
    } else{        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Contact Form";
        mail("info@mypupcrate.com", $subject, $message, $from);
        header('Location: /');
    }
?>