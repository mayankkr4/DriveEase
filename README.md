# DriveEase - Premium Car Rental Platform

DriveEase is a full-stack, premium car rental SaaS platform built with modern web technologies. It supports Customers, Car Owners, and Admins with a seamless booking and management experience.

## Technology Stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS v4, Framer Motion, Zustand
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Glassmorphism, Dark Mode Support, Fully Responsive

## Features

- **Customer Portal:** Browse cars, advanced filtering, instant booking, checkout, and dashboard.
- **Owner Portal:** List cars, manage bookings, and view earnings.
- **Admin Portal:** Platform overview, user management, and car approvals.
- **Premium UI:** Smooth animations, glassmorphism design, and loading skeletons.

---

## Installation & Local Development

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas cluster)

### 1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd DriveEase
\`\`\`

### 2. Backend Setup
\`\`\`bash
cd backend
npm install
\`\`\`
- Rename `.env.example` to `.env` and fill in your MongoDB URI and JWT Secret.
- Start the development server:
\`\`\`bash
npm run dev
\`\`\`
The backend API will run on `http://localhost:5001/api`.

### 3. Frontend Setup
Open a new terminal window.
\`\`\`bash
cd frontend
npm install
\`\`\`
- Rename `.env.example` to `.env.local` and configure your API URLs.
- Start the Next.js development server:
\`\`\`bash
npm run dev
\`\`\`
The frontend will run on `http://localhost:3000`.

---

## Deployment Guide

### Backend Deployment (Render / Heroku / DigitalOcean)
1. Push the `backend` folder to a GitHub repository.
2. Connect the repository to Render (Web Service).
3. Set the Build Command to `npm install && npm run build`.
4. Set the Start Command to `npm start`.
5. Add all Environment Variables (`MONGO_URI`, `JWT_SECRET`, etc.) in the Render dashboard.

### Frontend Deployment (Vercel)
1. Push the `frontend` folder to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Next.js framework.
4. Add the `NEXT_PUBLIC_API_URL` environment variable pointing to your deployed backend URL.
5. Click **Deploy**.

---

## Testing

For manual testing, start both servers locally and navigate to `http://localhost:3000`.
- **Register** a new account as a Customer.
- Explore the **Cars** page and test the booking flow.
- Navigate to the **Dashboard** to view your reservations.

## License
MIT License.
