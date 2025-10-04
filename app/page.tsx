import { SqlWorkbench } from "@/components/sql-workbench"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold text-balance">SQL Client Query Workbench</h1>
          <p className="text-muted-foreground text-lg">
            Execute SQL queries and view results (demo application with mock data)
          </p>
        </header>
        <SqlWorkbench />
      </div>
    </main>
  )
}
