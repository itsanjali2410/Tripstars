<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any domain
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get raw POST data
    $name = isset($_POST["name"]) ? htmlspecialchars(trim($_POST["name"])) : '';
    $email = isset($_POST["email"]) ? htmlspecialchars(trim($_POST["email"])) : '';
    $message = isset($_POST["message"]) ? htmlspecialchars(trim($_POST["message"])) : '';

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "❌ Please fill in all fields.";
        exit;
    }

    // Email config
    $to = "itsanjali2410@gmail.com"; // 🔁 Replace with your Gmail
    $subject = "New Contact Form Message from $name";
    $body = "You received a new message from your website:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Your message has been sent successfully!";
    } else {
        http_response_code(500);
        echo "❌ Failed to send the message.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "❌ Only POST method is allowed.";
}
?>
