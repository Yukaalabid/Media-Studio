/**
 * Content-data shape for future data-driven videos.
 * Keep editorial content separate from visual components.
 */
export const exampleVideo = {
  id: 'why-we-keep-scrolling',
  title: 'Kenapa kita sulit berhenti scrolling?',
  category: 'Everyday Life',
  durationSeconds: 32,
  hook: 'Cuma mau cek satu notifikasi, tiba-tiba sudah 30 menit.',
  situation: 'Buka HP sebentar, lalu satu video muncul disusul video lain.',
  keyPoints: [
    'Konten baru terus muncul.',
    'Rasa ingin tahu membuat kita ingin melihat berikutnya.',
    'Feed dapat terus berlanjut tanpa titik akhir yang jelas.',
  ],
  takeaway: 'Sadari kapan mulai membuka aplikasi dan tentukan kapan waktunya berhenti.',
  cta: 'Kamu juga sering begini? Ceritakan pengalamanmu di komentar.',
} as const;
