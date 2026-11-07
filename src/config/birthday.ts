// ✿ Personalize everything here — no other file needs editing.
import { imageVariants } from "@/lib/images";
import songs from "@/assets/mulfanart.mp3";

export const birthday = {
  recipientName: "Dara",
  senderName: "someone is rooting for you.",
  birthdayDate: "20 Oktober 2007",
  heroTitle: "Happy Birthday",
  heroSubtitle:
    "Hari ini, dunia menjadi lebih baik karena ada kamu di dalamnya. I'm glad the world has you in it. Aku harap kamu tidak pernah lupa bahwa kehadiranmu begitu berarti. Terima kasih sudah menjadi dirimu, dan sudah bertahan sampai hari ini.",
  heroCta: "Mulai Cerita",
  storyTitle: "Hari ini, dunia merayakan seseorang yang istimewa.",
  birthdayMessage: [
    "You deserve beautiful things.",
    "perhaps more than you realize.",
    "Barangkali tanpa kamu sadari.",
    "kehadiranmu telah menjadi bagian kecil dari banyak hal baik.",
    "Someone is wishing you well, quietly. ♡",
  ],
  // Replace with your own photos (import them above, or use https URLs).
  gallery: [
    {
      image: imageVariants("foto1"),
      thumbnail: imageVariants("foto1", true),
      title: "click me",
      // caption: "Di antara rintik hujan hari itu, ada senyummu yang diam-diam membuatku jatuh hati."
    },
    {
      image: imageVariants("foto2"),
      thumbnail: imageVariants("foto2", true),
      title: "click me",
      // caption: "Awalnya hanya dua orang yang ingin saling mengenal, lalu perlahan kamu menjadi seseorang yang istimewa."
    },
    {
      image: imageVariants("foto3"),
      thumbnail: imageVariants("foto3", true),
      title: "click me",
      // caption: "Empat pose sederhana, tapi setiap fotonya menyimpan alasan untuk selalu mengingat kita."
    },
  ],
  birthdayWishes: [
    "Semoga tidak ada musim yang membuatmu lupa bahwa kamu selalu punya kesempatan untuk tumbuh dan kembali mekar.",
    "Semoga langkah-langkah kecilmu membawamu ke tempat-tempat yang selama ini hanya berani kamu bayangkan.",
    "Semoga hidup lebih sering memelukmu dengan hal-hal baik, dan tidak terlalu banyak mengujimu dengan hal-hal yang melelahkan.",
    "And if life ever asks what you deserve, I hope the answer is everything beautiful. ♡",
  ],
  letterHeading: "Untuk Angelika, di hari istimewamu. ♡",
  loveLetter: `Happy birthday, Angelika!

Terima kasih sudah pernah menjadi bagian indah dari struktur ingatanku. Tulisan ini kususun sendiri selama sebulan, dari berbagai renungan dan ocehan manis yang sesekali memenuhi kepala, hingga tanpa sadar membuat mataku berbinar.

Segala hal kecil maupun besar yang pernah terjadi antara kamu dan aku, kucoba tuangkan di sini agar tersampaikan betapa berartinya kehadiranmu. Sebagaimana makna indah yang terkandung dalam nama pemberian kedua orang tuamu, semoga kebaikan yang kamu bawa senantiasa tumbuh dan menjadi sukacita bagi orang-orang di sekitarmu.

Aku terus berdoa agar di antara miliaran kemungkinan yang belum terjadi, masa depan selalu menyimpan banyak alasan untuk membuatmu bahagia.

Sekali lagi, selamat bertambah usia. Take care of yourself, Nje. ♡

With sincere wishes,`,
  letterSignoff: "From somewhere in this universe, ♡",
  finaleMessage:
    "Senyummu adalah pelipur laraku. Bahkan hanya dengan cukup mengingat bagaimana kamu tersenyum itu saja sudah cukup bagiku.",
  finaleHeading: "Aku mewakili orang-orang yang menganggap kamu berarti.",
  signature: "Happy Birthday, Nje!",
  // Paste an mp3 URL for your own song. Empty = a soft generated piano melody.
  backgroundMusicUrl: songs,
};
