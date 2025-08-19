📊 React DataTable Component (TypeScript)

A reusable and customizable DataTable component built with React + TypeScript.
Supports sorting, dynamic columns, and strongly typed props for safer development.

🚀 Features

📑 Define columns with type safety (Column<T>)

📋 Supports sorting on specified columns

🎨 Easy integration into any React project

🔧 Written in TypeScript for better maintainability

⚡ Lightweight and flexible

📂 Project Structure
src/
 ├── components/
 │    └── DataTable.tsx   # Main DataTable component
 │
 ├── stories/
 │    └── DataTable.stories.tsx   # Storybook stories
 │
 ├── types/
 │    └── Column.ts        # Type definitions for columns
 │
 └── App.tsx               # Example usage

🛠️ Installation

Clone the repo and install dependencies:

git clone <your-repo-url>
cd <your-repo-name>
npm install

📖 Usage
import React from "react";
import DataTable, { Column } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [
  { id: 1, name: "Manya Rawat", email: "manya@example.com" },
  { id: 2, name: "Alice", email: "alice@example.com" },
];

export default function App() {
  return <DataTable<User> columns={columns} data={data} />;
}

🎨 Storybook

This project includes Storybook for previewing components in isolation.
Run Storybook with:

npm run storybook

📦 Scripts

npm start → Start development server

npm run build → Build production bundle

npm run storybook → Start Storybook for UI preview

npm test → Run tests (if configured)

🤝 Contributing

Fork the repo

Create a feature branch (git checkout -b feature/new-feature)

Commit your changes (git commit -m 'Add new feature')

Push to your branch (git push origin feature/new-feature)

Open a Pull Request 🎉

📜 License

This project is licensed under the MIT License.
