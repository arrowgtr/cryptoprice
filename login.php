<?php
// Database connection
$servername = "localhost"; // Corrected server name
$username = "arrow";
$password = "36245856";
$dbname = "mydatabase";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare a statement with placeholders
    $sql = "SELECT * FROM users WHERE username=? AND password=?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters to the placeholders
        $stmt->bind_param("ss", $username, $password);

        // Execute the statement
        $stmt->execute();

        // Get the result
        $result = $stmt->get_result();

        // Check if there are any rows returned
        if ($result->num_rows > 0) {
            // User exists, log them in
            echo "Login successful!";
        } else {
            // User doesn't exist, prompt them to register
            echo "User doesn't exist. Please register.";
        }

        // Close the statement
        $stmt->close();
    } else {
        // Error handling for prepared statement
        echo "Error: " . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
