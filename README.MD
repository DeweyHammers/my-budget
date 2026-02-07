# My Budget

A budgeting application designed to help you plan and track your monthly expenses effectively. Built with [Next.js](https://nextjs.org/), [Refine](https://refine.dev/), [Prisma](https://www.prisma.io/), and [Supabase](https://supabase.com/).

## Getting Started

### Prerequisites

- Node.js (>=20)
- Docker (required for local Supabase instance)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd my-budget
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  **Environment Setup**: Ensure you have a `.env` file configured with the necessary environment variables for Supabase and your application.

### Database Setup

This project uses a local Supabase instance managed via Docker.

1.  **Start Supabase**:
    Initialize the local Supabase services.

    ```bash
    npm run db:init
    ```

    _(Executes `npx supabase start`)_

2.  **Push Schema**:
    Apply the database schema.
    ```bash
    npm run db:push
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

This project follows a standard Next.js App Router structure with Supabase and Prisma integration.

- **`src/app/`**: Application routes and pages.
  - **(protected)**: Contains routes that require user authentication (e.g., the Plan).
  - **(public)**: Contains public routes like the landing page, login, and registration.
- **`src/providers/`**: Context providers for managing global state such as authentication (`auth-provider`) and data fetching (`data-provider`).
- **`src/theme/`**: Theme configuration files for Material UI styling.
- **`src/utils/supabase/`**: Utilities for initializing and using the Supabase client.
- **`prisma/`**: Contains `schema.prisma` for defining the database model.
- **`supabase/`**: Contains Supabase migrations (`migrations/`) and configuration.

## Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run db:init`: Starts the local Supabase instance.
- `npm run db:push`: Pushes changes to the local Supabase database.
- `npm run db:reset`: Resets the local database.
- `npm run db:migration`: Pushes Prisma schema changes and generates a Supabase migration diff.
- `npm run db:migration:create`: Creates a blank Supabase migration file.
