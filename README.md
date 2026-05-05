# Sugarpanel Dashboard

A responsive admin dashboard built with React, Bootstrap, and json-server.

## Live Demo

- **Frontend:** https://task-for-units-sa.vercel.app
- **API:** https://task-for-units-sa.onrender.com

## Tech Stack

- React + Vite
- React Router DOM
- React Bootstrap + Bootstrap 5
- Recharts
- Axios
- json-server + json-server-auth
- Docker + Docker Compose

## Project Structure

src/
├── api/ # API service layer
├── components/ # Reusable components
│ ├── dashboard/
│ ├── login/
│ ├── products/
│ └── shared/
├── context/ # Auth context
├── hooks/ # Custom hooks
├── layouts/ # MainLayout
├── pages/ # Login, Dashboard, ProductList, ProductDetails
└── routes/ # App routes

## Run Locally

### Without Docker

```bash
# Install dependencies
npm install

# Start API
node server.cjs

# Start frontend
npm run dev
```

### With Docker

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- API: http://localhost:4000

## Login Credentials

Email: admin@sugarpanel.com
Password: 123456

## Build

```bash
npm run build
```
