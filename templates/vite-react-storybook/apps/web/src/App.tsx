import { useState } from 'react'
import { Button, Card, Input } from '@repo/ui'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vite + React + Storybook Template
          </h1>
          <p className="text-lg text-gray-600">
            A modern monorepo setup with shared UI components
          </p>
        </div>

        <Card className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Component Examples
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Buttons</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Button Sizes</h3>
              <div className="flex gap-3 items-center flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Form Input</h3>
              <div className="max-w-md space-y-4">
                <Input
                  label="Your Name"
                  placeholder="Enter your name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="This is a helper text"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  error="Please enter a valid email address"
                />
                <Button onClick={handleSubmit} className="w-full">
                  Submit Form
                </Button>
                {showSuccess && (
                  <p className="text-green-600 text-sm">Form submitted successfully!</p>
                )}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Vite 7 for fast development</li>
              <li>• React 19.1 with TypeScript</li>
              <li>• Tailwind CSS 4 for styling</li>
              <li>• Shared UI component library</li>
              <li>• ESLint and Prettier configured</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Next Steps
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Add more components to @repo/ui</li>
              <li>• Set up Storybook for component docs</li>
              <li>• Add testing with Vitest</li>
              <li>• Configure CI/CD pipeline</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App