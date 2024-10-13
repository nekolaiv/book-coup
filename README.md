# Library Management System

## Overview
The Library Management System (LMS) is a web application designed to streamline the management of library books and user accounts. It allows administrators to manage books and track borrowing activities while providing students with the ability to borrow books efficiently.

## Features

### CRUD Operations
- **Book ID Generation**: Each book ID is automatically generated based on specific details:
  - **TH**: First two letters of the title
  - **FEB**: Month published
  - **(2)**: Day added to the system
  - **2022**: Year published
  - **FIC**: Category of the book
  - **00001**: Unique identifier for each book

### User Roles
- **Admin**: Manages book records and borrowing lists.
- **User**: Students can borrow books.

### Constraints
- Students may borrow a maximum of **2 books** for up to **7 days** (including weekends).
- A fee of **10 PHP per day** applies for overdue books.
- Archived books cannot be borrowed, and books cannot be deleted from the system.

## User Tasks

### Admin Tasks
- Add new books
- Archive books
- Manage the list of borrowed books

### User Tasks
- Browse and search for books
- Fill out a form to borrow a book

## User Interface

### Admin Interface
- **Add Book Page**: For entering new book details.
- **Books Table**: Displays public and archived books with actions to archive or publicize. 
  - **Columns**: ID, Title, Publication Date, Category, Action
- **Borrowers Table**: Tracks borrowed books with:
  - **Columns**: Count, Full Name, Sex, Age, Address, Contact Number, Book ID Borrowed

### User Interface
- **Library Page**: Browse and search for books with categorized dropdowns and a section for currently borrowed books.
- **Borrow Book Page**: Form to fill out with information and book ID/title.
- **User Book Borrowed Section**: Displays currently borrowed books.

## Technologies Used
- HTML
- CSS
- JavaScript

## Cloning Instructions
To clone this repository, follow these steps:

1. Open your terminal (command prompt).
2. Navigate to the directory where you want to clone the project.
3. Run the following command:

   ```bash
   git clone https://github.com/nekolaiv/book-coup.git
   ```

4. Navigate into the cloned directory:

   ```bash
   cd library-management-system
   ```

5. Open the project in your preferred code editor.

## License
This project is licensed under the MIT License. See the [LICENSE](License) file for details.

Disclaimer: This project idea is inspired by existing library management systems and is not an original concept.
