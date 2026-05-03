# Laravel Sanctum Auth με Next.js (Combined Guide)

Αυτός ο οδηγός ενοποιεί το auth flow για Laravel Sanctum + Next.js για το setup:

- Backend: `audio-visual-core` (`http://audio-visual-core.test`)
- Frontend: Next.js (`http://web.audio-visual-core.test`)
- Auth mode: Sanctum session/cookie auth (SPA)

## 1. Core αρχή: same-site setup

Για local `http`, CSRF + session cookies δουλεύουν σωστά όταν frontend και backend ανήκουν στο ίδιο top-level domain.

Σωστό:

- Frontend: `web.audio-visual-core.test`
- Backend: `audio-visual-core.test`

Προβληματικό:

- Frontend: `audio-visual-web.test`
- Backend: `audio-visual-core.test`

## 2. Backend ρυθμίσεις (Laravel)

### 2.1 `.env`

```env
APP_URL=http://audio-visual-core.test

SESSION_DRIVER=cookie
SESSION_DOMAIN=.audio-visual-core.test
SESSION_SAME_SITE=lax
SESSION_SECURE_COOKIE=false

FRONTEND_URL=http://web.audio-visual-core.test
SANCTUM_STATEFUL_DOMAINS=web.audio-visual-core.test,web.audio-visual-core.test:3000
```

### 2.2 `config/cors.php`

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://web.audio-visual-core.test',
        'http://web.audio-visual-core.test:3000',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

### 2.3 `config/sanctum.php`

```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', '')),
```

### 2.4 Καθάρισμα config cache

```bash
php artisan optimize:clear
php artisan config:clear
```

## 3. Backend auth endpoints

Base origin:

```txt
http://audio-visual-core.test
```

Auth endpoints:

- `GET /sanctum/csrf-cookie`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` (protected)
- `POST /api/v1/auth/logout` (protected)

## 4. Frontend setup (Next.js)

### 4.1 Herd proxy (recommended for local domain)

```bash
herd proxy web.audio-visual-core http://127.0.0.1:3000
```

Άνοιξε το app από:

- `http://web.audio-visual-core.test`

### 4.2 Frontend env (`.env.local`)

```env
NEXT_PUBLIC_API_BASE_URL=http://audio-visual-core.test
```

### 4.3 Next config (`next.config.ts`)

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "audio-visual-web.test",
    "*.audio-visual-web.test",
    "web.audio-visual-core.test",
    "*.audio-visual-core.test",
  ],
};

export default nextConfig;
```

## 5. API client strategy

### 5.1 Axios variant

```ts
// lib/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});
```

### 5.2 Fetch variant (normalize base URL)

```ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

if (!API_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
}

const normalizedBaseUrl = API_BASE_URL.replace(/\/+$/, "");
export const API_V1_BASE_URL = normalizedBaseUrl.endsWith("/api/v1")
  ? normalizedBaseUrl
  : `${normalizedBaseUrl}/api/v1`;
```

## 6. Auth flow implementation

```ts
// lib/auth.ts
import { api } from "./api";

export type LoginPayload = {
  email: string;
  password: string;
  remember?: boolean;
};

export async function getCsrfCookie() {
  await api.get("/sanctum/csrf-cookie");
}

export async function login(payload: LoginPayload) {
  await getCsrfCookie();
  return api.post("/api/v1/auth/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
}

export async function me() {
  return api.get("/api/v1/auth/me");
}

export async function logout() {
  return api.post("/api/v1/auth/logout");
}
```

Αν χρησιμοποιείς `fetch`, για non-GET requests πρόσθεσε `X-XSRF-TOKEN` από το `XSRF-TOKEN` cookie.

## 7. UI usage παράδειγμα (client component)

```tsx
"use client";

import { useState } from "react";
import { login, me, logout } from "@/lib/auth";

export default function AuthDemo() {
  const [email, setEmail] = useState("frontend-test@example.com");
  const [password, setPassword] = useState("password123");
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  async function onLogin() {
    setError(null);
    try {
      await login({ email, password });
      const res = await me();
      setResult(res.data);
    } catch (e: any) {
      setError(e?.response?.data?.message ?? "Login failed");
    }
  }

  async function onLogout() {
    setError(null);
    try {
      await logout();
      setResult(null);
    } catch (e: any) {
      setError(e?.response?.data?.message ?? "Logout failed");
    }
  }

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>

      {error && <pre>{error}</pre>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
```

## 8. Route protection pattern (Next.js)

- Σε protected routes/layout: κάλεσε `getMe()`, και σε fail κάνε redirect σε `/login`.
- Στο login page: αν `getMe()` πετύχει, redirect σε `/dashboard`.

## 9. Client-side vs server-side requests

Για Sanctum session auth, τα requests πρέπει να γίνονται από browser context (`client-side`) ώστε cookies/CSRF να λειτουργούν φυσικά.

Για server-side requests στο Next χρειάζεται manual cookie forwarding.

## 10. Troubleshooting

### 10.1 `419 CSRF token mismatch`

Έλεγξε:

1. Έγινε πρώτα `GET /sanctum/csrf-cookie`
2. Υπάρχει `credentials: "include"` ή `withCredentials: true`
3. Στέλνεται `X-XSRF-TOKEN` (όπου απαιτείται)
4. Frontend host: `web.audio-visual-core.test`
5. `SESSION_DOMAIN=.audio-visual-core.test`
6. Έτρεξες `php artisan optimize:clear && php artisan config:clear`

### 10.2 `401 Unauthenticated`

Συνήθως λείπει το session cookie στο επόμενο protected request.

Έλεγχος στο DevTools Network:

- Login response: `Set-Cookie: laravel-session=...`
- Επόμενο `/api/v1/*` request: `Cookie: laravel-session=...`

### 10.3 CSRF network error

Έλεγξε:

- σωστό `NEXT_PUBLIC_API_BASE_URL`
- backend up/running
- DNS resolve για `audio-visual-core.test`

## 11. Local test user

```php
App\Models\User::updateOrCreate(
    ['email' => 'frontend-test@example.com'],
    ['name' => 'Frontend Test', 'password' => bcrypt('password123')]
);
```

Credentials:

- Email: `frontend-test@example.com`
- Password: `password123`

## 12. TL;DR

1. Frontend host: `http://web.audio-visual-core.test`
2. API base: `http://audio-visual-core.test`
3. Πάντα πρώτα `/sanctum/csrf-cookie`
4. Auth/API requests με credentials + CSRF header στα non-GET
5. Αν δεις `419` ή `401`, έλεγξε πρώτα cookies/headers στο Network tab

