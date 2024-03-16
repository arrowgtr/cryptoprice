import mysql.connector

class Authenticator:
    def __init__(self, host, user, password, database):
        self.db = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.db.cursor()

    def add_user(self, username, password):
        sql = "INSERT INTO users (username, password) VALUES (%s, %s)"
        val = (username, password)
        self.cursor.execute(sql, val)
        self.db.commit()
        print("User '{}' created successfully.".format(username))

# Example usage:
authenticator = Authenticator(host="127.0.0.1", user="arrow", password="36245856", database="mydatabase")
authenticator.add_user("blue", "123")
