import { useState } from 'react'
import Survey from './components/Survey'
import Results from './components/Results'

function App() {
  const [answers, setAnswers] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const handleSurveyComplete = (surveyAnswers) => {
    setAnswers(surveyAnswers)
    setShowResults(true)
  }

  const handleReset = () => {
    setAnswers(null)
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue">
      {!showResults ? (
        <Survey onComplete={handleSurveyComplete} />
      ) : (
        <Results answers={answers} onReset={handleReset} />
      )}
    </div>
  )
}

export default App
