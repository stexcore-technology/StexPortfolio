# StexAcademy

**A Platzi-style online courses platform, built for the stexcore ecosystem.**
Real learning needs a polished experience: clear lessons, progress that never gets lost, and a certificate that actually means something. StexAcademy brings all of that into a single platform.

> Beta · [academy.stexcore.net](https://academy.stexcore.net)

---

## ✨ What it solves

Running an online academy usually means duct-taping separate tools together: one for video, one for assessments, another to issue certificates. StexAcademy unifies the full learning cycle —catalog, enrollment, lessons, assessment and certification— into one coherent product, with a dark "Platinum-Silver" theme and a layered architecture that keeps business rules clean and tested.

---

## 🚀 Key features

- **Multi-role** — Three well-defined roles: student (enroll and learn), teacher (create and publish courses) and admin (curate and moderate the whole catalog).
- **Lesson types** — Video (enrollment-gated streaming over HTTP Range), theory in Markdown, and gradable quizzes.
- **Progress & resume** — Per-lesson progress and the last video position are tracked, so you pick up exactly where you left off.
- **Verifiable certificates** — Auto-issued when every lesson is completed, with a unique `STX-AC-XXXXXXXX` serial and a public verification page.
- **Learning paths** — Curated roadmaps that group several courses into an ordered track.
- **Reviews** — Enrolled students can leave a 1-to-5 star rating with a comment.
- **Swappable storage** — Local disk by default, with a storage abstraction that lets you switch to S3 or Cloudflare R2 without touching business code.
- **Accounts & security** — Email verification via one-time code (OTP), password reset, and profile editing with avatar upload.

---

## 🛠️ Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | Material UI v7 + Emotion |
| Authentication | Auth.js (NextAuth v5) |
| Database | PostgreSQL + Drizzle ORM |
| Markdown | react-markdown + remark-gfm |
| Validation | Zod |
| Testing | Vitest + jsdom |
| Deployment | Docker + PgBouncer |

---

## 📦 Status

**In beta**, with an already-populated catalog: courses on Programming Logic, Web Development, HTML, CSS, JavaScript, TypeScript, React and Node.js, organized into Frontend and Backend learning paths. The first lessons of each course are open previews.

Still deferred: the payment gateway (the orders schema is already wired) and HLS video transcoding with a CDN for production-grade streaming at scale.
