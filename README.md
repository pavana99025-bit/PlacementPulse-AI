# PlacementPulse AI

A full-stack placement and career preparation platform built with React, Express, Node.js and MongoDB.

## Features
- JWT registration/login with bcrypt password hashing
- Job application tracker with CRUD, search, and status updates
- Dashboard analytics
- Resume analyzer (paste resume text; no upload dependency)
- Intelligent job matching using transparent weighted skill matching
- Mock interview coach with question generation and rubric-based answer feedback
- Personalized skill-gap roadmap
- Optional LLM integration via an OpenAI-compatible API endpoint; deterministic fallback works without an API key
- Backend tests using Node's test runner and Supertest

> AI outputs are coaching suggestions, not guarantees of hiring outcomes. Do not submit sensitive personal information you do not need to analyze.

## Requirements
- Node.js 20+
- MongoDB Community locally OR a MongoDB Atlas connection string
- npm

## Project structure
```text
PlacementPulseAI/
  server/
    src/
      config/db.js
      middleware/auth.js
      models/
      routes/
      services/
      app.js
      server.js
    tests/
    .env.example
    package.json
  client/
    src/
      api.js
      App.jsx
      main.jsx
      styles.css
    index.html
    package.json
    vite.config.js
  README.md
```

## 1. Configure backend
```bash
cd server
npm install
cp .env.example .env
```
Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/placementpulse
JWT_SECRET=replace-with-a-long-random-secret-at-least-32-characters
CLIENT_ORIGIN=http://localhost:5173
# Optional. Leave empty to use the local deterministic AI engine.
LLM_API_URL=
LLM_API_KEY=
LLM_MODEL=
```
Start MongoDB locally, or set `MONGODB_URI` to your Atlas connection string.

## 2. Configure frontend
In a second terminal:
```bash
cd client
npm install
```

## 3. Run
Terminal 1:
```bash
cd server
npm run dev
```
Terminal 2:
```bash
cd client
npm run dev
```
Open http://localhost:5173

## 4. Test backend
```bash
cd server
npm test
```

## API overview
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/applications`
- `POST /api/applications`
- `GET /api/applications/:id`
- `PUT /api/applications/:id`
- `DELETE /api/applications/:id`
- `GET /api/dashboard`
- `POST /api/ai/analyze-resume`
- `POST /api/ai/match-jobs`
- `POST /api/ai/interview`
- `POST /api/ai/roadmap`
- `GET /api/health`

All application and AI routes require `Authorization: Bearer <token>`.

## Security practices included
- Password hashing with bcrypt
- JWT expiry and backend secret
- Per-user ownership filtering for records
- Input validation and request size limits
- Helmet security headers
- CORS restricted to configured frontend origin
- Rate limiting on API routes
- AI prompt and output treated as untrusted; no secrets sent to the browser
- Never commit `.env`

## Important production improvements
Before public deployment, add refresh-token rotation or a secure httpOnly cookie strategy, stronger schema validation, audit logging, a production MongoDB user with least privilege, HTTPS, CI checks, and privacy/data-retention controls. This is a learning project scaffold, not a security audit.

## Suggested staged implementation
1. Run locally and verify health endpoint.
2. Register/login and verify a user is stored in MongoDB.
3. Create/edit/delete job applications.
4. Test resume analyzer and matching with sample text.
5. Complete mock interview and roadmap flows.
6. Run tests, take screenshots, and document decisions.
7. Push to GitHub; deploy only after local tests pass.

## Resume entry (edit to match actual implementation)
**PlacementPulse AI — Full-Stack Career Preparation Platform**
- Built a React and Express application with MongoDB-backed job tracking, JWT authentication and CRUD REST APIs.
- Implemented transparent skill matching, resume keyword analysis and personalized skill-gap roadmaps.
- Developed a mock interview workflow with rubric-based feedback and an optional LLM integration.
- Added API tests, environment-based configuration and setup documentation.
# to run backend
cd server
npm.cmd run dev
# to run frontend
cd client
npm.cmd run dev