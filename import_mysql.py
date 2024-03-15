import mysql.connector

# Provide the necessary information to connect to your MySQL database
host = "127.0.0.1"  # Replace "your_host" with the address of your MySQL server
user = "arrow"  # Replace "your_username" with your MySQL username
password = "36245856"  # Replace "your_password" with your MySQL password
database = "mydatabase"  # Replace "your_database" with the name of your MySQL database

# Establish a connection to the MySQL database
try:
    db = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )

    # Check if the connection is successful
    if db.is_connected():
        print("Connected to MySQL database!")
    else:
        print("Failed to connect to MySQL database!")
except mysql.connector.Error as err:
    print(f"Error: {err}")
