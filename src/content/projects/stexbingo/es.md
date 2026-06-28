# StexBingo

**Bingo multijugador en tiempo real, listo para jugar desde el navegador.**
StexBingo deja organizar y jugar partidas de bingo en vivo, con todos los jugadores sincronizados al instante y las victorias confirmadas en el servidor.

> En beta · [stexbingo.com](https://stexbingo.com)

---

## ✨ ¿Qué es?

StexBingo es una plataforma SaaS multi-organización para **organizar y jugar bingo en vivo**. Cada organización recibe su propio subdominio con marca, donde puede gestionar partidas y recibir jugadores en tiempo real. Es una herramienta de **entretenimiento y organización**: no procesa apuestas ni pagos de premios.

---

## 🚀 Características

- **Partidas en tiempo real** — Sincronización por WebSocket (Socket.io): cada número cantado llega al instante a todos los jugadores, con reenvío del estado completo al reconectar.
- **Victorias validadas en el servidor** — El bingo se confirma en el backend: el cartón reclamado debe completar el patrón configurado usando solo números realmente cantados. El primer reclamo válido gana y la partida se cierra sola. Los clientes no pueden falsear un bingo.
- **Generación inteligente de cartones** — Cartones generados de forma justa, y el anfitrión saca los números desde el servidor sin repeticiones.
- **Patrones de victoria personalizados** — Define qué figura debe completarse para ganar mediante máscaras configurables.
- **Aislamiento multi-organización** — Un subdominio con marca por organización, con traspaso de sesión seguro entre subdominios.
- **Autenticación segura** — Registro con verificación por código OTP de 6 dígitos, restablecimiento de contraseña de un solo uso y sesiones por JWT en cookie httpOnly.

---

## 🏗️ Arquitectura

Monorepo gestionado con **pnpm workspaces + Turborepo**, organizado en dos aplicaciones:

- **`apps/server`** — API en **Fastify v5** con **Socket.io** para el tiempo real. Maneja la autenticación, la lógica de juego y la validación de victorias. El acceso a las salas se autoriza por partida mediante tickets de corta duración.
- **`apps/web`** — Frontend en **Next.js 16** (App Router) con **Material UI**, con landing pública, portal del jugador y panel de gestión por organización.

---

## 🛠️ Stack

| Capa | Tecnología |
|------|-----------|
| Backend | Fastify v5 + Socket.io |
| Autenticación | JWT (cookie httpOnly) vía @fastify/jwt |
| Correo | Nodemailer (SMTP) — OTP y restablecimiento |
| Hardening | @fastify/helmet + @fastify/rate-limit |
| Base de datos | PostgreSQL + Drizzle ORM |
| Validación | Zod |
| Frontend | Next.js 16 (App Router) + Material UI |
| Monorepo | pnpm workspaces + Turborepo |

---

## 📦 Estado

**Pre-alpha / beta** (`prealpha-0.0.1`). El producto está en desarrollo activo y es **gratis durante la beta**. StexBingo es una herramienta de entretenimiento y organización: **no maneja apuestas ni pagos de premios**.
