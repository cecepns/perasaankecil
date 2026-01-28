import { useState } from 'react'
import { questions, scaleOptions } from '../data/questions'
import CharacterIllustration from './CharacterIllustration'

// Array of different background themes for each question
const backgroundThemes = [
  // Theme 1 - Soft Pink & Blue
  {
    gradient: 'from-pink-50 via-blue-50 to-purple-50',
    circles: [
      { color: 'bg-pink-200', size: 'w-32 h-32', position: 'top-10 left-10', delay: '0s' },
      { color: 'bg-blue-200', size: 'w-40 h-40', position: 'top-40 right-20', delay: '1s' },
      { color: 'bg-purple-200', size: 'w-36 h-36', position: 'bottom-20 left-1/4', delay: '2s' },
      { color: 'bg-indigo-200', size: 'w-44 h-44', position: 'bottom-40 right-1/3', delay: '1.5s' },
    ]
  },
  // Theme 2 - Warm Orange & Yellow
  {
    gradient: 'from-orange-50 via-yellow-50 to-amber-50',
    circles: [
      { color: 'bg-orange-200', size: 'w-36 h-36', position: 'top-20 right-10', delay: '0.5s' },
      { color: 'bg-yellow-200', size: 'w-44 h-44', position: 'top-1/3 left-20', delay: '1s' },
      { color: 'bg-amber-200', size: 'w-32 h-32', position: 'bottom-32 right-1/4', delay: '1.8s' },
      { color: 'bg-red-200', size: 'w-40 h-40', position: 'bottom-10 left-1/3', delay: '0.8s' },
    ]
  },
  // Theme 3 - Cool Teal & Cyan
  {
    gradient: 'from-teal-50 via-cyan-50 to-sky-50',
    circles: [
      { color: 'bg-teal-200', size: 'w-40 h-40', position: 'top-16 left-16', delay: '0.3s' },
      { color: 'bg-cyan-200', size: 'w-36 h-36', position: 'top-1/2 right-16', delay: '1.2s' },
      { color: 'bg-sky-200', size: 'w-44 h-44', position: 'bottom-24 left-1/4', delay: '2s' },
      { color: 'bg-blue-200', size: 'w-32 h-32', position: 'bottom-1/3 right-20', delay: '1s' },
    ]
  },
  // Theme 4 - Fresh Green & Lime
  {
    gradient: 'from-green-50 via-lime-50 to-emerald-50',
    circles: [
      { color: 'bg-green-200', size: 'w-38 h-38', position: 'top-24 right-24', delay: '0.6s' },
      { color: 'bg-lime-200', size: 'w-42 h-42', position: 'top-40 left-10', delay: '1.4s' },
      { color: 'bg-emerald-200', size: 'w-36 h-36', position: 'bottom-20 right-1/3', delay: '1.8s' },
      { color: 'bg-teal-200', size: 'w-40 h-40', position: 'bottom-1/4 left-1/4', delay: '0.9s' },
    ]
  },
  // Theme 5 - Purple & Lavender
  {
    gradient: 'from-purple-50 via-violet-50 to-fuchsia-50',
    circles: [
      { color: 'bg-purple-200', size: 'w-40 h-40', position: 'top-12 left-12', delay: '0.4s' },
      { color: 'bg-violet-200', size: 'w-36 h-36', position: 'top-1/3 right-12', delay: '1.1s' },
      { color: 'bg-fuchsia-200', size: 'w-44 h-44', position: 'bottom-28 left-20', delay: '1.9s' },
      { color: 'bg-pink-200', size: 'w-38 h-38', position: 'bottom-16 right-16', delay: '1.3s' },
    ]
  },
  // Theme 6 - Rose & Peach
  {
    gradient: 'from-rose-50 via-pink-50 to-orange-50',
    circles: [
      { color: 'bg-rose-200', size: 'w-42 h-42', position: 'top-20 right-12', delay: '0.7s' },
      { color: 'bg-pink-200', size: 'w-36 h-36', position: 'top-1/2 left-16', delay: '1.5s' },
      { color: 'bg-orange-200', size: 'w-40 h-40', position: 'bottom-24 right-20', delay: '2.1s' },
      { color: 'bg-red-200', size: 'w-44 h-44', position: 'bottom-1/3 left-1/3', delay: '1.2s' },
    ]
  },
  // Theme 7 - Mint & Seafoam
  {
    gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    circles: [
      { color: 'bg-emerald-200', size: 'w-38 h-38', position: 'top-14 left-20', delay: '0.5s' },
      { color: 'bg-teal-200', size: 'w-44 h-44', position: 'top-2/5 right-10', delay: '1.3s' },
      { color: 'bg-cyan-200', size: 'w-36 h-36', position: 'bottom-20 left-1/4', delay: '1.7s' },
      { color: 'bg-sky-200', size: 'w-40 h-40', position: 'bottom-1/4 right-1/4', delay: '1.1s' },
    ]
  },
  // Theme 8 - Sunset Coral
  {
    gradient: 'from-coral-50 via-orange-50 to-amber-50',
    circles: [
      { color: 'bg-red-200', size: 'w-40 h-40', position: 'top-16 right-16', delay: '0.8s' },
      { color: 'bg-orange-200', size: 'w-42 h-42', position: 'top-1/3 left-12', delay: '1.6s' },
      { color: 'bg-amber-200', size: 'w-36 h-36', position: 'bottom-32 right-1/3', delay: '2.2s' },
      { color: 'bg-yellow-200', size: 'w-44 h-44', position: 'bottom-20 left-16', delay: '1.4s' },
    ]
  },
  // Theme 9 - Lavender Dream
  {
    gradient: 'from-violet-50 via-purple-50 to-indigo-50',
    circles: [
      { color: 'bg-violet-200', size: 'w-36 h-36', position: 'top-12 left-16', delay: '0.6s' },
      { color: 'bg-purple-200', size: 'w-40 h-40', position: 'top-40 right-20', delay: '1.4s' },
      { color: 'bg-indigo-200', size: 'w-44 h-44', position: 'bottom-24 left-1/3', delay: '2s' },
      { color: 'bg-blue-200', size: 'w-38 h-38', position: 'bottom-1/3 right-12', delay: '1.2s' },
    ]
  },
  // Theme 10 - Peachy Keen
  {
    gradient: 'from-peach-50 via-rose-50 to-pink-50',
    circles: [
      { color: 'bg-orange-200', size: 'w-42 h-42', position: 'top-20 left-10', delay: '0.9s' },
      { color: 'bg-rose-200', size: 'w-36 h-36', position: 'top-1/2 right-16', delay: '1.7s' },
      { color: 'bg-pink-200', size: 'w-40 h-40', position: 'bottom-28 left-20', delay: '2.3s' },
      { color: 'bg-red-200', size: 'w-44 h-44', position: 'bottom-16 right-1/4', delay: '1.5s' },
    ]
  },
]

const Survey = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]
  
  // Get current theme (cycle through themes if more questions than themes)
  const currentTheme = backgroundThemes[currentQuestion % backgroundThemes.length]

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

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden transition-all duration-1000 bg-gradient-to-br ${currentTheme.gradient}`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles with dynamic colors */}
        {currentTheme.circles.map((circle, idx) => (
          <div
            key={idx}
            className={`absolute ${circle.size} ${circle.color} ${circle.position} rounded-full opacity-20 blur-2xl animate-float transition-all duration-1000`}
            style={{ animationDelay: circle.delay }}
          ></div>
        ))}
        
        {/* Decorative shapes */}
        <div className="absolute top-20 right-1/4 w-12 h-12 border-4 border-orange-300 rounded-lg opacity-10 rotate-12 animate-spin-slow transition-all duration-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-10 h-10 border-4 border-teal-300 rounded-full opacity-10 animate-spin-slow transition-all duration-1000" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded opacity-15 animate-float transition-all duration-1000" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header with Back Button and Progress Bar */}
      <div className="w-full p-4 pt-8 relative z-10">
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 relative z-10">
        {/* Character Image */}
        <div key={`character-${currentQuestion}`} className="mb-6 animate-fade-in">
          <CharacterIllustration character={currentQ.character} size="default" />
        </div>

        {/* Question Text */}
        <div key={`question-${currentQuestion}`} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 w-full max-w-2xl border border-white/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center leading-relaxed">
            {currentQ.text}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="w-full max-w-2xl space-y-4">
          {scaleOptions.map((option, idx) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-4 text-left hover:shadow-xl transition-all duration-200 border-2 animate-fade-in ${
                answers[currentQ.id] === option.value
                  ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 scale-105'
                  : 'border-white/50 hover:border-purple-300 hover:scale-102'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
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
