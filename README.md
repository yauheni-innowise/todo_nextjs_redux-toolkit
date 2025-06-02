# Todo App

A modern Todo application built with Next.js and Redux Toolkit.

## Features

- **Main Page**: Information about the app
- **Todo List**: Create, edit, mark as resolved, filter, and delete tasks
- **User Profile**: Display user information including photo, name, and other details

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety
- **Redux Toolkit**: For state management
- **Tailwind CSS**: For styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable UI components
  - `/src/components/ui`: Shared UI components (buttons, inputs, modals, etc.)
  - `/src/components/todos`: Todo-specific components
  - `/src/components/user`: User-specific components
- `/src/redux`: Redux store, slices, and hooks
- `/src/types`: TypeScript type definitions
- `/src/services`: API services
- `/src/mocks`: Mock data for development

## Component Architecture

The application follows a component-driven architecture with reusable UI components:

### UI Components

- **Button**: Customizable button with different variants, sizes, and states
- **FormInput**: Reusable form input with validation support
- **LoadingSpinner**: Flexible spinner for loading states
- **Modal**: Reusable modal dialog with customizable content and actions
- **StatusMessage**: Component for displaying different types of status messages

### Todo Components

- **TodoList**: Displays a list of todo items
- **TodoItem**: Individual todo item with actions
- **TodoForm**: Form for creating and editing todos
- **TodoFilter**: Filters for the todo list

### User Components

- **UserProfileCard**: Displays user profile information

## Version Control

This project uses Git for version control. The repository has been initialized with the following structure:

- Main branch: `main`
- `.gitignore`: Configured for Next.js projects to exclude node_modules, build outputs, environment files, and logs

### Commit Convention

We follow a semantic commit message convention:

- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code changes that neither fix bugs nor add features
- `docs:` - Documentation changes
- `style:` - Changes that do not affect the meaning of the code (formatting, etc.)
- `test:` - Adding or modifying tests
- `chore:` - Changes to the build process or auxiliary tools

## Mock Data

The application uses mock data to simulate API calls. In a real-world scenario, these would be replaced with actual API endpoints.
