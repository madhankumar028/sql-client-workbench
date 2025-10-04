"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayIcon, Loader2Icon } from "lucide-react"
import { ResultsTable } from "@/components/results-table"

// Mock result data for when user runs their own query
const mockUserQueryResult = {
  columns: ["id", "name", "email", "status"],
  rows: [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "inactive" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "active" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "inactive" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", status: "active" },
  ],
}

export function SqlWorkbench() {
  const [query, setQuery] = useState('SELECT * FROM users WHERE status = "active";')
  const [isRunning, setIsRunning] = useState(false)
  const [hasRun, setHasRun] = useState(false)
  const [result, setResult] = useState<typeof mockUserQueryResult | null>(null)

  const handleRunQuery = async () => {
    console.log('Button clicked!', { query, isRunning, hasRun })
    setIsRunning(true)
    setHasRun(false)

    // Simulate query execution
    await new Promise((resolve) => setTimeout(resolve, 800))

    setResult(mockUserQueryResult)
    setIsRunning(false)
    setHasRun(true)
    console.log('Query completed!', mockUserQueryResult)
  }


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>Query Editor</CardTitle>
            <CardDescription>Write your SQL query below and click Run to execute</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="relative">
            <Textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your SQL query here..."
              className="font-mono min-h-[200px] text-sm pr-16 pb-16"
              aria-label="SQL Query Input"
            />
            <button
              onClick={handleRunQuery}
              disabled={isRunning || !query.trim()}
              className="absolute bottom-3 right-3 h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50"
              aria-label="Run Query"
              title="Run Query"
              style={{ cursor: 'pointer', zIndex: 10 }}
            >
              {isRunning ? <Loader2Icon className="h-5 w-5 animate-spin" /> : <PlayIcon className="h-5 w-5" />}
              <span className="sr-only">Run Query</span>
            </button>
          </div>

          {hasRun && result && (
            <div className="rounded-md border">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div>
                  <h3 className="text-sm font-medium">Query Results</h3>
                  <p className="text-xs text-muted-foreground">
                    {result.rows.length} row{result.rows.length !== 1 ? "s" : ""} returned
                  </p>
                </div>
              </div>
              <div className="p-4">
                <ResultsTable columns={result.columns} rows={result.rows} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
