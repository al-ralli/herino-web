# herino-web

Frontend React de la solution HERINO — interface client pour la gestion des logements et des surveillances.

---

## Stack technique

- **React 19** — interface utilisateur
- **TypeScript** — typage strict (`strict: true`)
- **Vite** — bundler et dev server
- **React Router v6** — routing avec guards par rôle
- **TanStack Query** — state serveur, cache et synchronisation
- **Zustand** — state client (session JWT)
- **Axios** — client HTTP avec intercepteurs
- **Tailwind CSS + shadcn/ui** — design system

---

## Variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
VITE_API_URL=http://localhost:3000
```

Par défaut, l'app pointe sur `http://localhost:3000` si la variable est absente.

---

## Lancement

```bash
npm install
npm run dev
```

L'app démarre sur `http://localhost:5173`.

---

## Structure

```
src/
├── api/
│   ├── clients/        Client Axios avec intercepteurs JWT et gestion 401
│   ├── endpoints.ts    Centralisation des URLs
│   ├── auth/           Service d'authentification
│   ├── properties/     Service de gestion des logements
│   └── surveillances/  Service de gestion des surveillances
├── components/
│   ├── ui/             Composants shadcn/ui
│   ├── property/       PropertyCard
│   ├── surveillance/   SurveillanceCard
│   └── ProtectedRoute  Guards de route par rôle
├── hooks/
│   └── queries/        Hooks TanStack Query (useMe, usePropertiesQuery…)
├── pages/
│   ├── public/         HomePage, LoginPage, RegisterPage
│   ├── client/         DashboardPage (rôle CLIENT)
│   └── admin/          Back-office (rôle ADMIN)
├── store/
│   └── auth.store.ts   Session utilisateur via Zustand
├── types/              Interfaces TypeScript (Property, Surveillance…)
└── router.tsx          Définition des routes et guards
```

---

## Routing et accès

| Route        | Accès        | Description                               |
|--------------|--------------|-------------------------------------------|
| `/`          | Public       | Page d'accueil                            |
| `/login`     | Non connecté | Connexion                                 |
| `/register`  | Non connecté | Inscription                               |
| `/dashboard` | CLIENT       | Dashboard avec surveillances et logements |
| `/admin`     | ADMIN        | Back-office administrateur                |

Les routes protégées redirigent vers `/login` si non authentifié. Les routes `/login` et `/register` redirigent vers `/dashboard` si déjà connecté.

---

## Choix techniques

**Séparation state serveur / state client** — TanStack Query gère tout ce qui vient de l'API (cache, refetch, loading states). Zustand est limité à la session utilisateur (token JWT persisté en localStorage).

**Intercepteurs Axios** — le token JWT est injecté automatiquement sur chaque requête. Une réponse 401 déclenche un logout automatique via le store Zustand.

**Feature-based** — les services API, hooks et composants sont organisés par domaine métier (properties, surveillances…) plutôt que par type technique.
