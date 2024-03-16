import mysql.connector

# Provide the necessary information to connect to your MySQL database
host = "127.0.0.1"
user = "arrow"
password = "36245856"
database = "mydatabase"

try:
    # Establish a connection to the MySQL database
    db = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )

    # Check if the connection is successful
    if db.is_connected():
        print("Connected to MySQL database!")

        # Create a cursor object to execute SQL queries
        cursor = db.cursor()

        # Define the SQL query to create the users table
        create_table_query = """
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) UNIQUE,
            password VARCHAR(255)
        )
        """

        # Execute the SQL query to create the table
        cursor.execute(create_table_query)

        # Commit the changes to the database
        db.commit()

        # Close the cursor
        cursor.close()

        print("Table 'users' created successfully.")
    else:
        print("Failed to connect to MySQL database!")
except mysql.connector.Error as err:
    print(f"Error: {err}")
finally:
    # Close the database connection
    db.close()
