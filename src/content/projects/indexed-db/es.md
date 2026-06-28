# @stexcore/indexed-db

**Una estructura similar a una base de datos para gestionar datos en el navegador.**
Una capa tipada sobre la API de IndexedDB que te permite trabajar con tablas y realizar operaciones CRUD y consultas condicionales, abstrayendo la complejidad de IndexedDB.

> Librería de código abierto · [npm](https://www.npmjs.com/package/@stexcore/indexed-db)

---

## 📖 Descripción

Esta biblioteca de JavaScript proporciona una estructura similar a una base de datos para gestionar datos en el navegador. Sirve como una capa sobre IndexedDB, permitiendo interactuar con los datos en forma de tablas y realizar operaciones comunes como CRUD (crear, leer, actualizar, eliminar) y consultas condicionales.

Está construida con **tipado fuerte** para garantizar la integridad y validación de los datos, lo que la convierte en una solución robusta para la gestión de datos del lado del cliente.

---

## 🚀 Características

- **Operaciones CRUD** — `findOne`, `findAll`, `insert`, `update`, `delete`, `count`.
- **Consultas condicionales** — usa `where` para filtrar registros según criterios específicos.
- **Paginación** — `limit` y `offset` para una recuperación eficiente de datos.
- **Esquemas de tablas** — define estructuras con objetos de JavaScript, especificando los campos de cada tabla.
- **Tipado fuerte** — valida tipos de datos para minimizar errores en tiempo de ejecución.

---

## 📦 Instalación

```bash
npm install @stexcore/indexed-db
```

---

## 🛠️ Uso

### 1. Crear una instancia de base de datos

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

### 2. Buscar registros

```ts
const userTable = await database.getTable("users");
const records = await userTable.findAll();
console.log("Registros encontrados:", records);
```

### 3. Insertar registros

```ts
const users = await database.getTable("users");

await users.insert([
  { username: "stexcore", phone: null },
  { username: "technology", phone: "+1 213 396 0066" },
]);
```

### 4. Actualizar registros

```ts
const users = await database.getTable("users");

const { n_affected } = await users.update(
  { phone: null },
  { where: { username: "stexcore" } },
);
console.log("Registros actualizados:", n_affected);
```

### 5. Eliminar registros

```ts
const users = await database.getTable("users");

const { n_affected } = await users.delete({ where: { username: "stexcore" } });
console.log("Registros eliminados:", n_affected);
```

---

## 📝 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo [LICENSE](https://github.com/stexcore/indexed-db/blob/main/LICENCE) para más detalles.
