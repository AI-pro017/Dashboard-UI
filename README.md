# Beautiful Dashboard Interface

A modern, responsive dashboard interface built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design** - Modern UI with gradient backgrounds and smooth animations
- 🌙 **Dark/Light Mode** - Toggle between dark and light themes
- 📊 **Dashboard Stats** - Key metrics displayed in beautiful cards
- 👥 **User Management** - User table with role and status indicators
- 📈 **Analytics Page** - Placeholder for analytics and charts
- ⚙️ **Settings Page** - Comprehensive settings interface
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Sidebar Navigation** - Clean and intuitive navigation
- 👤 **Profile Header** - User profile with theme toggle

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Theme**: Custom dark/light mode implementation

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── analytics/         # Analytics page
│   ├── users/            # Users management page
│   ├── settings/         # Settings page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Dashboard home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── ui/              # UI components (Button, Card, etc.)
│   ├── sidebar.tsx      # Sidebar navigation
│   ├── header.tsx       # Header with profile
│   ├── dashboard-stats.tsx  # Dashboard statistics cards
│   └── recent-activity.tsx  # Recent activity component
```

## Key Components

### Dashboard Stats
- Revenue, subscriptions, sales, and active users metrics
- Trend indicators with color coding
- Beautiful card layout with icons

### Recent Activity
- User activity feed with status indicators
- Avatar initials and timestamps
- Status badges (completed, pending, failed)

### User Management
- User table with role and status
- Avatar initials for each user
- Role-based color coding

### Settings
- Profile settings
- Notification preferences
- Security settings
- Language and timezone preferences

## Customization

The dashboard is built with a modular component system, making it easy to customize:

- **Colors**: Update CSS variables in `globals.css`
- **Layout**: Modify components in `src/components/`
- **Data**: Replace dummy data with real API calls
- **Styling**: Use Tailwind CSS classes for quick styling changes

## Features to Add

- [ ] Real data integration
- [ ] Charts and graphs (using libraries like Chart.js or Recharts)
- [ ] User authentication
- [ ] Real-time updates
- [ ] Export functionality
- [ ] Advanced filtering and search
- [ ] Mobile menu
- [ ] Notifications system

## License

This project is open source and available under the [MIT License](LICENSE).
