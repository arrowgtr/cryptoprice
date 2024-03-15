<?php
// user-profile.php
header('Content-Type: application/json');

// Mock user data
$userData = [
    'username' => 'JohnDoe',
    'email' => 'john@example.com',
    'age' => 30
];

echo json_encode($userData);
?>
