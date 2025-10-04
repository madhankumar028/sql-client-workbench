# SQL Client Query Workbench

A modern, responsive SQL query workbench built with Next.js 14 and React. This application provides an intuitive interface for writing and executing SQL queries with mock data.

## 🚀 Features

- **SQL Query Editor**: Write and execute SQL queries with syntax highlighting
- **Results Display**: View query results in a clean, tabular format
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Dark/Light Theme**: Theme switching support
- **Mock Data**: Demo application with sample data for testing

## 📦 Dependencies

### Core Framework
- **Next.js 14.2.16** - React framework for production
- **React 18** - UI library
- **React DOM 18** - React rendering
- **TypeScript 5** - Type safety

### UI Components & Styling
- **@radix-ui/react-slot 1.1.1** - Radix UI slot component for button variants
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **tailwindcss-animate 1.0.7** - Animation utilities
- **tailwind-merge 2.5.5** - Tailwind class merging utility
- **class-variance-authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional className utility

### Icons & Fonts
- **lucide-react 0.454.0** - Icon library


### Analytics & Monitoring
- **@vercel/analytics 1.3.1** - Vercel analytics

### Development Dependencies
- **@types/node 22** - Node.js type definitions
- **@types/react 18** - React type definitions
- **@types/react-dom 18** - React DOM type definitions
- **postcss 8.5** - CSS post-processor
- **tailwindcss 4.1.9** - Tailwind CSS framework
- **autoprefixer 10.4.20** - CSS vendor prefixing

## 🏗️ Application Architecture

```mermaid
graph TD
    A[User Interface] --> B[SQL Workbench Component]
    B --> C[Query Editor]
    B --> D[Results Display]
    
    C --> E[SQL Query Input]
    E --> F[Run Query Button]
    F --> G[Mock Query Execution]
    G --> H[Results Table Component]
    
    D --> I[Table Component]
    I --> J[Column Headers]
    I --> K[Data Rows]
    
    Q[Theme Provider] --> R[Dark/Light Mode]
    S[Radix UI Components] --> T[Accessible UI Elements]
    U[Tailwind CSS] --> V[Responsive Styling]
    
    W[Next.js App Router] --> X[Layout Component]
    X --> Y[Main Page]
    Y --> B
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm, npm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sql-client-workbench
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
sql-client-workbench/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Essential UI components
│   │   ├── button.tsx    # Button component
│   │   ├── card.tsx      # Card components
│   │   ├── table.tsx     # Table components
│   │   └── textarea.tsx  # Textarea component
│   ├── results-table.tsx # Query results display
│   └── sql-workbench.tsx # Main workbench component
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎯 Usage

1. **Write SQL Queries**: Use the textarea to write your SQL queries
2. **Execute Queries**: Click the "Run" button to execute queries (returns mock data)
3. **View Results**: Query results are displayed in tabular format
4. **Theme Switching**: Toggle between dark and light themes

## 🔧 Customization

The application is built with a modular component architecture, making it easy to:
- Add new UI components using the existing Radix UI setup
- Extend the query execution logic with real database connections
- Customize the styling using Tailwind CSS classes
- Add new data processing capabilities

## 📄 License

This project is private and created for demonstration purposes.

## 🤝 Contributing

This is a demo application. For production use, consider adding:
- Real database connectivity
- Query history and favorites
- Export functionality
- User authentication
- Query validation and error handling
