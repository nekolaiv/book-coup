# 📚 Book Coup

**Book Coup** is a modern and user-friendly Library Management System built with **Next.js**. It streamlines book tracking and borrowing processes, enabling administrators to efficiently manage library resources and allowing users to easily browse and borrow books.

---

## 🚀 Overview

Book Coup provides role-based access to ensure smooth operations:

* **Admins** manage book records, track borrowers, and maintain library data.
* **Users (Students)** can search the catalog and borrow books within borrowing limits.

---

## ✨ Key Features

### 🔁 Smart Book ID Generation

Each book is assigned a unique ID with the following format:

```
[TH][FEB][02][2022][FIC][00001]
```

Where:

* `TH`: First 2 letters of the title
* `FEB`: Month published
* `02`: Day added to system
* `2022`: Year published
* `FIC`: Category
* `00001`: Unique identifier

---

### 👥 User Roles

| Role      | Permissions                             |
| --------- | --------------------------------------- |
| **Admin** | Add/archive books, track borrowed books |
| **User**  | Search and borrow books                 |

---

### ⛔ Borrowing Constraints

* ✅ Max **2 books** per student
* 🕒 Borrowing duration: **7 days** (including weekends)
* 💸 Late fee: **₱10/day**
* 🚫 Archived books: Not available for borrowing
* 🔐 Books cannot be deleted for audit integrity

---

## 🧩 Admin Tasks

* ➕ Add new books
* 📦 Archive outdated books
* 📋 View and manage borrowers list

---

## 🔍 User Tasks

* 🗂️ Browse and search available books
* 📝 Fill out borrowing forms
* 📖 View borrowed books

---

## 🖥️ User Interface Overview

### Admin Dashboard

* **📘 Add Book Page** – Add new entries to the library
* **📚 Book Table** – View and manage books (public & archived)

  * Columns: Book ID, Title, Publication Date, Category, Action
* **📄 Borrowers Table** – Track all borrowings

  * Columns: #, Full Name, Sex, Age, Address, Contact, Book ID

### User View

* **📚 Library Page** – Browse and filter books by category
* **📝 Borrow Book Page** – Submit book borrowing requests
* **📦 Borrowed Books** – View user's current borrowed books

For more information, visit the [Book Coup Wiki Page](https://github.com/nekolaiv/book-coup/wiki).

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Languages**: HTML, CSS, JavaScript
* **Styling**: Tailwind CSS (optional future enhancement)
* **Version Control**: Git & GitHub

---

## 🤝 Getting Started and Contributing

We welcome community contributions!

Check the [How to Contribute](https://github.com/nekolaiv/book-coup/wiki/How-to-Contribute) page on wiki section.

Please follow our code style, semantics and keep features aligned with the project's goals.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

> *Disclaimer: This system is inspired by traditional library management solutions and was built for educational and practical use.*
