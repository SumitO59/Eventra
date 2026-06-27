Eventra
A full-stack event management platform built using the MERN stack for organizing, managing, and participating in college events. The application includes secure authentication, role-based access, event registrations, dashboards, analytics, certificate generation, and real-time notifications.

Tech Stack
Layer	Technology
Frontend	React + Vite + Tailwind CSS + Zustand + Axios
Backend	Node.js + Express.js
Database	MongoDB + Mongoose
Authentication	JWT + bcrypt
Image Storage	Cloudinary
Real-time	Socket.io
Email	Nodemailer
PDF	PDFKit
Deployment	Vercel + Render + MongoDB Atlas
Project Structure
eventra/
├── client/                 Frontend (React + Vite)
├── server/                 Backend (Express.js)
├── docs/                   Documentation & Screenshots
├── .env.example            Environment variables template
├── .gitignore
├── README.md
└── package.json
Features
Authentication
User Registration
Secure Login
JWT Authentication
Password Hashing
Role-Based Authorization
Event Management
Create, Update & Delete Events
Event Approval Workflow
Event Categories
Event Banner Uploads
Public Event Listings
Registration
Individual Registration
Team Registration
Registration Deadline Validation
Capacity Management
Waitlist Support
Dashboard
Student Dashboard
Organizer Dashboard
Administrator Dashboard
Event Analytics
Registration Statistics
Certificates
Generate PDF Certificates
Download Certificates
Certificate Verification
Notifications
Email Notifications
In-app Notifications
Real-time Updates
Planned Features
QR Code Attendance
Google OAuth
Calendar Integration
Payment Gateway
Event Feedback & Ratings
Dark Mode
Docker Support
CI/CD Pipeline
Setup
1. Clone Repository
git clone https://github.com/<your-username>/eventra.git
cd eventra
2. Backend
cd server
npm install
npm run dev
3. Frontend
cd client
npm install
npm run dev
4. Environment Variables
Create a .env file inside the server directory.

PORT=5000
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
EMAIL_USER=
EMAIL_PASS=
CLIENT_URL=http://localhost:5173
Development Roadmap
Phase	Module
Phase 1	Project Setup
Phase 2	Database Design
Phase 3	Authentication
Phase 4	Frontend Foundation
Phase 5	Event Management
Phase 6	Registration System
Phase 7	Dashboards
Phase 8	Media Uploads
Phase 9	Certificate System
Phase 10	Notification System
Phase 11	Search & Optimization
Phase 12	Deployment
Phase 13	Future Enhancements
Planned API
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate user
GET	/api/auth/profile	Get current user
POST	/api/events	Create event
GET	/api/events	Get all events
GET	/api/events/:id	Get event details
PATCH	/api/events/:id	Update event
DELETE	/api/events/:id	Delete event
POST	/api/registrations	Register for an event
GET	/api/registrations/my	User registrations
GET	/api/dashboard/student	Student dashboard
GET	/api/dashboard/organizer	Organizer dashboard
GET	/api/dashboard/admin	Administrator dashboard
POST	/api/certificates/:eventId	Generate certificate
GET	/api/notifications	Get user notifications
Project Status
🚧 Under Active Development

The project is being built phase by phase. Features and documentation will be updated as development progresses.

License
This project is developed for learning purposes and portfolio demonstration.