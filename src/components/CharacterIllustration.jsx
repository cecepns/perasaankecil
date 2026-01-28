// Import character images
import ZiziImg from '../assets/character/Zizi (bahagia).png'
import LumiImg from '../assets/character/Lumi (sedih).png'
import NolaImg from '../assets/character/Nola (marah).png'
import LalaImg from '../assets/character/Lala (takut).png'
import PupuImg from '../assets/character/Pupu (jijik).png'
import NayoImg from '../assets/character/Nayo (Terkejut).png'

const CharacterIllustration = ({ character, size = 'default' }) => {
  // Determine size classes based on prop
  const sizeConfig = {
    large: { width: 'w-64', height: 'h-64', imgClass: 'w-64 h-64' },
    default: { width: 'w-48', height: 'h-48', imgClass: 'w-48 h-48' },
    small: { width: 'w-32', height: 'h-32', imgClass: 'w-32 h-32' },
  }
  const config = sizeConfig[size] || sizeConfig.default

  // Map characters to their images (hanya 6 karakter yang ada gambarnya)
  const characterImages = {
    joy: ZiziImg,          // Zizi (bahagia)
    sadness: LumiImg,      // Lumi (sedih)
    anger: NolaImg,        // Nola (marah)
    fear: LalaImg,         // Lala (takut)
    disgust: PupuImg,      // Pupu (jijik)
    surprise: NayoImg,     // Nayo (Terkejut)
  }

  const characterImage = characterImages[character]

  // Tampilkan gambar karakter
  if (characterImage) {
    return (
      <div className="flex items-center justify-center">
        <img
          src={characterImage}
          alt={character}
          className={`${config.imgClass} object-contain drop-shadow-md rounded-lg`}
        />
      </div>
    )
  }

  // Fallback jika karakter tidak ditemukan
  const getCharacterSVG = () => {
    const sizeClass = `${config.width} ${config.height}`
    
    switch (character) {
      case 'joy':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Joy (Riang) - Yellow with blue spiky hair */}
            <circle cx="100" cy="110" r="70" fill="#FFD700" />
            {/* Blue spiky hair */}
            <path d="M 50 60 L 60 40 L 70 50 L 80 35 L 90 50 L 100 30 L 110 50 L 120 35 L 130 50 L 140 40 L 150 60 Z" fill="#4A90E2" />
            {/* Green dress */}
            <ellipse cx="100" cy="150" rx="45" ry="35" fill="#90EE90" />
            <ellipse cx="100" cy="140" rx="40" ry="25" fill="#90EE90" />
            {/* Eyes */}
            <circle cx="85" cy="100" r="8" fill="#000" />
            <circle cx="115" cy="100" r="8" fill="#000" />
            {/* Big smile */}
            <path
              d="M 70 120 Q 100 145 130 120"
              fill="none"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        )
      case 'sadness':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Sadness (Haru) - Blue, round, with glasses */}
            <circle cx="100" cy="110" r="75" fill="#5B9BD5" />
            {/* Glasses */}
            <circle cx="80" cy="100" r="25" fill="none" stroke="#E8E8E8" strokeWidth="4" />
            <circle cx="120" cy="100" r="25" fill="none" stroke="#E8E8E8" strokeWidth="4" />
            <line x1="105" y1="100" x2="95" y2="100" stroke="#E8E8E8" strokeWidth="4" />
            {/* Eyes behind glasses */}
            <circle cx="80" cy="100" r="6" fill="#000" />
            <circle cx="120" cy="100" r="6" fill="#000" />
            {/* Frown */}
            <path
              d="M 85 125 Q 100 115 115 125"
              fill="none"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Blue sweater */}
            <ellipse cx="100" cy="155" rx="50" ry="30" fill="#4A7BA7" />
          </svg>
        )
      case 'anger':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Anger (Geram) - Red, square head with flat top */}
            <rect x="50" y="70" width="100" height="90" rx="15" fill="#FF4444" />
            {/* Flat top head */}
            <rect x="40" y="60" width="120" height="20" rx="5" fill="#CC0000" />
            {/* Steam from head */}
            <path d="M 60 55 Q 65 45 70 50" stroke="#FF6666" strokeWidth="3" fill="none" />
            <path d="M 100 55 Q 105 45 110 50" stroke="#FF6666" strokeWidth="3" fill="none" />
            <path d="M 130 55 Q 135 45 140 50" stroke="#FF6666" strokeWidth="3" fill="none" />
            {/* Angry eyes */}
            <path d="M 75 100 L 85 95 L 75 90" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 115 100 L 125 95 L 115 90" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Angry mouth */}
            <path
              d="M 80 120 L 100 115 L 120 120"
              fill="none"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Tie */}
            <rect x="90" y="140" width="20" height="30" rx="3" fill="#CC0000" />
            <polygon points="100,140 110,150 100,150 90,150" fill="#888" />
          </svg>
        )
      case 'fear':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Fear (Gentar) - Purple, tall and thin */}
            <ellipse cx="100" cy="120" rx="50" ry="70" fill="#9B59B6" />
            {/* Checkered vest */}
            <rect x="60" y="90" width="80" height="60" rx="5" fill="#7D3C98" />
            <line x1="100" y1="90" x2="100" y2="150" stroke="#9B59B6" strokeWidth="2" />
            <line x1="70" y1="110" x2="130" y2="110" stroke="#9B59B6" strokeWidth="2" />
            <line x1="70" y1="130" x2="130" y2="130" stroke="#9B59B6" strokeWidth="2" />
            {/* Bow tie */}
            <ellipse cx="100" cy="85" rx="12" ry="8" fill="#FF0000" />
            {/* Wide scared eyes */}
            <ellipse cx="85" cy="105" rx="10" ry="12" fill="#FFF" />
            <ellipse cx="115" cy="105" rx="10" ry="12" fill="#FFF" />
            <circle cx="85" cy="105" r="6" fill="#000" />
            <circle cx="115" cy="105" r="6" fill="#000" />
            {/* Open scared mouth */}
            <ellipse cx="100" cy="125" rx="12" ry="15" fill="#000" />
            {/* Raised arms */}
            <ellipse cx="70" cy="100" rx="8" ry="25" fill="#9B59B6" />
            <ellipse cx="130" cy="100" rx="8" ry="25" fill="#9B59B6" />
          </svg>
        )
      case 'disgust':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Disgust (Tegas) - Green with bob hair */}
            <ellipse cx="100" cy="110" rx="65" ry="75" fill="#2ECC71" />
            {/* Green bob hair */}
            <path d="M 40 70 Q 50 50 70 60 Q 90 70 110 60 Q 130 50 160 70 Q 150 85 130 75 Q 110 85 90 75 Q 70 85 50 75 Q 40 70 40 70" fill="#27AE60" />
            {/* Patterned dress */}
            <ellipse cx="100" cy="150" rx="50" ry="35" fill="#27AE60" />
            <circle cx="85" cy="140" r="5" fill="#2ECC71" />
            <circle cx="115" cy="140" r="5" fill="#2ECC71" />
            <circle cx="100" cy="155" r="5" fill="#2ECC71" />
            {/* One raised eyebrow */}
            <path d="M 75 90 L 95 85" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="85" cy="100" r="6" fill="#000" />
            <circle cx="115" cy="100" r="6" fill="#000" />
            {/* Disgusted mouth */}
            <path
              d="M 95 115 Q 100 110 105 115"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Hands on hips */}
            <ellipse cx="65" cy="135" rx="8" ry="12" fill="#2ECC71" />
            <ellipse cx="135" cy="135" rx="8" ry="12" fill="#2ECC71" />
          </svg>
        )
      case 'surprise':
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Surprise (Takjub) - Orange, star-burst hair, wide eyes */}
            <ellipse cx="100" cy="120" rx="55" ry="70" fill="#FB923C" />
            {/* Star-burst hair */}
            <circle cx="80" cy="50" r="15" fill="#EA580C" />
            <circle cx="100" cy="45" r="18" fill="#EA580C" />
            <circle cx="120" cy="50" r="15" fill="#EA580C" />
            <circle cx="90" cy="60" r="12" fill="#EA580C" />
            <circle cx="110" cy="60" r="12" fill="#EA580C" />
            {/* Wide surprised eyes */}
            <ellipse cx="85" cy="105" rx="12" ry="15" fill="#FFF" />
            <ellipse cx="115" cy="105" rx="12" ry="15" fill="#FFF" />
            <circle cx="85" cy="105" r="7" fill="#000" />
            <circle cx="115" cy="105" r="7" fill="#000" />
            {/* O mouth */}
            <ellipse cx="100" cy="125" rx="10" ry="13" fill="#000" />
            {/* Striped shirt */}
            <rect x="75" y="135" width="50" height="30" rx="3" fill="#FB923C" />
            <line x1="85" y1="135" x2="85" y2="165" stroke="#EA580C" strokeWidth="3" />
            <line x1="100" y1="135" x2="100" y2="165" stroke="#EA580C" strokeWidth="3" />
            <line x1="115" y1="135" x2="115" y2="165" stroke="#EA580C" strokeWidth="3" />
            {/* Hands up in surprise */}
            <ellipse cx="65" cy="125" rx="8" ry="20" fill="#FB923C" transform="rotate(-30 65 125)" />
            <ellipse cx="135" cy="125" rx="8" ry="20" fill="#FB923C" transform="rotate(30 135 125)" />
          </svg>
        )
      default:
        return (
          <svg width="200" height="200" viewBox="0 0 200 200" className={sizeClass}>
            {/* Default - Happy face */}
            <circle cx="100" cy="100" r="80" fill="#FFD700" />
            <circle cx="85" cy="90" r="8" fill="#000" />
            <circle cx="115" cy="90" r="8" fill="#000" />
            <path
              d="M 80 110 Q 100 130 120 110"
              fill="none"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
    }
  }

  return (
    <div className="flex items-center justify-center">
      {getCharacterSVG()}
    </div>
  )
}

export default CharacterIllustration
