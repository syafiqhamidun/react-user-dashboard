# React User Dashboard

A modern, responsive user directory application built with React, TypeScript, and Vite. This application fetches user data from JSONPlaceholder API and provides an elegant interface for browsing and filtering users with real-time search capabilities.

## ✨ Features

- 🔍 **Real-time Search**: Filter users by name, email, or username
- 🏙️ **Location Filter**: Filter users by city
- 🏢 **Company Filter**: Filter users by company
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and build times
- 🎨 **Modern UI**: Gradient backgrounds, smooth animations, and hover effects
- 🔧 **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

This project is built with the following technologies:

### Core Framework
- **[React 19](https://react.dev/)** - The latest version of React for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking for better developer experience
- **[Vite](https://vitejs.dev/)** - Next generation frontend build tool for fast development

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Shadcn/UI](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library with IoIcons5 iconset

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting for consistent code quality
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

### API
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** - Fake REST API for testing and prototyping

## 📁 Project Structure

```
react-user-dashboard/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/            # Reusable React components
│   │   ├── ui/                # Shadcn/UI components
│   │   │   └── select.tsx     # Select dropdown component
│   │   ├── InfoItem.tsx       # Component for displaying user information items
│   │   ├── UserCard.tsx       # Individual user card component
│   │   ├── UserFilters.tsx    # Filter controls component
│   │   └── UserList.tsx       # List container for user cards
│   ├── constants/             # Application constants
│   │   └── colors.ts          # Color scheme definitions
│   ├── hooks/                 # Custom React hooks
│   │   ├── useUser.ts         # Hook for fetching user data
│   │   └── useUserFilter.ts   # Hook for managing filter state
│   ├── services/              # API and external service calls
│   │   └── api.ts             # User API functions
│   ├── types/                 # TypeScript type definitions
│   │   └── User.ts            # User-related type definitions
│   ├── assets/                # Static assets
│   │   └── react.svg          # React logo
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles and Tailwind imports
│   └── vite-env.d.ts          # Vite environment type definitions
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # TypeScript config for application
├── tsconfig.node.json         # TypeScript config for Node.js
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-user-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

#### Development Mode
Start the development server with hot module replacement:

```bash
npm run dev
```
or
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

#### Build for Production
Create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```

#### Preview Production Build
Preview the production build locally:

```bash
npm run preview
```
or
```bash
yarn preview
```

#### Code Quality

**Lint the code:**
```bash
npm run lint
```

**Format the code:**
```bash
npm run format
```

## 🎯 Key Components

### UserCard
Displays individual user information in a beautiful card format with:
- User name and username
- Email with mailto link
- City location
- Company information
- Phone with tel link
- Website with external link

### UserFilters
Provides filtering capabilities:
- Search input for real-time text filtering
- City dropdown filter
- Company dropdown filter
- Clear filters functionality

### Custom Hooks
- **useUser**: Manages user data fetching with loading and error states
- **useUserFilter**: Handles all filtering logic and state management

## 🎨 Styling Features

- **Gradient backgrounds** with animated effects
- **Backdrop blur** effects for modern glass-morphism design
- **Smooth hover animations** and transitions
- **Responsive grid layout** that adapts to different screen sizes
- **Color-coded information items** with consistent theming

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (large screens)
- Tablets (medium screens)
- Mobile phones (small screens)

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins configured in `vite.config.ts`.

### TypeScript Configuration
TypeScript is configured with strict type checking and modern ES modules support across three configuration files for different environments.

### Tailwind CSS
Tailwind CSS 4 is integrated via the Vite plugin for optimal performance and development experience.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
