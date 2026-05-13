import Image from "next/image";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.8 11.8 0 0 0 1.6 5.95L0 24l6.4-1.67a11.83 11.83 0 0 0 5.64 1.44h.01c6.53 0 11.83-5.3 11.83-11.84a11.8 11.8 0 0 0-3.36-8.45Zm-8.48 18.3h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.84 9.84 0 0 1-1.5-5.27c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.88 9.87Zm5.41-7.38c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.95 1.2-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.37-1.47a8.94 8.94 0 0 1-1.64-2.03c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.89 1.23 3.09c.15.2 2.13 3.24 5.16 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.8-.74 2.05-1.45.25-.72.25-1.34.18-1.47-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M16.7 2h2.66c.15 1.26.72 2.42 1.62 3.3.9.88 2.08 1.42 3.34 1.54v2.72a8.14 8.14 0 0 1-4.96-1.69v6.44a6.31 6.31 0 1 1-5.47-6.25v2.9a3.5 3.5 0 1 0 2.81 3.44V2Z" />
    </svg>
  );
}

const menus = [
  {
    name: "Mie Spesial Sapi",
    description: "Mie gurih dengan topping daging sapi dan sayur segar.",
    price: "Rp18.000",
    image: "/menu-1.jpeg",
  },
  {
    name: "Mie Sambal Nampol",
    description: "Rasa pedas manis ala resto, cocok untuk pecinta pedas.",
    price: "Rp16.000",
    image: "/menu-2.jpeg",
  },
  {
    name: "Mie Komplit Ekonomis",
    description: "Porsi kenyang dengan cita rasa premium harga bersahabat.",
    price: "Rp15.000",
    image: "/menu-3.jpeg",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-6 sm:gap-10 sm:py-8 md:px-8 md:py-12">
      <section className="rounded-3xl border border-orange-200/70 bg-white/80 px-4 py-7 shadow-lg backdrop-blur sm:px-6 sm:py-10 md:px-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-orange-200 shadow-sm sm:h-24 sm:w-24">
            <Image
              src="/logo-miesapisinar.jpeg"
              alt="Logo Miesapisinar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-orange-200 bg-white shadow-sm sm:h-24 sm:w-24">
            <Image
              src="/logo-uwika.png"
              alt="Logo UWIKA"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="mb-3 inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-800">
          Company Profile UMKM
        </p>
        <h1 className="font-serif text-3xl font-bold leading-tight text-orange-950 sm:text-4xl md:text-5xl">
          Miesapisinar
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700 sm:mt-4 sm:text-base md:text-lg">
          Mie sapi dan ayam juara pedasnya. Menjual makanan ala resto dengan
          harga ekonomis dan murah meriah agar bisa dinikmati segala konsumen
          mulai dari pelajar, pekerja, hingga masyarakat luas.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://wa.me/6282266592267"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-orange-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-800 sm:w-auto"
          >
            Pesan via WhatsApp
          </a>
          <a
            href="#katalog"
            className="w-full rounded-full border border-orange-300 px-5 py-3 text-center text-sm font-semibold text-orange-900 transition hover:bg-orange-100 sm:w-auto"
          >
            Lihat Katalog
          </a>
        </div>
      </section>

      <section id="katalog" className="space-y-5 pt-1">
        <div className="space-y-2 rounded-2xl bg-white/70 px-3 py-3 sm:px-4">
          <h2 className="font-serif text-2xl leading-[1.2] font-bold text-orange-950 sm:text-3xl">Katalog Menu</h2>
          <p className="text-sm font-medium text-stone-700">Harga ekonomis ala resto</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <article
              key={menu.name}
              className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-md transition hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/11] bg-orange-50">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-4 sm:p-5">
                <h3 className="text-base font-semibold text-orange-950 sm:text-lg">{menu.name}</h3>
                <p className="text-sm leading-6 text-stone-600">{menu.description}</p>
                <p className="text-base font-bold text-orange-700">{menu.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-orange-200 bg-white px-4 py-6 shadow-md sm:px-6 sm:py-8 md:px-8">
        <h2 className="font-serif text-xl font-bold text-orange-950 sm:text-2xl">Kontak & Sosial Media</h2>
        <div className="mt-4 grid gap-3 text-sm text-stone-700 md:grid-cols-2">
          <a
            className="flex items-center gap-3 rounded-xl border border-orange-200 p-4 transition hover:bg-orange-50"
            href="https://wa.me/6282266592267"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <WhatsAppIcon />
            </span>
            <span>WhatsApp: 082266592267</span>
          </a>
          <a
            className="flex items-center gap-3 rounded-xl border border-orange-200 p-4 transition hover:bg-orange-50"
            href="https://www.instagram.com/miesapisinar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-700">
              <InstagramIcon />
            </span>
            <span>Instagram: @miesapisinartidarsby</span>
          </a>
          <a
            className="flex items-center gap-3 rounded-xl border border-orange-200 p-4 transition hover:bg-orange-50"
            href="https://www.tiktok.com/@miesapisinartidarsby?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-800">
              <TikTokIcon />
            </span>
            <span>TikTok: @miesapisinartidarsby</span>
          </a>
          <p className="rounded-xl border border-orange-200 p-4">
            Visi: Menjual makanan ala resto harga ekonomis untuk semua kalangan.
          </p>
          <p className="rounded-xl border border-orange-200 p-4">
            Jam buka: 12.00 - 23.59
          </p>
          <p className="rounded-xl border border-orange-200 p-4">
            Alamat: Jl. Tidar depan SPBU, Surabaya
          </p>
          <p className="rounded-xl border border-orange-200 p-4">
            Nomor tambahan: 0881036268003 (via Gojek/Shopee)
          </p>
          <a
            className="rounded-xl border border-orange-200 p-4 font-semibold text-orange-800 transition hover:bg-orange-50"
            href="https://maps.app.goo.gl/sahCwr7UpZtLfvRZ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka di Google Maps
          </a>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-orange-200">
          <iframe
            title="Lokasi Miesapisinar"
            src="https://www.google.com/maps?q=MIE+SAPI+SINAR,+Jl.+Tidar,+Surabaya&output=embed"
            className="h-64 w-full sm:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="rounded-2xl border border-orange-200 bg-white/80 px-4 py-4 text-center text-xs font-medium text-stone-600 shadow-sm sm:py-5 sm:text-sm">
        Copyright @kkndigitalmarketing
      </footer>

      <a
        href="https://wa.me/6282266592267"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon />
        <span>Chat WhatsApp</span>
      </a>
    </main>
  );
}
