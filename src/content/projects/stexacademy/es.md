# StexAcademy

**Una plataforma de cursos online estilo Platzi, pensada para el ecosistema stexcore.**
Aprender de verdad necesita una experiencia cuidada: lecciones claras, progreso que no se pierde y un certificado que vale. StexAcademy reúne todo eso en una sola plataforma.

> Plataforma en beta · [academy.stexcore.net](https://academy.stexcore.net)

---

## ✨ ¿Qué resuelve?

Montar una academia online suele implicar pegar herramientas sueltas: una para el video, otra para los exámenes, otra para emitir certificados. StexAcademy unifica el ciclo completo de aprendizaje —catálogo, inscripción, lecciones, evaluación y certificación— en un solo producto coherente, con un tema oscuro "Platinum-Silver" y una arquitectura por capas que mantiene las reglas de negocio limpias y testeadas.

---

## 🚀 Características

- **Multi-rol** — Tres roles bien definidos: estudiante (se inscribe y aprende), profesor (crea y publica cursos) y administrador (cura y modera todo el catálogo).
- **Tipos de lección** — Video (streaming protegido por inscripción mediante HTTP Range), teoría en Markdown y quizzes evaluables.
- **Progreso y reanudación** — Se registra el avance por lección y la última posición del video, para retomar exactamente donde lo dejaste.
- **Certificados verificables** — Se emiten automáticamente al completar todas las lecciones, con un serial único `STX-AC-XXXXXXXX` y una página pública de verificación.
- **Rutas de aprendizaje** — Hojas de ruta curadas que agrupan varios cursos en un recorrido ordenado.
- **Reseñas** — Los estudiantes inscritos pueden dejar una valoración de 1 a 5 estrellas con comentario.
- **Almacenamiento intercambiable** — Disco local por defecto, con una capa de abstracción que permite cambiar a S3 o Cloudflare R2 sin tocar el código de negocio.
- **Cuentas y seguridad** — Verificación de email por código de un solo uso (OTP), recuperación de contraseña y edición de perfil con avatar.

---

## 🛠️ Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | Material UI v7 + Emotion |
| Autenticación | Auth.js (NextAuth v5) |
| Base de datos | PostgreSQL + Drizzle ORM |
| Markdown | react-markdown + remark-gfm |
| Validación | Zod |
| Testing | Vitest + jsdom |
| Despliegue | Docker + PgBouncer |

---

## 📦 Estado

**En beta**, con un catálogo ya poblado: cursos de Lógica de Programación, Desarrollo Web, HTML, CSS, JavaScript, TypeScript, React y Node.js, organizados en rutas de Frontend y Backend. Las primeras lecciones de cada curso son vista previa abierta.

Quedan para más adelante la pasarela de pagos (el esquema de órdenes ya está preparado) y el transcodificado de video a HLS con CDN para streaming a escala de producción.
