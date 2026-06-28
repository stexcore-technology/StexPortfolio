# StexBingo

**Real-time multiplayer Bingo, ready to play from the browser.**
StexBingo lets you host and play live Bingo games with every player synchronized instantly and wins confirmed on the server.

> Beta · [stexbingo.com](https://stexbingo.com)

---

## ✨ What it is

StexBingo is a multi-organization SaaS platform for **hosting and playing live Bingo**. Each organization gets its own branded subdomain where it can manage games and welcome players in real time. It is an **entertainment and organization tool**: it does not process bets or prize payments.

---

## 🚀 Key features

- **Real-time games** — WebSocket synchronization (Socket.io): every called number reaches all players instantly, with a full state snapshot replayed on reconnect.
- **Server-validated wins** — A bingo is confirmed on the backend: the claimed board must complete the configured pattern using only numbers that were actually called. The first valid claim wins and the game auto-closes. Clients can't fake a bingo.
- **Intelligent card generation** — Boards are generated fairly, and the host draws numbers server-side with no repeats.
- **Custom win patterns** — Define which shape must be completed to win through configurable masks.
- **Multi-organization isolation** — A branded subdomain per organization, with secure cross-subdomain auth handoff.
- **Secure auth** — Sign-up with 6-digit OTP verification, single-use password reset, and JWT sessions in an httpOnly cookie.

---

## 🏗️ Architecture

A monorepo managed with **pnpm workspaces + Turborepo**, organized into two apps:

- **`apps/server`** — A **Fastify v5** API with **Socket.io** for real time. It handles authentication, game logic, and win validation. Room access is authorized per game via short-lived tickets.
- **`apps/web`** — A **Next.js 16** (App Router) frontend with **Material UI**, featuring a public landing, a player portal, and a per-organization management dashboard.

---

## 🛠️ Stack

| Layer | Technology |
|-------|-----------|
| Backend | Fastify v5 + Socket.io |
| Auth | JWT (httpOnly cookie) via @fastify/jwt |
| Email | Nodemailer (SMTP) — OTP & reset |
| Hardening | @fastify/helmet + @fastify/rate-limit |
| Database | PostgreSQL + Drizzle ORM |
| Validation | Zod |
| Frontend | Next.js 16 (App Router) + Material UI |
| Monorepo | pnpm workspaces + Turborepo |

---

## 📦 Status

**Pre-alpha / beta** (`prealpha-0.0.1`). The product is in active development and is **free during beta**. StexBingo is an entertainment and organization tool: it **does not handle bets or prize payments**.
