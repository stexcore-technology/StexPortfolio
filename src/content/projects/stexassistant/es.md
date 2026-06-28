# StexAssistant

**Un chat de IA privado y autocontenido, con tu propio modelo corriendo en local.**
StexAssistant ("Stex") es el asistente conversacional del ecosistema de Stexcore Technology: una experiencia de chat con streaming que usa un modelo **Ollama local** y se despliega completo con un solo comando.

> En desarrollo

---

## ✨ ¿Qué es?

StexAssistant es un chat de IA **privacy-first**: el modelo corre de forma **local** mediante Ollama, sin depender de ninguna API en la nube. Tus conversaciones no salen hacia servicios de terceros, porque toda la inferencia ocurre dentro de tu propia infraestructura.

Está pensado como una pieza autocontenida: front-end en Next.js + un modelo Ollama empaquetados juntos, listos para correr con un único `docker compose up`. El modelo se elige por completo a través de variables de entorno.

---

## 🚀 Características

- ⚡ **Respuestas en streaming**: la salida se renderiza token a token, con efecto de máquina de escribir.
- 📝 **Markdown enriquecido**: bloques de código con resaltado de sintaxis y botón para copiar.
- 🔄 **Agnóstico de modelo**: cambiá el modelo definiendo `OLLAMA_MODEL` en el entorno, sin necesidad de recompilar.
- 🛡️ **Seguridad endurecida**: CSP, verificación de origen, rate limiting por IP, límites de concurrencia, y un Ollama que **nunca** se expone públicamente.
- 🎨 **Diseño Silver Premium**: comparte el lenguaje visual de la landing de Stexcore.
- 📦 **Autocontenido**: despliegue completo con un solo `docker-compose`.

---

## 🛠️ Stack

| Capa            | Tecnología                          |
| --------------- | ----------------------------------- |
| Framework       | Next.js + React                     |
| Lenguaje        | TypeScript                          |
| Estilos         | TailwindCSS                         |
| Modelo de IA    | Ollama (local)                      |
| Markdown        | react-markdown + remark-gfm         |
| Resaltado       | highlight.js + rehype-highlight     |
| Despliegue      | Docker / docker-compose             |

---

## ⚡ Despliegue

Todo el sistema (app + modelo) levanta con un solo comando:

```bash
cp env.example .env        # ajustá si querés
docker compose up --build
```

En el primer arranque, el servicio de Ollama descarga el modelo indicado en `OLLAMA_MODEL` en un volumen persistente. Los arranques siguientes son instantáneos.

---

## 📦 Estado

**En desarrollo.** StexAssistant se construye dentro de Stexcore Technology, un equipo basado en Venezuela con clientes internacionales. El dominio documentado es [assistant.stexcore.net](https://assistant.stexcore.net).
