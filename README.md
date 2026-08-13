# Eventra

A full-stack **college event management platform** built with the MERN stack. Eventra allows students to discover and register for college events, while organizers can create, manage, and monitor their events through dedicated dashboards.

The project is designed with a production-oriented architecture, reusable frontend components, secure authentication, role-based authorization, RESTful APIs, database persistence, optimized assets, and reproducible demo data.

---

## Features

### Authentication & Authorization

* User registration and login
* JWT-based authentication
* Password hashing with `bcryptjs`
* Persistent authenticated sessions
* Protected routes
* Role-based authorization
* Separate organizer and student capabilities

### Event Management

* Create events
* View all available events
* View event details
* Update events
* Delete events
* Event categories
* Event dates and timings
* Event locations
* Event pricing
* Event capacity
* Featured events
* Event status
* Organizer ownership checks

### Event Registration

* Register for events
* Cancel registrations
* Prevent duplicate registrations
* Capacity validation
* Detect full events
* Display attendee counts
* Display remaining seats
* Organizer-specific event controls

### Dashboards

Students and organizers have dashboard functionality appropriate to their roles.

Dashboard capabilities include:

* Quick statistics
* My Events
* My Registrations
* Recent activity
* Event deletion for authorized organizers
* Registration cancellation
* Empty-state handling

### Production & Demo Readiness

* Optimized local event images
* Removed development/test components
* Removed unused dependencies and imports
* Removed external placeholder image fallbacks
* Production frontend build
* Reproducible database seed script
* Demo users and event data
* Git-based development workflow

---

## Tech Stack

### Frontend

* **React 19**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Axios**
* **Lucide React**
* **React Icons**
* **JavaScript (ES Modules)**

### Backend

* **Node.js**
* **Express.js**
* **Mongoose**
* **MongoDB Atlas**
* **JWT**
* **bcryptjs**
* **dotenv**
* **Helmet**
* **CORS**
* **Morgan**
* **Compression**
* **Cookie Parser**

### Architecture

The application follows a modular **MVC-oriented MERN architecture**.

```text
Eventra
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── ...
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── seed/
│       └── seed.js
│
└── README.md
```

---

## Application Architecture

```text
                    ┌─────────────────────┐
                    │       React         │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                            Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Express.js      │
                    │      REST API       │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       Authentication      Event Logic      Registration
          & JWT             & CRUD            Logic
              │                │                │
              └────────────────┼────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Mongoose       │
                    │      ODM Layer      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    MongoDB Atlas    │
                    └─────────────────────┘
```

---

## Backend API

### Authentication

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| `POST` | `/api/auth/register` | Register a new user        |
| `POST` | `/api/auth/login`    | Authenticate a user        |
| `GET`  | `/api/auth/me`       | Get the authenticated user |

### Events

| Method   | Endpoint                       | Description                       |
| -------- | ------------------------------ | --------------------------------- |
| `GET`    | `/api/events`                  | Get available events              |
| `GET`    | `/api/events/:id`              | Get a specific event              |
| `POST`   | `/api/events`                  | Create an event                   |
| `PUT`    | `/api/events/:id`              | Update an event                   |
| `DELETE` | `/api/events/:id`              | Delete an event                   |
| `POST`   | `/api/events/:id/register`     | Register for an event             |
| `DELETE` | `/api/events/:id/register`     | Cancel registration               |
| `GET`    | `/api/events/my-events`        | Get events created by the user    |
| `GET`    | `/api/events/my-registrations` | Get events registered by the user |

Protected endpoints require an authenticated JWT.

---

## Data Model

### User

The user model supports both major application roles:

```text
User
├── name
├── email
├── password
└── role
    ├── student
    └── organizer
```

Passwords are hashed before persistence using `bcryptjs`.

### Event

Events contain information such as:

```text
Event
├── title
├── description
├── category
├── date
├── startTime
├── endTime
├── location
├── image
├── price
├── featured
├── capacity
├── organizer
├── registeredUsers
└── status
```

The `organizer` field references the user who created the event, while `registeredUsers` maintains the event's registration relationships.

---

## Authentication Flow

```text
User
 │
 ├── Register
 │      │
 │      ▼
 │   Password hashed
 │      │
 │      ▼
 │   User stored in MongoDB
 │
 └── Login
        │
        ▼
   Credentials verified
        │
        ▼
     JWT generated
        │
        ▼
   Authenticated requests
        │
        ▼
   Protected API routes
```

The frontend uses an Axios instance to attach the authentication token to protected requests.

---

## Event Registration Flow

```text
Student
   │
   ▼
View Event
   │
   ▼
Check registration state
   │
   ├── Already registered ──► Prevent duplicate registration
   │
   ├── Event full ──────────► Prevent registration
   │
   └── Seats available
            │
            ▼
       Register student
            │
            ▼
     Update event data
            │
            ▼
    Display updated count
```

The backend performs the important validation, so registration rules are not dependent solely on frontend state.

---

## Demo Data

Eventra includes a database seed script for creating a realistic development/demo environment.

The seed generates:

* **6 organizers**
* **250 students**
* **42 events**
* Student-event registration relationships

This allows the application to be demonstrated with realistic event and registration data instead of an empty database.

### Demo Credentials

**Organizer**

```text
Email: aarav@eventra.demo
Password: EventraDemo123
```

**Student**

```text
Email: rohan@eventra.demo
Password: EventraDemo123
```

These credentials are intended for local/demo environments.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js 22+
* npm
* MongoDB Atlas account
* Git

---

## Clone the Repository

```bash
git clone <repository-url>
cd Eventra
```

---

## Install Dependencies

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

---

## Environment Variables

Create the required environment files locally.

### Frontend

Create:

```text
client/.env
```

Configure the backend API URL using the variable expected by the Axios configuration:

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend

Create:

```text
server/.env
```

Configure the MongoDB connection and authentication settings required by the backend.

Example structure:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=development
```

Do not commit `.env` files or real credentials to Git.

---

## Seed Demo Data

From the `server` directory:

```bash
npm run seed
```

The seed script resets/populates the configured database with demo users, events, and registration relationships.

After seeding, the demo credentials above can be used to explore the application.

---

## Run the Application

### Start the Backend

From:

```text
server/
```

run:

```bash
npm run dev
```

The backend runs on the configured local port.

### Start the Frontend

From:

```text
client/
```

run:

```bash
npm run dev
```

Vite will start the frontend development server.

The frontend communicates with the backend through the configured `VITE_API_URL`.

---

## Production Build

The frontend has been verified with a successful production build:

```bash
npm run build
```

The build output is generated by Vite and can be deployed to a suitable static hosting service.

A production build was tested as part of the final production-polish phase.

---

## Production Polish

Before deployment, the project went through a production-readiness cleanup.

### Removed Development Artifacts

The following development/test files were removed:

```text
client/src/Test.jsx
client/src/pages/TestEvents.jsx
client/src/pages/Playground/ComponentPlayground.jsx
client/src/routes/AppRouter.tsx
client/src/pages/Events/EventCard.jsx
```

Unused `react-hot-toast` imports were also removed.

### Image Optimization

Local event images were optimized using ImageMagick.

Approximate final sizes:

```text
concert.jpg    ≈ 185 KB
hackathon.jpg  ≈ 189 KB
workshop.jpg   ≈ 200 KB
```

The frontend no longer relies on `placehold.co` fallbacks for event images.

### Validation

The project was checked with:

```bash
npm run build
git diff --check
```

The production build succeeds and `git diff --check` passes.

---

## Security Considerations

Eventra implements several application-level security measures:

* Password hashing with `bcryptjs`
* JWT-based authentication
* Protected API routes
* Role-based authorization
* Organizer ownership validation
* Backend-side registration validation
* Capacity checks
* Duplicate-registration prevention
* Environment variables for secrets
* Helmet for HTTP security headers
* CORS configuration
* Cookie parsing support

Production deployment should additionally use secure environment variables, HTTPS, appropriate MongoDB network access rules, and production-specific CORS configuration.

---

## Deployment Target

The next deployment target for Eventra is **Microsoft Azure**.

The intended deployment will separate the frontend and backend responsibilities appropriately:

```text
                    ┌─────────────────────┐
                    │      Users          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Azure Frontend    │
                    │      Hosting        │
                    └──────────┬──────────┘
                               │
                         HTTPS API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Azure Backend     │
                    │   Node + Express     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    MongoDB Atlas    │
                    └─────────────────────┘
```

The exact Azure services, deployment configuration, environment variables, build commands, startup commands, CORS settings, and networking configuration will be determined from the actual project structure during the deployment-preparation phase rather than assumed in advance.

---


## Future Enhancements

The following features are **not currently implemented** and are intentionally listed as future enhancements:

* Real-time notifications
* Socket.io integration
* Event reminders
* Email notifications
* Certificates
* Advanced analytics
* Team-based registration
* Waitlists
* Cloudinary or other dedicated media storage
* Advanced event search and filtering
* Payment gateway integration
* Event reviews and ratings
* Administrative analytics
* Advanced organizer management
* Automated deployment/CI-CD pipelines

These features should not be considered part of the current implementation.

---

## Development Workflow

The project follows a feature-oriented development workflow with separate branches used during development and integration.

The current production-polish branch is:

```text
production-polish
```

The latest production-polish commit is:

```text
f6016b8 chore: production polish and demo data
```

The branch has been pushed to the GitHub remote.

---

## Project Goals

Eventra was developed to demonstrate practical full-stack development skills, including:

* Building a complete MERN application
* Designing RESTful APIs
* Implementing authentication and authorization
* Working with MongoDB and Mongoose
* Managing frontend/backend integration
* Building reusable React components
* Handling real application state
* Implementing business rules on the backend
* Preparing an application for production deployment
* Working with Git and GitHub
* Creating reproducible demo environments
* Deploying a full-stack application to the cloud

---

## License

This project is intended primarily as a portfolio and learning project.

Add an appropriate open-source license here if the repository is intended to be distributed under one.
