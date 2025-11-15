<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Load Composer's autoloader or manually include PHPMailer
require 'vendor/autoload.php'; // If using Composer

// Collect form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $senderEmail = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $messageBody = trim($_POST["message"]);

    // Basic validation
    if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL) || empty($messageBody)) {
        echo "Invalid input.";
        exit;
    }

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'satputesahil8186@gmail.com'; // ✅ Your Gmail
        $mail->Password   = 'aipp gkuh kudt uigc';    // ✅ App password from Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Email Settings
        $mail->setFrom('your-email@gmail.com', 'Portfolio Contact Form');
        $mail->addAddress('your-email@gmail.com'); // ✅ You receive this
        $mail->addReplyTo($senderEmail);

        $mail->isHTML(false);
        $mail->Subject = 'New Message from Portfolio Website';
        $mail->Body    = "Sender Email: $senderEmail\n\nMessage:\n$messageBody";

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Access denied.";
}
?>