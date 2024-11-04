# Project của Sang

This project is a TypeScript-based Node.js application, designed with a clear folder structure for scalability and maintainability.

## Project Structure

```plaintext
│   .env                 # Environment variables
│   .env.example         # Example environment file
│   .eslintignore        # Files/Dirs to ignore for ESLint
│   .eslintrc.json       # ESLint configuration
│   .gitignore           # Files/Dirs to ignore for Git
│   .prettierignore      # Files/Dirs to ignore for Prettier
│   .prettierrc          # Prettier configuration
│   package.json         # Project metadata and scripts
│   tsconfig.json        # TypeScript configuration
│
├───.husky               # Husky hooks for Git
│   │   pre-commit       # Pre-commit hook script
│   └───_
│           .gitignore   # Ignore husky files in Git
│           husky.sh     # Husky hook runner script
│
├───.vscode              # VSCode editor settings
│       settings.json    # Custom workspace settings for VSCode
│
└───src                  # Main source code for the application
    │   app.ts           # Main application entry point
    │
    ├───controllers      # Controller layer
    │       user.controller.ts    # Controller for user-related logic
    │
    ├───interfaces       # TypeScript interfaces
    │       user.interface.ts     # Interface for User type
    │
    ├───routes           # Route definitions
    │       index.ts             # Main route entry point
    │       user.router.ts       # User-specific routes
    │
    └───services         # Service layer for business logic
            user.service.ts      # Service for user-related operations

```

## Getting Started

Prerequisites:
- Node.js (v20 or later recommended)
- npm (comes with Node.js) or Yarn

## Installation

### 1.Clone the repository:
  ```bash
    git clone https://github.com/sangho2049/node-express.git

    cd node-express
  ```

### 2.Install dependencies:

```bash
  npm install
```
### 3.Set up environment variables:
  Copy `.env.example` to `.env` and configure necessary values.

## Scripts

Start Development Server: Starts the application with hot-reloading.
```bash
  npm run start:dev
```

Linting: Checks for code style issues using ESLint.
```bash
  npm run lint
```