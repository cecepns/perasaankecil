import { useState } from 'react'
import { questions, scaleOptions } from '../data/questions'

const Survey = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Back Button and Progress Bar */}
      <div className="w-full p-4 pt-8">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className={`mb-4 text-gray-600 hover:text-gray-800 transition-colors ${
            currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-gray-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="bg-white h-4 w-4 rounded-full border-2 border-gray-600 float-right -mt-1 -mr-1"></div>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-center">
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Question Text */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 w-full max-w-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center leading-relaxed">
            {currentQ.text}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="w-full max-w-2xl space-y-4">
          {scaleOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full bg-white rounded-xl shadow-md p-4 text-left hover:shadow-lg transition-all duration-200 border-2 ${
                answers[currentQ.id] === option.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-transparent hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium text-lg">
                  {option.label}
                </span>
                {answers[currentQ.id] === option.value && (
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Survey
