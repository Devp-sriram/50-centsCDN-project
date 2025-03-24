# Dynamic Dashboard with Authentication

![Dashboard Preview](public/screenshot.png) <!-- Add a screenshot if available -->

A fully functional dashboard with JWT authentication, API data fetching, and responsive design built with Next.js and Tailwind CSS.

## Features

- 🔒 JWT Authentication (Login/Logout)
- 📊 Dynamic data fetching from JSONPlaceholder API
- 🔍 Search and filter functionality
- 📱 Fully responsive layout
- 🔄 Client-side pagination
- 🎨 Tailwind CSS styling with hover effects
- ⚡ Optimized performance with static generation

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Mock JWT with localStorage
- **API**: JSONPlaceholder

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dynamic-dashboard.git
Navigate to project directory:

```bash
Copy
cd dynamic-dashboard
Install dependencies:
```
```
```
```bash
Copy
npm install
Running the App
Start development server:
```
```bash
Copy
npm run dev
Open your browser at:
```
```bash
Copy
http://localhost:3000
Build for Production
```

```bash
Copy
npm run build && npm start
Project Structure
```

```bash
Copy
.
├── components/            # Reusable UI components
├── context/               # Auth context provider
├── pages
│   ├── _app.tsx
│   ├── dashboard.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── login.tsx
         # Login page
├── public/                # Static assets
├── styles/                # Global styles
├── utils/                 # Helper functions
└── types/                 # TypeScript types
```

```bash
Key Implementation Details
Authentication: JWT token stored in localStorage with route protection

Data Fetching: getStaticProps for initial data with client-side filtering

Pagination: 5 items per page with dynamic controls

Error Handling: Graceful error states for API failures

Responsive Design: Mobile-first Tailwind implementation

Usage Instructions
Login Page:

Enter any email (valid format required)

Password must be at least 6 characters

Mock token will be generated on successful login

Dashboard:

Displays paginated API data

Search by title or ID

Click logout in header to end session

Deployment
Deployed on Vercel:
Vercel

Future Improvements
Add dark mode toggle

Implement real backend API

Add user profile section

Implement data caching

Credits
Built with ❤️ by sriram
https://www.linkedin.com/in/devp-sriram/


