# QiloDB

**QiloDB** is a lightweight, terminal-based database management system developed in C++. It provides a command-line interface for database creation, table management, data manipulation, querying, and transaction control. This project is suitable for learning basic database operations and implementing custom lightweight data storage solutions.

---

## Features

- Modular and extensible C++17 codebase
- Command-line interface for database interaction
- Create and manage databases and tables
- Insert, update, delete, and query records
- Filtered and formatted data viewing options
- Transaction control with commit and rollback support

---

## Installation

First clone the repo into your system using the following command:

    git clone https://github.com/tech-hunter-mainak/dbms.git


To compile and run QiloDB, use the following command:

    g++ -std=c++17 -o qilodb main.cpp table.cpp database.cpp file_utils.cpp
    ./qilodb

Ensure that all required `.cpp` files are present in the same directory and that your compiler supports C++17 or later.

---

## Command Overview

### 1. Database Commands

| Command              | Description                                  | Example             |
|----------------------|----------------------------------------------|---------------------|
| init <database>      | Creates a new database directory              | init studentDB      |
| enter <database>     | Enters an existing database                   | enter studentDB     |
| erase <database>     | Deletes a database from the root level        | erase oldDB         |
| exit                 | Exits from current context (table/db/root)    | exit                |

---

### 2. Table Commands

| Command                       | Description                                 | Example                                            |
|-------------------------------|---------------------------------------------|----------------------------------------------------|
| make \<table>(\<columns>)    | Creates a new table with column definitions | make users(id INT PRIMARY, name VARCHAR)           |
| choose \<table>               | Opens a table from the current database     | choose users                                       |
| erase \<table>                | Deletes a table from the current database   | erase users                                        |
| clean                         | Deletes all rows from the current table     | clean                                              |

---

### 3. Data Manipulation Commands

| Command                                               | Description                                | Example                                                      |
|-------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------|
| insert \<val1>, \<val2>, …                            | Inserts a new row into the current table   | insert 1, Alice, 9                                           |
| del \<id>                                             | Deletes a row by primary key               | del 1                                                        |
| del column(s)                                         | Deletes one or more columns                | del name                                                     |
| del where (\<condition>)                              | Deletes rows matching a condition          | del where (id = 5)                                           |
| change \<col> \<old> TO \<new> where (<condition>)    | Updates values based on a condition        | change name Alice TO Alicia where (id = 1)                   |

---

### 4. Query & Display Commands

| Command                        | Description                              | Example                                                             |
|--------------------------------|------------------------------------------|---------------------------------------------------------------------|
| describe                       | Displays the table’s schema              | describe                                                            |
| list                           | Lists databases (at root) or tables      | list                                                                |
| show                           | Displays table data                      | show head, show limit 10, show id, name where (grade > 8)           |

**Show command variations:**

- show head – Displays the first 5 rows  
- show limit N – Displays the first N rows  
- show limit ~N – Displays the last N rows  
- show \<columns> – Displays specified columns  
- show \<columns> where (\<condition>) – Displays filtered columns

---

### 5. Transaction & Utility Commands

| Command     | Description                          |
|-------------|--------------------------------------|
| commit      | Saves current changes to disk        |
| rollback    | Reverts all unsaved changes          |
| close       | Closes the currently open table      |
| help        | Displays available command list      |

---

## Example Workflow

### Step 1: Creating a Database and Table

    init schoolDB
    enter schoolDB
    make students (id INT PRIMARY, name STRING, grade INT)

### Step 2: Inserting and Viewing Data

    choose students
    insert (1, Alice, 9)
    insert (2, Bob, 8)
    show *

**Expected Output:**

    id | name  | grade
    ---+-------+------
    1  | Alice | 9
    2  | Bob   | 8

### Step 3: Updating and Deleting Data

    change grade 8 TO 9 where name = "Bob"
    del 1
    show *

**Expected Output:**

    id | name | grade
    ---+------+------
    2  | Bob  | 9

---

## Notes and Best Practices

- All commands are case-insensitive.
- Use commit frequently to persist data to disk.
- Use rollback to undo unsaved operations.
- Table-level operations (make, choose, insert, etc.) must be performed within an active database.
- Ensure that your table has a defined primary key for consistency in operations like del and change.

---

## Support and Contributions

For assistance, bug reports, or feature suggestions:

- Use the help command inside the CLI to view the list of supported commands.
- Open an issue on the project’s repository if hosted on a platform like GitHub or GitLab.
- Contributions are welcome. Please follow clean code practices and document any added functionality clearly in the code and README.