<?php
// Establish database connection
$servername = "localhost";
$username = "username";
$password = "password";
$database = "dbname";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$title = $_POST['title'];
$content = $_POST['content'];
$author = $_POST['author'];

// Prepare and execute SQL statement
$stmt = $conn->prepare("INSERT INTO threads (title, content, author) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $title, $content, $author);

if ($stmt->execute()) {
    echo "Thread created successfully.";
} else {
    echo "Error creating thread: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
