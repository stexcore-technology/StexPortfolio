# StexCRM

**Un CRM flexible que se adapta a tu negocio, no al revés.**
La mayoría de los CRM te obligan a trabajar con sus campos y su estructura. StexCRM te deja **definir tus propios datos** y construir formularios visuales sin escribir una sola línea de código.

> Plataforma en producción · [stexcrm.com](https://stexcrm.com)

---

## ✨ ¿Qué resuelve?

Los CRM tradicionales son rígidos: si tu negocio no encaja en su modelo, sufrís. StexCRM invierte la lógica con un **sistema de objetos dinámicos**: vos definís qué datos guardar y cómo se relacionan, y la plataforma se adapta.

---

## 🚀 Características principales

- **Sistema de objetos dinámicos** — Define esquemas de datos y campos personalizados sin modificar código.
- **Constructor de formularios drag-and-drop** — Crea formularios públicos arrastrando y soltando, gracias a DnD Kit.
- **Espacios de trabajo multi-equipo** — Control de acceso por roles (propietario, administrador, miembro) con espacios aislados.
- **Notificaciones por correo** — SMTP configurable para códigos OTP, restablecimiento de contraseña y avisos personalizados.
- **Autenticación segura** — Sesiones con Auth.js (NextAuth v5), verificación OTP y recuperación de contraseña.
- **Portal de desarrolladores con API** — Tokens con permisos granulares (`records:read`, `records:write`, …) para acceso programático.

---

## 🛠️ Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | Material UI v7 + MUI X Data Grid |
| Drag & Drop | DnD Kit |
| Autenticación | Auth.js (NextAuth v5) |
| Base de datos | PostgreSQL + Drizzle ORM |
| Validación | Zod |
| Despliegue | Docker + Dokploy |

---

## 🔌 Acceso por API

Cada espacio de trabajo puede emitir tokens con permisos acotados para integrarse con otros sistemas:

```bash
curl https://stexcrm.com/api/records \
  -H "Authorization: Bearer stx_tu_token_aqui"
```

---

## 🔒 Seguridad

- Hash de contraseñas con **bcrypt** (factor de costo 12 para cambios de usuario).
- Códigos OTP de un solo uso con expiración de 10 minutos.
- Límite de intentos con backoff exponencial (1, 5, 10, 20, 60 minutos).
- Solo cookies funcionales y estrictamente necesarias — **sin rastreo**.

---

## 📦 Estado

**En producción** (v1.0.0). Autenticación, gestión de espacios de trabajo y portal de API completamente operativos.
