# Dashboard UI

A clean admin dashboard layout built with Next.js 15, TypeScript and Tailwind CSS.

It's a front end only. All the numbers, users and activity are dummy data, so it works as a starting point for an admin panel or a SaaS dashboard that you hook up to your own API later.

Live demo: https://my-app-teal-zeta-31.vercel.app

## What's in it

- A home page with stat cards for revenue, subscriptions, sales and active users, each with a trend indicator.
- A recent activity feed with avatars, timestamps and status badges.
- A users page with a table showing each person's role and status.
- A settings page with sections for profile, notifications, security, language and timezone.
- An analytics page that's ready for charts.
- A sidebar for navigation and a header with the profile menu and a dark/light mode toggle.
- A responsive layout that works on desktop, tablet and mobile.

## Running it locally

```bash
git clone https://github.com/AI-pro017/Dashboard-UI.git
cd Dashboard-UI
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
src/
  app/
    page.tsx          Dashboard home
    analytics/        Analytics page
    users/            User table
    settings/         Settings page
  components/
    sidebar.tsx       Side navigation
    header.tsx        Top bar with profile and theme toggle
    dashboard-stats.tsx
    recent-activity.tsx
    ui/               Button, card and theme toggle
```

## Making it your own

Colors live in `src/app/globals.css`, and every section is its own component in `src/components`, so you can swap pieces out without touching the rest. To use real data, replace the hardcoded sample data in the components and pages with calls to your API.

Things I'd like to add next are charts on the analytics page, authentication, search and filtering on the users table, and a mobile menu.
