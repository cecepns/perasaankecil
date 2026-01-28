# Aplikasi Deteksi Potensi Bullying

Aplikasi web untuk mendeteksi potensi bullying pada siswa menggunakan React, Vite, dan Tailwind CSS.

## Fitur

- Survey dengan 15 pertanyaan tentang perilaku dan sikap siswa
- Progress bar untuk menunjukkan kemajuan survey
- Hasil analisis dengan visualisasi statistik menggunakan radar chart
- Karakter Inside Out untuk representasi hasil
- Peringatan jika terdeteksi potensi bullying atau menjadi korban bullying

## Teknologi

- React 18
- Vite
- Tailwind CSS
- Recharts (untuk visualisasi statistik)

## Instalasi

```bash
npm install
```

## Menjalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## Build untuk Production

```bash
npm run build
```

## Struktur Proyek

```
bullying-detection-app/
├── src/
│   ├── components/
│   │   ├── Survey.jsx          # Komponen survey dengan progress bar
│   │   ├── Results.jsx          # Komponen hasil dengan statistik
│   │   └── CharacterIllustration.jsx  # Komponen karakter Inside Out
│   ├── data/
│   │   └── questions.js         # Data pertanyaan survey
│   ├── utils/
│   │   └── scoring.js           # Logika perhitungan skor
│   ├── App.jsx                  # Komponen utama
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles dengan Tailwind
├── public/
└── package.json
```

## Kategori Pertanyaan

1. **Empati** - Kemampuan memahami perasaan orang lain
2. **Resolusi Konflik** - Cara menghadapi konflik
3. **Potensi Korban** - Kecenderungan menjadi korban bullying
4. **Agresi** - Kecenderungan agresif
5. **Potensi Bullying** - Kecenderungan melakukan bullying
6. **Bystander** - Perilaku sebagai penonton dalam situasi bullying

## Karakter Inside Out

Aplikasi menggunakan karakter dari film Inside Out untuk merepresentasikan hasil:

- **Joy** - Empati tinggi, resolusi konflik baik
- **Sadness** - Potensi menjadi korban tinggi
- **Anger** - Potensi melakukan bullying tinggi
- **Fear** - Rasa cemas dalam situasi sosial
- **Disgust** - Kecenderungan meremehkan orang lain
- **Anxiety** - Kecemasan dan sulit menjadi diri sendiri
- **Embarrassment** - Malu dan tidak percaya diri
- **Ennui** - Acuh tak acuh terhadap lingkungan
# perasaankecil
