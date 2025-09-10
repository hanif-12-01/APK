# ❤️ Website Kartu Ucapan Digital - "Untukmu, yang Memilih Bertahan"

Sebuah website satu halaman yang sangat personal dan menyentuh hati, dirancang khusus sebagai kartu ucapan ulang tahun digital untuk pasangan tercinta. Website ini menceritakan perjalanan cinta dari Februari hingga September dengan pesan utama rasa syukur atas kekuatan untuk bertahan.

## 🎯 Tujuan Proyek

Membuat tribute digital yang elegan dan interaktif untuk merayakan ulang tahun pasangan pada 16 September, sekaligus menghargai perjalanan hubungan yang penuh tantangan namun berhasil dilalui bersama.

## ✨ Fitur Utama yang Telah Diimplementasi

### 🎨 Desain & Visual
- **Modern Minimalist Design** dengan fokus pada estetika premium
- **Color Palette Elegan**: Charcoal grey, off-white, beige dengan aksen gold dan burnt orange
- **Typography Premium**: Playfair Display untuk headings, Inter untuk body text
- **Mobile-First Responsive Design** untuk pengalaman optimal di semua device
- **High-Quality Visual Elements** dengan efek hover dan transisi halus

### 📱 Struktur Website (6 Section Utama)

1. **Hero Section** - "Untukmu, yang Memilih Bertahan"
   - Background gradient yang elegan
   - Typewriter effect pada judul utama
   - Scroll indicator dengan animasi bounce
   - Parallax effect saat scroll

2. **Prologue Section** - "Sebuah Cerita untukmu"
   - Pengantar personal dan menyentuh
   - Layout clean dengan typography yang readable

3. **Journey Timeline** - "Perjalanan Kita: Februari - September"
   - Timeline visual interaktif dengan 3 milestone:
     - Februari: Awal Musim Badai
     - Mei: Menemukan Titik Balik  
     - September: Lebih Kuat dari Sebelumnya
   - Hover effects dan animasi AOS (Animate On Scroll)
   - Layout zig-zag yang dinamis

4. **Gratitude Section** - "Terima Kasihku Untukmu"
   - Block quote dengan pesan terima kasih yang mendalam
   - Highlight animation pada kata-kata penting
   - Background gradient yang subtle

5. **Gallery Section** - "Kepingan Bahagia Kita"
   - Grid gallery dengan 6 foto placeholder
   - Lightbox functionality untuk viewing foto
   - Hover effects dengan transform dan shadow
   - Lazy loading untuk performance

6. **Birthday Wish** - "Untuk Babak Barumu, Sayang"
   - Layout dual-column dengan foto portrait
   - Surat ucapan digital yang personal
   - Special celebration effects saat scroll
   - Signature section dengan styling khusus

### 🎭 Animasi & Interaktivitas

- **AOS Library Integration** untuk animasi scroll yang smooth
- **Floating Hearts Animation** yang muncul secara periodik
- **Celebration Particles** saat mencapai birthday section
- **Timeline Hover Effects** dengan transform dan filter
- **Gallery Lightbox** dengan overlay effect
- **Scroll Progress Indicator** di bagian atas
- **Touch Gestures** untuk mobile navigation
- **Typewriter Effect** pada hero title
- **Parallax Scrolling** pada background hero
- **Section Fade-in** dengan Intersection Observer

### 🚀 Performance & Accessibility

- **Lazy Loading Images** untuk loading yang cepat
- **Throttled Scroll Events** untuk performance optimal
- **Preloading Critical Images** 
- **Reduced Motion Support** untuk accessibility
- **Focus States** yang jelas untuk keyboard navigation
- **Semantic HTML Structure** untuk screen readers
- **Mobile Touch Optimization**

## 🛠️ Teknologi yang Digunakan

### Frontend Libraries (via CDN)
- **AOS (Animate On Scroll)** v2.3.4 - Animasi scroll yang smooth
- **Google Fonts** - Playfair Display & Inter typography
- **Font Awesome** v6.4.0 - Icons untuk UI elements

### Core Technologies
- **HTML5** dengan semantic structure
- **CSS3** dengan modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** untuk interaktivitas
- **Responsive Design** dengan mobile-first approach

## 📁 Struktur File

```
├── index.html              # Main HTML file dengan 6 sections
├── css/
│   └── style.css          # Main stylesheet dengan complete styling
├── js/
│   └── main.js           # JavaScript untuk interaktivitas & animasi
└── README.md             # Dokumentasi proyek
```

## 🎯 Entry Points & Navigation

### Main Entry URI
- **/** (index.html) - Halaman utama kartu ucapan digital

### Section Anchors
- **#hero** - Hero section dengan judul utama
- **#prologue** - Pengantar cerita
- **#journey** - Timeline perjalanan hubungan  
- **#gratitude** - Pesan terima kasih utama
- **#gallery** - Galeri foto momen bahagia
- **#birthday-wish** - Kartu ucapan final

### Interactive Features
- **Scroll Navigation** - Smooth scrolling antar section
- **Gallery Lightbox** - Click pada foto untuk view penuh
- **Timeline Interactions** - Hover effects pada timeline items
- **Touch Gestures** - Swipe up untuk navigasi (mobile)

## 🎨 Customization Guide

### Mengganti Konten Personal

1. **Nama dan Panggilan Sayang**
   - Edit di `index.html` pada section birthday-wish
   - Ganti "Sayang" dan "Nama Kamu" dengan nama asli

2. **Foto Personal**
   - Ganti URL gambar di `index.html` dengan foto kalian
   - Timeline photos, gallery photos, dan birthday portrait
   - Pastikan ukuran foto sesuai untuk loading yang optimal

3. **Tanggal dan Timeline**
   - Edit tanggal di hero subtitle (16 September)
   - Sesuaikan timeline bulan dengan perjalanan aktual
   - Edit deskripsi timeline sesuai kisah asli

4. **Pesan Personal**
   - Customize pesan di gratitude section
   - Edit surat ucapan di birthday-wish section
   - Sesuaikan dengan bahasa dan gaya personal

### Mengubah Color Scheme

Edit CSS variables di `css/style.css`:

```css
:root {
    --charcoal-grey: #2c2c2c;    /* Warna gelap utama */
    --off-white: #faf9f6;        /* Background terang */
    --beige: #f5f1eb;            /* Background section */
    --gold-accent: #d4a574;      /* Warna aksen emas */
    --burnt-orange: #cc6b49;     /* Warna aksen hangat */
}
```

## 🚀 Performance Metrics

- **Mobile-First Design** dengan loading cepat
- **Lazy Loading Images** mengurangi initial load time
- **Throttled Animations** untuk smooth 60fps performance
- **Optimized CSS** dengan efficient selectors
- **Minimal JavaScript Bundle** tanpa heavy dependencies

## 💝 Fitur Khusus & Easter Eggs

1. **Floating Hearts** - Animasi hati yang muncul secara periodik
2. **Celebration Particles** - Efek perayaan di birthday section
3. **Word Highlighting** - Kata-kata penting di gratitude section beranimasi
4. **Console Message** - Pesan khusus untuk developer di browser console
5. **Progressive Enhancement** - Website tetap indah tanpa JavaScript

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Update Rencana Pengembangan

### Fitur yang Dapat Ditambahkan
- [ ] Background music dengan controls
- [ ] Animated SVG illustrations
- [ ] Guest book untuk pesan dari teman
- [ ] Share ke social media functionality  
- [ ] Print-friendly version
- [ ] Multiple language support
- [ ] Photo upload functionality
- [ ] Custom domain setup

### Optimasi Teknis
- [ ] PWA (Progressive Web App) support
- [ ] Advanced image optimization
- [ ] Service Worker untuk offline access
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] WebP image format support

## 💌 Pesan untuk Pengguna

Website ini dibuat dengan sepenuh hati sebagai ungkapan cinta dan apresiasi. Setiap elemen, warna, dan animasi dipilih dengan teliti untuk menciptakan pengalaman digital yang menyentuh dan berkesan.

Semoga kartu ucapan digital ini dapat menyampaikan perasaan yang mendalam dan menjadi kenangan indah di hari ulang tahun yang spesial.

**Happy Birthday! Semoga hari ini dan hari-hari selanjutnya dipenuhi kebahagiaan.** 🎉❤️

---

*Dibuat dengan 💕 menggunakan HTML, CSS, dan JavaScript*
*Website ini siap untuk di-deploy dan dibagikan kepada orang tercinta*