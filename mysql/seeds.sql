INSERT INTO department (names)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO roles (id, title, salary, department)
VALUES 
    ("Sales Lead", 10000, "Sales"),
    ("Salesperson", 10000, "Sales"),
    ("Lead Engineer", 10000, "Engineering"),
    ("Software Engineer", 1000, "Engineering"),
    ("Account Manager", 1000, "Finance"),
    ("Accountant", 3000, "Finance"),
    ("Legal Team Lawyer", 40000, "Legal"),
    ("Lawyer", 5000, "Legal");

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
    ("Frank", "Catania Sr.", 3, 005),
    ("Joe", "Gorga", null, 010),
    ("Bill", "Ayden", 12, 015),
    ("Evan", "Goldschneider", null, 339),
    ("Joe", "Benigno", null, 212);
