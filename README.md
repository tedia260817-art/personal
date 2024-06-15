# Personal Library Manager

This is a Personal Library Manager application built with React.js, TypeScript, SWR, axios, formik, and Material UI 5.

## Features

- Add, view, update, and delete books
- Form handling with formik
- Data fetching and caching with SWR
- API requests with axios
- User interface with Material UI 5
- TypeScript for type-checking and improving code quality
- Responsive design

## Setup

1. Clone the repositories:

   ```bash
   git clone https://github.com/tedia260817-art/personal.git
   ```

2. Install dependencies for the React application:

   ```bash
   cd personal-library-manager
   npm install
   ```

3. Install dependencies for the mock server:

   ```bash
   cd ../personal-library-server
   npm install
   ```

4. Start the mock server:

   ```bash
   npm start
   ```

5. Start the React application:
   ```bash
   cd ../personal-library-manager
   npm start
   ```

## Usage

- Open the application in your browser at `http://localhost:3000`.
- Use the interface to manage your collection of books.

## Scripts

### React Application

- `start`: Starts the React application.
- `build`: Builds the React application for production.
- `test`: Runs the test suite.
- `eject`: Ejects the Create React App configuration.
- `lint`: Runs ESLint to check for linting errors.
- `lint:fix`: Runs ESLint and automatically fixes linting errors.
- `format`: Runs Prettier to format the codebase.

### Mock Server

- `start`: Starts the mock server.
