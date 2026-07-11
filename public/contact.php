<?php
// enVision Studio — Contact form handler
// Works out of the box on Hostinger (PHP + mail() supported on shared hosting).

header('Content-Type: application/json');

// TODO: change this to the email address that should receive enquiries.
$to = "tdorji.dev@gmail.com";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

function clean($value) {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$name    = isset($_POST['name']) ? clean($_POST['name']) : '';
$email   = isset($_POST['email']) ? clean($_POST['email']) : '';
$service = isset($_POST['service']) ? clean($_POST['service']) : 'Not specified';
$message = isset($_POST['message']) ? clean($_POST['message']) : '';

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all fields with a valid email.']);
    exit;
}

$subject = "New Project Enquiry from $name — enVision Studio";
$body = "You have a new enquiry from the enVision Studio website:\n\n"
      . "Name: $name\n"
      . "Email: $email\n"
      . "Service: $service\n\n"
      . "Message:\n$message\n";

$headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Message could not be sent.']);
}
