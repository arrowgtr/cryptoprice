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

// Query to get threads
$sql = "SELECT id, title, content, author, created_at FROM threads";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. " - Author: " . $row["author"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
