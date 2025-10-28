# TicketMS: Streamlined Ticket Management Platform 🚀

## Overview

TicketMS is a modern and intuitive web application designed to simplify ticket management. Built with **React** and **TypeScript**, it offers a seamless user experience for creating, tracking, and resolving support tickets efficiently. This platform leverages **TanStack Router** for robust routing, **Redux Toolkit** for predictable state management, and **Tailwind CSS** with **Shadcn UI** for a clean, responsive, and aesthetically pleasing interface.

## Getting Started

Follow these steps to set up and run TicketMS on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Redot2468/hng-stage2-frontend.git
    cd hng-stage2-frontend
    ```
2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the Development Server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Your application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

TicketMS provides a comprehensive system for managing tickets. Here's how you can interact with the application:

1.  **Register an Account**:
    Navigate to the `/auth/signup` page to create a new user account. All user data, including login credentials, is securely stored locally in your browser's `localStorage` for demonstration purposes.

2.  **Login**:
    After successful registration, proceed to the `/auth/login` page to access your personalized dashboard.

3.  **Dashboard Overview**:
    The dashboard provides a quick and informative summary of your ticket management system. Here, you'll find key metrics such as the total number of tickets created, the count of open tickets, tickets currently in progress, and those that have been successfully closed.

4.  **Ticket Management**:
    Access the dedicated `/tickets` page to engage with the full suite of ticket management functionalities:
    - **Create New Tickets**: Click on the "Create Ticket" button to open an intuitive form. You can submit new tickets by providing a title, a detailed description, selecting its current status (e.g., 'open', 'in_progress', 'closed'), and assigning a priority level (e.g., 'low', 'medium', 'high').
    - **View Tickets**: All your created tickets are displayed in a clean, organized card format, allowing for easy readability and quick identification.
    - **Edit Tickets**: To modify any ticket's details, simply click the pencil icon located on the respective ticket card. This will pre-fill the creation form with the ticket's current information, allowing you to make updates.
    - **Delete Tickets**: Use the trash icon on a ticket card to permanently remove it from your system.

5.  **Logout**:
    Securely log out of your session at any time. This action will clear your user data and session information from `localStorage`, ensuring data privacy.

## Features

- **User Authentication**: Robust user registration and login functionalities, with client-side user data persistence in `localStorage`.
- **Dashboard Overview**: An intuitive dashboard providing key metrics on ticket status (total, open, in-progress, closed).
- **Comprehensive Ticket Management**: Full CRUD (Create, Read, Update, Delete) operations for tickets, allowing complete control over your workflow.
- **Dynamic Routing**: Powered by `TanStack Router` for a smooth, type-safe, and efficient navigation experience across the application.
- **State Management**: Centralized and predictable application state management using `Redux Toolkit` for both user and ticket data.
- **Responsive Design**: A user-friendly interface that adapts seamlessly to various screen sizes, ensuring a consistent experience across devices, built with `Tailwind CSS` and `Shadcn UI` components.
- **Form Validation**: Robust and real-time form validation implemented with `React Hook Form` and `Zod` for data integrity and improved user experience.

## Technologies Used

| Category         | Technology                                                                                 | Description                                                                            |
| :--------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Frontend**     | [React](https://react.dev/)                                                                | A declarative, component-based JavaScript library for building user interfaces.        |
|                  | [TypeScript](https://www.typescriptlang.org/)                                              | A typed superset of JavaScript that compiles to plain JavaScript.                      |
| **Routing**      | [@tanstack/react-router](https://tanstack.com/router/latest/docs/framework/react/overview) | A powerful, type-safe router for React applications.                                   |
| **State Mgt.**   | [@reduxjs/toolkit](https://redux-toolkit.js.org/)                                          | The official, opinionated, batteries-included toolset for efficient Redux development. |
| **Styling**      | [Tailwind CSS](https://tailwindcss.com/)                                                   | A utility-first CSS framework for rapidly building custom designs.                     |
|                  | [Shadcn UI](https://ui.shadcn.com/)                                                        | A collection of re-usable components built using Radix UI and Tailwind CSS.            |
| **Form Mgt.**    | [React Hook Form](https://react-hook-form.com/)                                            | Performant, flexible, and extensible forms with easy-to-use validation.                |
|                  | [Zod](https://zod.dev/)                                                                    | TypeScript-first schema declaration and validation library.                            |
| **Build Tool**   | [Vite](https://vitejs.dev/)                                                                | A fast and efficient build tool for modern web projects.                               |
| **Auth Utility** | [bcryptjs](https://www.npmjs.com/package/bcryptjs)                                         | A library used for hashing passwords client-side, simulating secure storage.           |
| **Linting**      | [ESLint](https://eslint.org/)                                                              | Pluggable linter tool for identifying and reporting on patterns in JavaScript.         |

## License

The project is licensed under the MIT License.

## Author

**Ridwan**

Connect with me:

- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your_username)
- X (formerly Twitter): [Your X Profile](https://x.com/your_username)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
