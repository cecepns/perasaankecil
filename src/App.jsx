import { useState } from 'react'
import Welcome from './components/Welcome'
import Survey from './components/Survey'
import Results from './components/Results'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [answers, setAnswers] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const handleStart = () => {
    setShowWelcome(false)
  }

  const handleSurveyComplete = (surveyAnswers) => {
    setAnswers(surveyAnswers)
    setShowResults(true)
  }

  const handleReset = () => {
    setAnswers(null)
    setShowResults(false)
    setShowWelcome(true)
  }

  return (
    <div className="min-h-screen pastel-background">
      {showWelcome ? (
        <Welcome onStart={handleStart} />
      ) : !showResults ? (
        <Survey onComplete={handleSurveyComplete} />
      ) : (
        <Results answers={answers} onReset={handleReset} />
      )}
    </div>
  )
}

export default App
