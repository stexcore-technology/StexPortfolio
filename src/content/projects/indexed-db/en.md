# @stexcore/indexed-db

**A database-like structure for managing data in the browser.**
A typed layer over the IndexedDB API that lets you work with tables and perform CRUD operations and conditional queries, abstracting away the complexity of IndexedDB.

> Open-source library · [npm](https://www.npmjs.com/package/@stexcore/indexed-db)

---

## 📖 Description

This JavaScript library provides a database-like structure for managing data in the browser. It serves as a layer on top of IndexedDB, letting you interact with data as tables and perform common operations such as CRUD (create, read, update, delete) and conditional queries.

It is built with **strong typing** to ensure data integrity and validation, making it a robust solution for client-side data management.

---

## 🚀 Features

- **CRUD operations** — `findOne`, `findAll`, `insert`, `update`, `delete`, `count`.
- **Conditional queries** — use `where` to filter records based on specific criteria.
- **Pagination** — `limit` and `offset` for efficient data retrieval.
- **Table schemas** — define structures using JavaScript objects, specifying each table's fields.
- **Strong typing** — validate data types to minimize runtime errors.

---

## 📦 Installation

```bash
npm install @stexcore/indexed-db
```

---

## 🛠️ Usage

### 1. Create a database instance

```ts
import { IndexedDB } from "@stexcore/indexed-db";

const database = new IndexedDB("stexcore", {
  users: {
    id: { type: "number", primarykey: true, autoincrement: true },
    username: { type: "string", unique: true },
    phone: { type: "string", allow_null: true },
  },
});
```

### 2. Get records

```ts
const userTable = await database.getTable("users");
const records = await userTable.findAll();
console.log("Searched records:", records);
```

### 3. Insert records

```ts
const users = await database.getTable("users");

await users.insert([
  { username: "stexcore", phone: null },
  { username: "technology", phone: "+1 213 396 0066" },
]);
```

### 4. Update records

```ts
const users = await database.getTable("users");

const { n_affected } = await users.update(
  { phone: null },
  { where: { username: "stexcore" } },
);
console.log("Records updated:", n_affected);
```

### 5. Delete records

```ts
const users = await database.getTable("users");

const { n_affected } = await users.delete({ where: { username: "stexcore" } });
console.log("Records deleted:", n_affected);
```

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/stexcore/indexed-db/blob/main/LICENCE) file for details.
