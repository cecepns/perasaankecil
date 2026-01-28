import { questions } from '../data/questions'

/**
 * Menghitung frekuensi jawaban positif (Setuju/Sangat Setuju) untuk setiap karakter
 * Logika baru: hitung berapa kali user menjawab Setuju (3) atau Sangat Setuju (4) per karakter
 */
export const calculateCharacterFrequencies = (answers) => {
  // Inisialisasi counter untuk 6 karakter (yang punya gambar)
  const frequencies = {
    sadness: 0,
    anger: 0,
    fear: 0,
    disgust: 0,
    joy: 0,
    surprise: 0,
  }

  // Hitung frekuensi jawaban positif per karakter
  questions.forEach((question) => {
    const answer = answers[question.id]
    // Jawaban positif: Setuju (3) atau Sangat Setuju (4)
    if (answer === 3 || answer === 4) {
      frequencies[question.character]++
    }
  })

  return frequencies
}

/**
 * Menentukan karakter dominan (frekuensi tertinggi) dan 3 karakter pendukung
 */
export const determineCharacters = (frequencies) => {
  // Convert frequencies object to array untuk sorting
  const characterArray = Object.entries(frequencies).map(([character, frequency]) => ({
    character,
    frequency,
  }))

  // Sort berdasarkan frekuensi (tertinggi ke terendah)
  characterArray.sort((a, b) => {
    if (b.frequency !== a.frequency) {
      return b.frequency - a.frequency
    }
    // Jika sama, urutkan berdasarkan urutan karakter di questions (yang muncul pertama)
    const orderA = questions.findIndex(q => q.character === a.character)
    const orderB = questions.findIndex(q => q.character === b.character)
    return orderA - orderB
  })

  // Karakter dominan = frekuensi tertinggi
  const dominantCharacter = characterArray[0]
  
  // 3 karakter pendukung = 3 frekuensi berikutnya
  const supportingCharacters = characterArray.slice(1, 4)

  return {
    dominant: dominantCharacter,
    supporting: supportingCharacters,
    all: characterArray,
  }
}

/**
 * Mendapatkan informasi lengkap untuk setiap karakter
 * Nama unik Indonesia untuk ciri khas project ini
 */
export const getCharacterInfo = (character) => {
  const characterMap = {
    joy: {
      name: 'Zizi',
      subtitle: 'Keceriaan / Semangat Positif',
      originalName: 'Joy',
      description: 'Kamu cenderung melihat sisi positif dari situasi dan mampu membawa energi ceria bagi diri sendiri maupun orang lain.',
      fullDescription: 'Kamu memiliki kemampuan luar biasa untuk meningkatkan motivasi diri dan orang sekitar. Kamu membuat lingkungan lebih nyaman dan menyenangkan, serta mampu tetap optimis dalam menghadapi tantangan.',
      potensi: [
        'Meningkatkan motivasi diri dan orang sekitar',
        'Membuat lingkungan lebih nyaman dan menyenangkan',
        'Memudahkan kamu tetap optimis dalam menghadapi tantangan'
      ],
      tips: 'Terus rayakan hal-hal kecil dalam hidup, bagikan keceriaan kepada orang sekitar, dan pertahankan pandangan optimismu.',
      tags: ['#RayakanHalKecil', '#BagikanKeceriaan', '#TetapOptimis'],
      color: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-400',
    },
    sadness: {
      name: 'Lumi',
      subtitle: 'Kesedihan / Empati Mendalam',
      originalName: 'Sadness',
      description: 'Kamu peka terhadap perasaan diri sendiri dan orang lain, mampu merasakan emosi meski tidak diungkapkan secara langsung.',
      fullDescription: 'Empati mendalam yang kamu miliki membantu memahami dan mendukung orang lain dengan lebih baik. Kepekaan ini memperkuat hubungan sosial dan meningkatkan kesadaran diri dalam menghadapi konflik.',
      potensi: [
        'Membantu memahami dan mendukung orang lain',
        'Memperkuat hubungan sosial melalui empati',
        'Meningkatkan kesadaran diri dalam menghadapi konflik'
      ],
      tips: 'Tetap peka terhadap emosi diri dan orang lain, luangkan waktu untuk refleksi diri, dan jangan ragu memperhatikan perasaan orang di sekitarmu.',
      tags: ['#PekaTerhadapEmosi', '#RefleksiDiri', '#PerhatikanPerasaanOrangLain'],
      color: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-400',
    },
    anger: {
      name: 'Nola',
      subtitle: 'Kemarahan / Energi Tegas',
      originalName: 'Anger',
      description: 'Kamu merasakan kemarahan atau frustrasi saat menghadapi ketidakadilan atau situasi menantang. Energi ini bisa menjadi kekuatan jika diarahkan dengan bijak.',
      fullDescription: 'Kemampuanmu untuk menegakkan batasan diri secara tegas dapat memotivasi tindakan atau perubahan. Kemarahan yang dikelola dengan baik meningkatkan kesadaran terhadap apa yang penting bagi diri sendiri.',
      potensi: [
        'Menegakkan batasan diri secara tegas',
        'Memotivasi tindakan atau perubahan',
        'Meningkatkan kesadaran terhadap apa yang penting bagi diri sendiri'
      ],
      tips: 'Kelola emosi dengan baik, gunakan energi kemarahanmu untuk hal positif, dan refleksikan apa yang membuat kamu marah untuk memahami diri lebih dalam.',
      tags: ['#KelolaEmosi', '#RefleksiDiri', '#GunakanEnergiDenganBijak'],
      color: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-400',
    },
    fear: {
      name: 'Lala',
      subtitle: 'Kecemasan / Kehati-hatian',
      originalName: 'Fear',
      description: 'Kamu berhati-hati dan mempertimbangkan risiko sebelum bertindak. Ini membuatmu waspada dan terencana.',
      fullDescription: 'Kehati-hatianmu membantu mengambil keputusan yang lebih bijaksana dan mencegah kesalahan akibat terburu-buru. Kamu memberikan perlindungan emosional dan sosial bagi diri sendiri.',
      potensi: [
        'Membantu mengambil keputusan yang lebih bijaksana',
        'Mencegah kesalahan akibat terburu-buru',
        'Memberi perlindungan emosional dan sosial'
      ],
      tips: 'Pertimbangkan risiko dengan matang, tetap berhati-hati namun jangan takut mencoba hal baru, dan percaya pada kemampuanmu.',
      tags: ['#PertimbangkanRisiko', '#BerhatiHati', '#TetapBeraniCoba'],
      color: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-400',
    },
    disgust: {
      name: 'Pupu',
      subtitle: 'Selektif & Bijaksana',
      originalName: 'Disgust',
      description: 'Kamu memiliki standar dan nilai pribadi yang jelas, membantu memilih lingkungan dan orang-orang yang sesuai prinsipmu.',
      fullDescription: 'Kemampuanmu menentukan batasan diri secara sehat membantu memilih hubungan dan lingkungan yang positif. Kamu tetap konsisten dengan nilai dan tujuan pribadi.',
      potensi: [
        'Menentukan batasan diri secara sehat',
        'Memilih hubungan dan lingkungan yang positif',
        'Membantu tetap konsisten dengan nilai dan tujuan pribadi'
      ],
      tips: 'Tetap bijak dalam membuat keputusan, gunakan intuisimu dengan baik, dan jaga batasan pribadi tanpa menghakimi orang lain.',
      tags: ['#TetapBijak', '#GunakanIntuisi', '#JagaBatasPribadi'],
      color: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-400',
    },
    surprise: {
      name: 'Nayo',
      subtitle: 'Kejutan / Rasa Ingin Tahu',
      originalName: 'Surprise',
      description: 'Kamu terbuka terhadap pengalaman baru dan bisa melihat sisi tak terduga dari situasi. Keingintahuan ini mendorongmu belajar dan menyesuaikan diri.',
      fullDescription: 'Keterbukaan terhadap hal baru membantu adaptasi terhadap perubahan dengan lebih mudah. Rasa ingin tahumu memicu kreativitas, eksplorasi, dan menambah wawasan sosial serta emosional.',
      potensi: [
        'Membantu adaptasi terhadap perubahan',
        'Memicu kreativitas dan eksplorasi',
        'Menambah wawasan sosial dan emosional'
      ],
      tips: 'Tetap terbuka pada pengalaman baru, jangan takut dengan hal yang tidak terduga, dan terus belajar dari hal-hal baru di sekitarmu.',
      tags: ['#TerbukaPadaPengalaman', '#Penasaran', '#BelajarDariHalBaru'],
      color: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-400',
    },
  }

  return characterMap[character] || characterMap.joy
}
