# Aroma Café Web Application

## Overview

Aroma Café is a full-stack web application designed to provide an engaging digital experience for a café business. The application features a modern, responsive UI built with React, Tailwind CSS, and Framer Motion, and a robust backend powered by Express.js and PostgreSQL.

## Features

- **Landing Page**: A welcoming introduction to Aroma Café, featuring a hero section, welcome message, and about section.
- **Menu Section**: Dynamic display of coffee, breakfast, lunch, and dessert items with images, descriptions, and prices.
- **Specials Section**: Highlighted menu items with tags (e.g., Bestseller, Vegetarian).
- **Cart Functionality**: Add/remove items, view cart, and prepare for checkout.
- **User Authentication**: Secure login and session management (if enabled).
- **Responsive & Animated UI**: Mobile-friendly, animated transitions, and modern design.

## Tech Stack

### Frontend
- **React.js**: Component-based UI development.
- **TypeScript**: Type safety across the codebase.
- **Tailwind CSS**: Utility-first CSS for rapid styling.
- **Framer Motion**: Animations and transitions.

### Backend
- **Node.js & Express.js**: RESTful API development.
- **PostgreSQL**: Database for storing menu items and user data.
- **Drizzle ORM**: Database schema management and queries.
- **Session Management & Authentication**: Using `express-session` and `passport`.

### Tooling
- **Vite**: Fast frontend build tool.
- **ESBuild**: Bundling and transpiling server code.
- **Drizzle Kit**: Database migrations and schema management.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd aroma-cafe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database.
   - Update the database connection details in `server/db.ts`.

4. **Run migrations**:
   ```bash
   npm run migrate:push
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```

7. **Start the production server**:
   ```bash
   npm start
   ```

## Project Structure

- **client/**: Frontend React application.
- **server/**: Backend Express.js application.
- **shared/**: Shared types and utilities.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Aroma Café for the inspiration and content.
- All contributors and supporters of the project. 