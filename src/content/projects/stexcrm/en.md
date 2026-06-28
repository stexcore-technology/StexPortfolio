# StexCRM

**A flexible CRM that adapts to your business, not the other way around.**
Most CRMs force you to work with their fields and their structure. StexCRM lets you **define your own data** and build visual forms without writing a single line of code.

> Live in production · [stexcrm.com](https://stexcrm.com)

---

## ✨ What it solves

Traditional CRMs are rigid: if your business doesn't fit their model, you suffer. StexCRM flips the logic with a **dynamic object system**: you define what data to store and how it relates, and the platform adapts.

---

## 🚀 Key features

- **Dynamic object system** — Define data schemas and custom fields without modifying code.
- **Drag-and-drop form builder** — Create public forms by dragging and dropping, powered by DnD Kit.
- **Multi-team workspaces** — Role-based access control (owner, admin, member) with isolated workspaces.
- **Email notifications** — Configurable SMTP for OTP codes, password resets and custom alerts.
- **Secure authentication** — Sessions with Auth.js (NextAuth v5), OTP verification and password recovery.
- **Developer portal with API** — Tokens with granular scopes (`records:read`, `records:write`, …) for programmatic access.

---

## 🛠️ Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | Material UI v7 + MUI X Data Grid |
| Drag & Drop | DnD Kit |
| Authentication | Auth.js (NextAuth v5) |
| Database | PostgreSQL + Drizzle ORM |
| Validation | Zod |
| Deployment | Docker + Dokploy |

---

## 🔌 API access

Each workspace can issue scoped tokens to integrate with other systems:

```bash
curl https://stexcrm.com/api/records \
  -H "Authorization: Bearer stx_your_token_here"
```

---

## 🔒 Security

- Password hashing with **bcrypt** (cost factor 12 for user-initiated changes).
- Single-use OTP codes expiring in 10 minutes.
- Attempt throttling with exponential backoff (1, 5, 10, 20, 60 minutes).
- Functional and strictly necessary cookies only — **no tracking**.

---

## 📦 Status

**Live in production** (v1.0.0). Authentication, workspace management and the API developer portal are fully operational.
