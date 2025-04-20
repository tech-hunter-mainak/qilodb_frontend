# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

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
| make <table>(<columns>)       | Creates a new table with column definitions | make users(id INT PRIMARY, name VARCHAR)           |
| choose <table>                | Opens a table from the current database     | choose users                                       |
| erase <table>                 | Deletes a table from the current database   | erase users                                        |
| clean                         | Deletes all rows from the current table     | clean                                              |

---

### 3. Data Manipulation Commands

| Command                                               | Description                                | Example                                                      |
|-------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------|
| insert <val1>, <val2>, …                              | Inserts a new row into the current table   | insert 1, Alice, 9                                           |
| del <id>                                              | Deletes a row by primary key               | del 1                                                        |
| del column(s)                                         | Deletes one or more columns                | del name                                                     |
| del where (<condition>)                               | Deletes rows matching a condition          | del where (id = 5)                                           |
| change <col> <old> TO <new> where (<condition>)       | Updates values based on a condition        | change name Alice TO Alicia where (id = 1)                   |

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
- show <columns> – Displays specified columns  
- show <columns> where (<condition>) – Displays filtered columns

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
    make students(id INT PRIMARY, name VARCHAR, grade INT)

### Step 2: Inserting and Viewing Data

    choose students
    insert 1, Alice, 9
    insert 2, Bob, 8
    show head

**Expected Output:**

    id | name  | grade
    ------------------
    1  | Alice | 9
    2  | Bob   | 8

### Step 3: Updating and Deleting Data

    change grade 8 TO 9 where (name = Bob)
    del 1
    show

**Expected Output:**

    id | name | grade
    -----------------
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