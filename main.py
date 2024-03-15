from user_authenticator import UserAuthenticator  # Import the UserAuthenticator class

# Create an instance of UserAuthenticator
authenticator = UserAuthenticator(host="127.0.0.1", user="arrow", password="36245856", database="mydatabase")

def login():
    username = input("Enter username: ")
    password = input("Enter password: ")

    # Authenticate the user
    if authenticator.authenticate_user(username, password):
        print("Authentication successful! Welcome, {}.".format(username))
        # Call other functions or perform actions for authenticated users
    else:
        print("Authentication failed. Invalid username or password.")

def main():
    print("Welcome to Your Application!")
    while True:
        print("1. Login")
        print("2. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            login()
        elif choice == "2":
            print("Exiting application. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
