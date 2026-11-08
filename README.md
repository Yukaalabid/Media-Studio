# Everyday Media Studio

Starter kit untuk membangun media digital berbahasa Indonesia dengan konten motion graphic yang luas, relatable, informatif, dan konsisten. Paket ini berisi fondasi brand, pedoman editorial, kalender 30 hari, aset karakter referensi, instruksi Claude Code, dan demo awal Remotion.

> **Status brand:** nama `Everyday Media Studio` dan tulisan `EVERYDAY / EXPLAINED` hanya label kerja untuk proyek. Nama akun, logo final, dan tagline belum dikunci.

## Isi paket

- `CLAUDE.md` — instruksi utama Claude Code.
- `brand/` — positioning, voice, visual identity, dan token warna.
- `content/` — pilar editorial, kalender 30 hari, serta contoh script.
- `public/assets/` — lembar karakter dan crop referensi.
- `src/` — komposisi demo Remotion vertikal 9:16.
- `docs/` — alur produksi dan template storyboard.

## Prasyarat

- Node.js versi LTS yang kompatibel dengan Remotion.
- npm.
- Claude Code (opsional, untuk membantu pengembangan).

## Menjalankan demo

1. Ekstrak ZIP.
2. Buka folder `everyday-media-studio` di VS Code atau Claude Code.
3. Buka terminal di folder proyek.
4. Jalankan:

   ```bash
   npm install
   npm run dev
   ```

5. Remotion Studio akan menampilkan komposisi `EverydayExplainer`.

Untuk merender MP4:

```bash
npm run render
```

Hasil render disimpan ke `out/everyday-explainer.mp4`.

Untuk memeriksa TypeScript:

```bash
npm run typecheck
```

## Menggunakan dengan Claude Code

Buka folder proyek sebagai working directory. Claude Code akan membaca `CLAUDE.md`. Minta Claude memeriksa proyek dan menjalankan `npm run typecheck` sebelum melakukan perubahan besar.

## Catatan aset karakter

Karakter di `public/assets/` berasal dari satu character sheet generatif. File crop berfungsi sebagai **referensi visual**, bukan rig animasi atau potongan tubuh ber-layer. Untuk gerakan karakter yang benar-benar independen, buat aset final terpisah (kepala, badan, lengan, tangan, mulut, mata) atau gunakan ilustrasi SVG ber-layer.

## Catatan Remotion

Versi Remotion dan `@remotion/cli` dipatok sama pada `4.0.541` di `package.json`. Pertahankan kesamaan versi untuk paket `remotion` dan `@remotion/*` saat menambah paket Remotion lain. Periksa dokumentasi dan lisensi Remotion sebelum penggunaan komersial atau produksi berskala.

- Dokumentasi: https://www.remotion.dev/docs/
- Membuat project: https://www.remotion.dev/docs/
- Lisensi: https://www.remotion.dev/license

## Prinsip editorial

Jangan mengarang data, temuan psikologi, atau klaim kesehatan. Riset fakta sebelum menulis narasi. Bedakan fakta, interpretasi, dan opini. Jangan memasukkan promosi affiliate pada fase pembangunan brand kecuali diminta secara khusus.
