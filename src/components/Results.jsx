import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { calculateCharacterFrequencies, determineCharacters, getCharacterInfo } from '../utils/scoring'
import CharacterIllustration from './CharacterIllustration'

const Results = ({ answers, onReset }) => {
  // Hitung frekuensi jawaban positif per karakter
  const frequencies = useMemo(() => calculateCharacterFrequencies(answers), [answers])
  
  // Tentukan karakter dominan dan 3 pendukung
  const characters = useMemo(() => determineCharacters(frequencies), [frequencies])
  
  // Get info untuk karakter dominan
  const dominantInfo = useMemo(() => getCharacterInfo(characters.dominant.character), [characters.dominant])
  
  // Get info untuk 3 karakter pendukung
  const supportingInfos = useMemo(
    () => characters.supporting.map(char => getCharacterInfo(char.character)),
    [characters.supporting]
  )

  // Data untuk bar chart - semua karakter
  const chartData = characters.all.map(char => {
    const info = getCharacterInfo(char.character)
    return {
      name: info.name,
      frequency: char.frequency,
      color: info.color.replace('bg-', ''),
    }
  })

  // Hitung persentase untuk karakter dominan
  const totalAnswers = Object.values(frequencies).reduce((a, b) => a + b, 0)
  const dominantPercentage = totalAnswers > 0 
    ? Math.round((characters.dominant.frequency / totalAnswers) * 100) 
    : 0

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-200 rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-purple-200 rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hasil Self-Awareness Quiz
          </h1>
          <p className="text-gray-600">
            Kenali dirimu lebih dalam melalui 9 karakter emosi
          </p>
        </div>

        {/* Karakter Dominan - Big Card */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 ${dominantInfo.borderColor}`}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Karakter Dominan Kamu
            </h2>
            <div className="inline-block">
              <span className={`text-5xl font-extrabold ${dominantInfo.textColor}`}>
                {dominantInfo.name}
              </span>
              <span className="text-2xl text-gray-500 ml-3">
                ({dominantPercentage}%)
              </span>
            </div>
            {dominantInfo.subtitle && (
              <p className="text-lg text-gray-600 mt-2 italic">
                {dominantInfo.subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Character Illustration */}
            <div className="flex-shrink-0">
              <CharacterIllustration character={characters.dominant.character} size="large" />
            </div>

            {/* Character Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Deskripsi</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {dominantInfo.fullDescription}
              </p>

              {dominantInfo.potensi && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Potensi</h3>
                  <ul className="text-gray-700 leading-relaxed mb-4 list-disc list-inside space-y-1">
                    {dominantInfo.potensi.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="text-xl font-bold text-gray-800 mb-3">Tips Refleksi Diri</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {dominantInfo.tips}
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {dominantInfo.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${dominantInfo.color} ${dominantInfo.textColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Karakter Pendukung - 3 Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Karakter Pendukung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {characters.supporting.map((char, idx) => {
              const info = supportingInfos[idx]
              const percentage = totalAnswers > 0 
                ? Math.round((char.frequency / totalAnswers) * 100) 
                : 0
              
              return (
                <div
                  key={char.character}
                  className={`bg-white rounded-xl shadow-lg p-5 border-2 ${info.borderColor} hover:shadow-xl transition-shadow`}
                >
                  <div className="text-center mb-3">
                    <CharacterIllustration character={char.character} size="small" />
                  </div>
                  <h3 className={`text-xl font-bold ${info.textColor} text-center mb-1`}>
                    {info.name}
                    <span className="text-sm text-gray-500 ml-2">({percentage}%)</span>
                  </h3>
                  {info.subtitle && (
                    <p className="text-xs text-gray-500 text-center mb-2 italic">
                      {info.subtitle}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm text-center leading-relaxed mb-3">
                    {info.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {info.tags.slice(0, 2).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${info.color} ${info.textColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bar Chart - Visualisasi Frekuensi */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Visualisasi Karakter Kamu
          </h3>
          <p className="text-sm text-gray-600 text-center mb-4">
            Grafik ini menunjukkan frekuensi jawaban positif (Setuju/Sangat Setuju) untuk setiap karakter
          </p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  label={{ value: 'Frekuensi', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                          <p className="font-semibold">{payload[0].payload.name}</p>
                          <p className="text-sm text-gray-600">
                            Frekuensi: {payload[0].value} jawaban positif
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="frequency" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => {
                    // Mapping warna
                    const colorMap = {
                      'yellow-400': '#fbbf24',
                      'blue-400': '#60a5fa',
                      'red-400': '#f87171',
                      'purple-400': '#c084fc',
                      'green-400': '#4ade80',
                      'orange-400': '#fb923c',
                      'teal-400': '#2dd4bf',
                      'pink-400': '#f472b6',
                      'indigo-400': '#818cf8',
                    }
                    return <Cell key={`cell-${index}`} fill={colorMap[entry.color] || '#3b82f6'} />
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 mb-6">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Catatan Penting</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Semua karakter bersifat netral dan tidak ada yang salah atau benar. 
                Tujuan quiz ini adalah untuk meningkatkan <strong>self-awareness</strong> dan 
                refleksi diri. Setiap karakter memiliki kekuatan dan potensi uniknya sendiri.
              </p>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={onReset}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Mulai Ulang Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
