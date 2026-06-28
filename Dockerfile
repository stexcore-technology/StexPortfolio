# 🧱 Stage 1: Builder
FROM node:24-alpine3.21 AS builder

WORKDIR /app

# Native build toolchain required to compile sqlite3 against musl (Alpine
# has no prebuilt binary for musl, so it must be built from source).
RUN apk add --no-cache python3 make g++

# Copy only what's needed to install dependencies
COPY package.json package-lock.json ./

RUN npm ci

# Copy the rest of the source code
COPY . .

# Run the build process
RUN npm run build

# Drop dev dependencies but keep the compiled native modules (sqlite3).
RUN npm prune --omit=dev

# 🧼 Stage 2: Final runtime image
FROM node:24-alpine3.21 AS runner

WORKDIR /app

ENV NODE_ENV=production

# Runtime shared lib the compiled sqlite3 addon links against.
RUN apk add --no-cache libstdc++

# Copy build artifacts and the already-compiled production node_modules.
# node_modules is reused from the builder so the native sqlite3 binding
# (built for this exact node/musl/arch) ships intact — no rebuild needed.
COPY --from=builder /app/server ./server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "server/entry.express"]
