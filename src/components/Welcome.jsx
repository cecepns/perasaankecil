import ZiziImg from '../assets/character/Zizi (bahagia).png'
import LumiImg from '../assets/character/Lumi (sedih).png'
import NolaImg from '../assets/character/Nola (marah).png'
import LalaImg from '../assets/character/Lala (takut).png'
import PupuImg from '../assets/character/Pupu (jijik).png'
import NayoImg from '../assets/character/Nayo (Terkejut).png'

const Welcome = ({ onStart }) => {
  const characters = [
    { img: ZiziImg, name: 'Zizi', delay: '0s' },
    { img: LumiImg, name: 'Lumi', delay: '0.1s' },
    { img: NolaImg, name: 'Nola', delay: '0.2s' },
    { img: LalaImg, name: 'Lala', delay: '0.3s' },
    { img: PupuImg, name: 'Pupu', delay: '0.4s' },
    { img: NayoImg, name: 'Nayo', delay: '0.5s' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-200 rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-purple-200 rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-green-200 rounded-full opacity-30 blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-orange-300 rounded-lg opacity-20 rotate-12 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 border-4 border-teal-300 rounded-full opacity-20 animate-spin-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-fade-in">
            Perasaan Kecil
          </h1>

          {/* Subtitle/Description */}
          <div className="mb-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Hai, selamat datang di Perasaan Kecil.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Di sini kamu bisa berhenti sejenak dan jujur pada diri sendiri. 
              Tidak ada jawaban benar atau salah, jadi jawablah setiap pertanyaan 
              sesuai dengan apa yang kamu rasakan tentang dirimu, emosimu, 
              dan lingkungan di sekitarmu.
            </p>
          </div>

          {/* Character Images */}
          <div className="mb-8 flex justify-center items-center gap-4 flex-wrap">
            {characters.map((char, idx) => (
              <div
                key={idx}
                className="w-20 h-20 md:w-24 md:h-24 animate-bounce-in"
                style={{ animationDelay: char.delay }}
              >
                <img
                  src={char.img}
                  alt={char.name}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Start Button */}
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Mulai Quiz
              <svg 
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
          </button>

          {/* Info Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700 animate-fade-in" style={{ animationDelay: '1s' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>20 pertanyaan • ~5 menit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
