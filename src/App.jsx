import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [bookingSent, setBookingSent] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    message: "",
  });

  const t = {
    en: {
      hero: "Beautiful apartment only 80 meters from Playa del Cura - Torrevieja",
      viewGallery: "View Gallery",
      checkAvailability: "Check Availability",
      about: "About the apartment",
      stay: "A comfortable seaside stay in Torrevieja",
      aboutText:
        "Casa Hermanos is a beautiful apartment located just 80 meters from Playa del Cura in Torrevieja. Enjoy the sun, beach, restaurants, and relaxed atmosphere of the Spanish coast. Perfect for families, couples, or friends looking for a wonderful holiday near the sea.",
      gallery: "Gallery",
      photoGallery: "Photo Gallery",
      clickPhoto: "Click any photo to open fullscreen",
      availability: "Availability",
      howToBook: "How to Book",
      bookingText:
        "Select your check-in and check-out dates, fill in your details, and send a booking request directly from the website.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      bookingRequest: "Booking Request",
      nights: "Nights",
      apartmentPrice: "Apartment price",
      cleaningFee: "Cleaning fee",
      totalPrice: "Total price",
      sendRequest: "Send Booking Request",
      success: "Thank you! Your booking request has been sent successfully. We will contact you soon.",
      location: "Location",
      locationTitle: "80 meters from Playa del Cura",
      contact: "Contact",
      contactTitle: "Questions about Casa Hermanos?",
      contactText: "For questions, details, or special requests, contact us directly.",
    },
    nl: {
      hero: "Mooi appartement op slechts 80 meter van Playa del Cura - Torrevieja",
      viewGallery: "Bekijk Galerij",
      checkAvailability: "Beschikbaarheid",
      about: "Over het appartement",
      stay: "Een comfortabel verblijf aan zee in Torrevieja",
      aboutText:
        "Casa Hermanos is een mooi appartement op slechts 80 meter van Playa del Cura in Torrevieja. Geniet van zon, strand, restaurants en de ontspannen sfeer van de Spaanse kust.",
      gallery: "Galerij",
      photoGallery: "Fotogalerij",
      clickPhoto: "Klik op een foto om volledig scherm te openen",
      availability: "Beschikbaarheid",
      howToBook: "Hoe te boeken",
      bookingText:
        "Selecteer je aankomst- en vertrekdatum, vul je gegevens in en verstuur direct een boekingsaanvraag.",
      checkIn: "Inchecken",
      checkOut: "Uitchecken",
      bookingRequest: "Boekingsaanvraag",
      nights: "Nachten",
      apartmentPrice: "Prijs appartement",
      cleaningFee: "Schoonmaakkosten",
      totalPrice: "Totale prijs",
      sendRequest: "Verstuur boekingsaanvraag",
      success: "Bedankt! Je boekingsaanvraag is succesvol verzonden. Wij nemen snel contact met je op.",
      location: "Locatie",
      locationTitle: "80 meter van Playa del Cura",
      contact: "Contact",
      contactTitle: "Vragen over Casa Hermanos?",
      contactText: "Voor vragen, details of speciale verzoeken kun je direct contact opnemen.",
    },
    es: {
      hero: "Hermoso apartamento a solo 80 metros de Playa del Cura - Torrevieja",
      viewGallery: "Ver Galería",
      checkAvailability: "Disponibilidad",
      about: "Sobre el apartamento",
      stay: "Una estancia cómoda junto al mar en Torrevieja",
      aboutText:
        "Casa Hermanos es un hermoso apartamento situado a solo 80 metros de Playa del Cura en Torrevieja. Disfruta del sol, la playa, restaurantes y el ambiente relajado de la costa española.",
      gallery: "Galería",
      photoGallery: "Galería de fotos",
      clickPhoto: "Haz clic en una foto para verla en pantalla completa",
      availability: "Disponibilidad",
      howToBook: "Cómo reservar",
      bookingText:
        "Selecciona tus fechas de entrada y salida, completa tus datos y envía una solicitud de reserva.",
      checkIn: "Entrada",
      checkOut: "Salida",
      bookingRequest: "Solicitud de reserva",
      nights: "Noches",
      apartmentPrice: "Precio del apartamento",
      cleaningFee: "Limpieza",
      totalPrice: "Precio total",
      sendRequest: "Enviar solicitud",
      success: "¡Gracias! Tu solicitud de reserva ha sido enviada correctamente. Te contactaremos pronto.",
      location: "Ubicación",
      locationTitle: "A 80 metros de Playa del Cura",
      contact: "Contacto",
      contactTitle: "¿Preguntas sobre Casa Hermanos?",
      contactText: "Para preguntas, detalles o solicitudes especiales, contáctanos directamente.",
    },
    de: {
      hero: "Wunderschönes Apartment nur 80 Meter von Playa del Cura entfernt",
      viewGallery: "Galerie ansehen",
      checkAvailability: "Verfügbarkeit",
      about: "Über das Apartment",
      stay: "Ein komfortabler Aufenthalt am Meer in Torrevieja",
      aboutText:
        "Casa Hermanos ist ein wunderschönes Apartment nur 80 Meter von Playa del Cura in Torrevieja entfernt. Genießen Sie Sonne, Strand, Restaurants und die entspannte Atmosphäre der spanischen Küste.",
      gallery: "Galerie",
      photoGallery: "Fotogalerie",
      clickPhoto: "Klicken Sie auf ein Foto für Vollbild",
      availability: "Verfügbarkeit",
      howToBook: "Buchung",
      bookingText:
        "Wählen Sie Anreise- und Abreisedatum, füllen Sie Ihre Daten aus und senden Sie eine Buchungsanfrage.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      bookingRequest: "Buchungsanfrage",
      nights: "Nächte",
      apartmentPrice: "Apartmentpreis",
      cleaningFee: "Reinigungskosten",
      totalPrice: "Gesamtpreis",
      sendRequest: "Anfrage senden",
      success: "Vielen Dank! Ihre Buchungsanfrage wurde erfolgreich gesendet. Wir kontaktieren Sie bald.",
      location: "Standort",
      locationTitle: "80 Meter von Playa del Cura",
      contact: "Kontakt",
      contactTitle: "Fragen zu Casa Hermanos?",
      contactText: "Für Fragen, Details oder besondere Wünsche kontaktieren Sie uns direkt.",
    },
    sv: {
      hero: "Vacker lägenhet bara 80 meter från Playa del Cura - Torrevieja",
      viewGallery: "Visa galleri",
      checkAvailability: "Tillgänglighet",
      about: "Om lägenheten",
      stay: "En bekväm vistelse vid havet i Torrevieja",
      aboutText:
        "Casa Hermanos är en vacker lägenhet bara 80 meter från Playa del Cura i Torrevieja. Njut av sol, strand, restauranger och den avslappnade atmosfären vid spanska kusten.",
      gallery: "Galleri",
      photoGallery: "Fotogalleri",
      clickPhoto: "Klicka på en bild för helskärm",
      availability: "Tillgänglighet",
      howToBook: "Så bokar du",
      bookingText:
        "Välj in- och utcheckningsdatum, fyll i dina uppgifter och skicka en bokningsförfrågan.",
      checkIn: "Incheckning",
      checkOut: "Utcheckning",
      bookingRequest: "Bokningsförfrågan",
      nights: "Nätter",
      apartmentPrice: "Lägenhetspris",
      cleaningFee: "Städavgift",
      totalPrice: "Totalpris",
      sendRequest: "Skicka förfrågan",
      success: "Tack! Din bokningsförfrågan har skickats. Vi kontaktar dig snart.",
      location: "Plats",
      locationTitle: "80 meter från Playa del Cura",
      contact: "Kontakt",
      contactTitle: "Frågor om Casa Hermanos?",
      contactText: "För frågor, detaljer eller särskilda önskemål, kontakta oss direkt.",
    },
    ar: {
      hero: "شقة جميلة على بعد 80 متر فقط من شاطئ بلايا ديل كورا",
      viewGallery: "عرض الصور",
      checkAvailability: "التوفر",
      about: "عن الشقة",
      stay: "إقامة مريحة بجانب البحر في توريفايجا",
      aboutText:
        "كاسا هيرمانوس شقة جميلة تقع على بعد 80 متر فقط من شاطئ بلايا ديل كورا في توريفايجا. استمتع بالشمس والشاطئ والمطاعم والأجواء الهادئة على الساحل الإسباني.",
      gallery: "الصور",
      photoGallery: "معرض الصور",
      clickPhoto: "اضغط على أي صورة لعرضها بحجم كامل",
      availability: "التوفر",
      howToBook: "طريقة الحجز",
      bookingText:
        "اختر تاريخ الوصول والمغادرة، املأ بياناتك وأرسل طلب الحجز مباشرة.",
      checkIn: "تسجيل الوصول",
      checkOut: "تسجيل المغادرة",
      bookingRequest: "طلب الحجز",
      nights: "الليالي",
      apartmentPrice: "سعر الشقة",
      cleaningFee: "رسوم التنظيف",
      totalPrice: "السعر الإجمالي",
      sendRequest: "إرسال طلب الحجز",
      success: "شكراً لك! تم إرسال طلب الحجز بنجاح. سنتواصل معك قريباً.",
      location: "الموقع",
      locationTitle: "80 متر من Playa del Cura",
      contact: "اتصال",
      contactTitle: "أسئلة حول Casa Hermanos؟",
      contactText: "للاستفسارات أو التفاصيل أو الطلبات الخاصة، تواصل معنا مباشرة.",
    },
    uk: {
      hero: "Чудові апартаменти лише за 80 метрів від Playa del Cura",
      viewGallery: "Переглянути галерею",
      checkAvailability: "Доступність",
      about: "Про апартаменти",
      stay: "Комфортне проживання біля моря в Торрев'єсі",
      aboutText:
        "Casa Hermanos — це чудові апартаменти лише за 80 метрів від Playa del Cura в Торрев'єсі. Насолоджуйтесь сонцем, пляжем, ресторанами та атмосферою іспанського узбережжя.",
      gallery: "Галерея",
      photoGallery: "Фотогалерея",
      clickPhoto: "Натисніть фото для повного екрану",
      availability: "Доступність",
      howToBook: "Як забронювати",
      bookingText:
        "Оберіть дати заїзду та виїзду, заповніть дані та надішліть запит.",
      checkIn: "Заїзд",
      checkOut: "Виїзд",
      bookingRequest: "Запит на бронювання",
      nights: "Ночі",
      apartmentPrice: "Ціна апартаментів",
      cleaningFee: "Прибирання",
      totalPrice: "Загальна ціна",
      sendRequest: "Надіслати запит",
      success: "Дякуємо! Ваш запит на бронювання успішно надіслано. Ми скоро зв’яжемося з вами.",
      location: "Локація",
      locationTitle: "80 метрів від Playa del Cura",
      contact: "Контакт",
      contactTitle: "Питання про Casa Hermanos?",
      contactText: "Для питань, деталей або спеціальних запитів зв’яжіться з нами напряму.",
    },
    pl: {
      hero: "Piękny apartament tylko 80 metrów od Playa del Cura",
      viewGallery: "Zobacz galerię",
      checkAvailability: "Dostępność",
      about: "O apartamencie",
      stay: "Komfortowy pobyt nad morzem w Torrevieja",
      aboutText:
        "Casa Hermanos to piękny apartament położony tylko 80 metrów od Playa del Cura w Torrevieja. Ciesz się słońcem, plażą, restauracjami i spokojną atmosferą hiszpańskiego wybrzeża.",
      gallery: "Galeria",
      photoGallery: "Galeria zdjęć",
      clickPhoto: "Kliknij zdjęcie, aby otworzyć pełny ekran",
      availability: "Dostępność",
      howToBook: "Jak zarezerwować",
      bookingText:
        "Wybierz datę przyjazdu i wyjazdu, wpisz swoje dane i wyślij zapytanie.",
      checkIn: "Zameldowanie",
      checkOut: "Wymeldowanie",
      bookingRequest: "Zapytanie o rezerwację",
      nights: "Noce",
      apartmentPrice: "Cena apartamentu",
      cleaningFee: "Opłata za sprzątanie",
      totalPrice: "Cena całkowita",
      sendRequest: "Wyślij zapytanie",
      success: "Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.",
      location: "Lokalizacja",
      locationTitle: "80 metrów od Playa del Cura",
      contact: "Kontakt",
      contactTitle: "Pytania o Casa Hermanos?",
      contactText: "W przypadku pytań, szczegółów lub specjalnych próśb skontaktuj się z nami bezpośrednio.",
    },
  };

  const tr = t[language];

  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const emptyDays = firstDay === 0 ? 6 : firstDay - 1;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const bookedDates = [
  "2026-10-01",
  "2026-10-02",
  "2026-10-03",
  "2026-10-04",
  "2026-10-05",
  "2026-10-06",
  "2026-10-07",
  "2026-10-08",
  "2026-10-09",
  "2026-10-10",
  "2026-10-11",
  "2026-10-12",
  "2026-10-13",
  "2026-10-14",
  "2026-10-15",
  "2026-10-16",
  "2026-10-17",
  "2026-10-18",
  "2026-10-19",
  "2026-10-20",
  "2026-10-21",
  "2026-10-22",
  "2026-10-23",
  "2026-10-24",
  "2026-10-25",
  "2026-10-26",
  "2026-10-27",
  "2026-10-28",
  "2026-10-29",
  "2026-10-30",
  "2026-10-31",
];

  const formatDateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const isPastDate = (day) => {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isBookedDate = (day) => {
    const date = new Date(year, month, day);
    return bookedDates.includes(formatDateKey(date));
  };

  const isClosedDate = (day) => isPastDate(day) || isBookedDate(day);

  const getPriceForDate = (date) => {
  const month = date.getMonth() + 1;

  if (month === 5) return 60; // May
  if (month === 6) return 70; // June
  if (month === 7 || month === 8) return 85; // July and August

  return 49; // All other months
};

  const getPrice = (day) => {
    const date = new Date(year, month, day);
    return `€${getPriceForDate(date)}`;
  };

  const cleaningFee = 100;

  const getBookingNights = () => {
    if (!checkIn || !checkOut) return 0;
    return Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  };

  const getBookingPrice = () => {
    if (!checkIn || !checkOut) return 0;

    let total = 0;
    const nights = getBookingNights();

    for (let i = 0; i < nights; i++) {
      const date = new Date(checkIn);
      date.setDate(checkIn.getDate() + i);
      total += getPriceForDate(date);
    }

    return total;
  };

  const bookingNights = getBookingNights();
  const apartmentPrice = getBookingPrice();
  const totalPrice = apartmentPrice + (bookingNights > 0 ? cleaningFee : 0);

  const previousMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const selectBookingDate = (day) => {
    if (isClosedDate(day)) return;

    const selected = new Date(year, month, day);

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(selected);
      setCheckOut(null);
      setBookingSent(false);
      return;
    }

    if (selected <= checkIn) {
      setCheckIn(selected);
      setCheckOut(null);
      setBookingSent(false);
      return;
    }

    setCheckOut(selected);
    setBookingSent(false);
  };

  const isSelectedDate = (day) => {
    const date = new Date(year, month, day).toDateString();
    return (
      (checkIn && date === checkIn.toDateString()) ||
      (checkOut && date === checkOut.toDateString())
    );
  };

  const isBetweenDates = (day) => {
    if (!checkIn || !checkOut) return false;
    const date = new Date(year, month, day);
    return date > checkIn && date < checkOut;
  };

  const handleBookingSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://formspree.io/f/mredkzvo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: bookingForm.name,
        email: bookingForm.email,
        phone: bookingForm.phone,
        guests: bookingForm.guests,
        message: bookingForm.message,
        checkIn: checkIn ? formatDate(checkIn) : "",
        checkOut: checkOut ? formatDate(checkOut) : "",
        nights: bookingNights,
        totalPrice: totalPrice,
      }),
    });

    if (response.ok) {
      setBookingSent(true);
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        message: "",
      });
      setCheckIn(null);
      setCheckOut(null);
    }
  };

  const heroPhoto = "https://i.imgur.com/R0yGc4Q.jpeg";

  const photos = [
    { src: "https://i.imgur.com/5oKlE6Q.jpeg", title: "Apartment" },
    { src: "https://i.imgur.com/xJtQcax.jpeg", title: "Living Room" },
    { src: "https://i.imgur.com/x3aw19i.jpeg", title: "Living Room" },
    { src: "https://i.imgur.com/ePq82ur.jpeg", title: "Dining Room" },
    { src: "https://i.imgur.com/yRlbEVx.jpeg", title: "Dining Room" },
    { src: "https://i.imgur.com/o2hPyNW.jpeg", title: "Kitchen" },
    { src: "https://i.imgur.com/5eGiFNz.jpeg", title: "Apartment" },
    { src: "https://i.imgur.com/1V7dhKw.jpeg", title: "Room 1" },
    { src: "https://i.imgur.com/oOCUX0y.jpeg", title: "Room 2" },
    { src: "https://i.imgur.com/WFXhmAS.jpeg", title: "Room 2" },
    { src: "https://i.imgur.com/I2FTLGe.jpeg", title: "Room 2" },
    { src: "https://i.imgur.com/Z3Af1XS.jpeg", title: "Bathroom" },
  ];

  const features = [
    { icon: "🌊", title: "Sea View", text: "Beautiful sea view from the balcony" },
    { icon: "❄️", title: "Air Conditioning", text: "Air conditioning available" },
    { icon: "📶", title: "WiFi", text: "Free WiFi available" },
    { icon: "📺", title: "Smart TV", text: "Smart TV available" },
    { icon: "🛏️", title: "Bedrooms", text: "2 bedrooms" },
    { icon: "🛁", title: "Bathroom", text: "1 bathroom" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-stone-900 font-[Poppins]">
      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <img src={heroPhoto} alt="Casa Hermanos" className="absolute inset-0 w-full h-full object-cover scale-110 saturate-[1.5] brightness-[1.15] contrast-[1.15] hue-rotate-[2deg]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-cyan-400/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/70" />

        <div className="absolute top-6 right-6 z-30 flex gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-2xl">
          <button onClick={() => setLanguage("en")} className="text-xl hover:scale-125 transition">🇬🇧</button>
          <button onClick={() => setLanguage("nl")} className="text-xl hover:scale-125 transition">🇳🇱</button>
          <button onClick={() => setLanguage("es")} className="text-xl hover:scale-125 transition">🇪🇸</button>
          <button onClick={() => setLanguage("de")} className="text-xl hover:scale-125 transition">🇩🇪</button>
          <button onClick={() => setLanguage("sv")} className="text-xl hover:scale-125 transition">🇸🇪</button>
          <button onClick={() => setLanguage("ar")} className="text-xl hover:scale-125 transition">🇸🇦</button>
          <button onClick={() => setLanguage("uk")} className="text-xl hover:scale-125 transition">🇺🇦</button>
          <button onClick={() => setLanguage("pl")} className="text-xl hover:scale-125 transition">🇵🇱</button>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <div className="mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur px-5 py-2 text-white/90 text-sm tracking-[0.35em] uppercase">
            Torrevieja · Spain
          </div>
          <img
  src="/casa-hermanos-logo.png"
  alt="Casa Hermanos"
  className="w-[1200px] md:w-[3200px] mx-auto drop-shadow-[0_35px_120px_rgba(0,0,0,0.75)]"
/>
          <div className="mt-6 h-px w-28 bg-white/70" />
          <p className="mt-8 text-white text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
            {tr.hero}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-white/15 backdrop-blur border border-white/40 px-8 py-4 font-semibold text-white shadow-xl hover:bg-white hover:text-stone-900 transition">
              {tr.viewGallery}
            </button>
            <button onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-white/15 backdrop-blur border border-white/40 px-8 py-4 font-semibold text-white shadow-xl hover:bg-white hover:text-stone-900 transition">
              {tr.checkAvailability}
            </button>
          </div>
        </div>
      </section>
<section className="bg-black py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
        Video Tour
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
        Explore Casa Hermanos
      </h2>

      <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-8">
        Experience the apartment, beach atmosphere and modern interior before your stay.
      </p>
    </div>

    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

      <video
        className="w-full aspect-video object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source
  src="/apartment-tour.mp4"
  type="video/quicktime"
/>
      </video>

    </div>
  </div>
</section>
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">{tr.about}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-7 leading-tight">{tr.stay}</h2>
          <p className="text-lg leading-9 text-stone-600">{tr.aboutText}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 hover:-translate-y-1 transition">
              <p className="text-3xl mb-4">{feature.icon}</p>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-stone-500 leading-6">{feature.text}</p>
            </div>
          ))}

          <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 sm:col-span-2">
            <p className="text-3xl mb-4">🛏️</p>
            <h3 className="font-bold text-lg mb-1">Beds</h3>
            <p className="text-stone-500 leading-7">
              1 double bed (160x200 cm)
              <br />
              2 single beds (90x200 cm)
            </p>
            <div className="mt-5 pt-5 border-t border-stone-200">
              <h3 className="font-bold text-lg mb-1">Sofa</h3>
              <p className="text-stone-500 leading-7">Sofa bed (140x180 cm)</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 sm:col-span-2">
            <p className="text-3xl mb-4">🚫🐾</p>
            <h3 className="font-bold text-lg mb-1">No Pets Allowed</h3>
            <p className="text-stone-500 leading-7">Animals are not allowed in the apartment</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">{tr.gallery}</p>
              <h2 className="text-4xl md:text-5xl font-bold">{tr.photoGallery}</h2>
            </div>
            <p className="text-stone-500">{tr.clickPhoto}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <button key={index} onClick={() => setSelectedPhoto(index)} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 text-left hover:-translate-y-1 transition">
                <div className="overflow-hidden">
                  <img src={photo.src} alt={photo.title} className="w-full h-[310px] object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{photo.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedPhoto !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4">
            <button onClick={() => setSelectedPhoto(null)} className="absolute top-6 right-6 text-white text-5xl hover:scale-110 transition">×</button>
            <button onClick={() => setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1)} className="absolute left-4 md:left-10 text-white text-6xl px-4 hover:scale-110 transition">‹</button>
            <img src={photos[selectedPhoto].src} alt="Fullscreen" className="max-w-[95%] max-h-[90vh] object-contain rounded-3xl shadow-2xl" />
            <button onClick={() => setSelectedPhoto(selectedPhoto === photos.length - 1 ? 0 : selectedPhoto + 1)} className="absolute right-4 md:right-10 text-white text-6xl px-4 hover:scale-110 transition">›</button>
          </div>
        )}
      </section>

      <section id="booking" className="bg-[#f8f5ef] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">{tr.availability}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">{tr.howToBook}</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-8">{tr.bookingText}</p>
          </div>

          <div className="grid xl:grid-cols-3 gap-8 items-start">
            <div className="xl:col-span-2 bg-white rounded-[2rem] p-5 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-stone-100">
              <div className="flex items-center justify-between mb-8">
                <button onClick={previousMonth} className="bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-full w-12 h-12 text-3xl shadow-sm transition">‹</button>
                <h3 className="text-2xl md:text-3xl font-bold text-center">{monthName}</h3>
                <button onClick={nextMonth} className="bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-full w-12 h-12 text-3xl shadow-sm transition">›</button>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-xs md:text-sm font-bold text-stone-400 mb-3 uppercase tracking-wide">
                <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: emptyDays }).map((_, index) => (
                  <div key={`empty-${index}`} className="min-h-[76px] md:min-h-[96px] rounded-2xl bg-transparent" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const price = getPrice(day);
                  const past = isPastDate(day);
                  const booked = isBookedDate(day);
                  const closed = past || booked;

                  return (
                    <button key={day} onClick={() => selectBookingDate(day)} disabled={closed} className={`min-h-[76px] md:min-h-[96px] rounded-2xl p-3 flex flex-col justify-between text-left border transition ${past ? "bg-red-50 text-red-400 border-red-100 cursor-not-allowed" : booked ? "bg-stone-200 text-stone-500 border-stone-300 cursor-not-allowed" : isSelectedDate(day) ? "bg-stone-900 text-white border-stone-900 shadow-xl" : isBetweenDates(day) ? "bg-emerald-50 border-emerald-200" : "bg-stone-50 border-stone-100 hover:bg-white hover:shadow-md"}`}>
                      <span className={`font-bold ${isSelectedDate(day) ? "text-white" : closed ? "" : "text-stone-800"}`}>{day}</span>
                      {closed ? (
                        <span className={`text-right text-2xl font-bold ${past ? "text-red-500" : "text-stone-500"}`}>–</span>
                      ) : (
                        <span className={`text-right text-sm font-bold ${isSelectedDate(day) ? "text-white" : "text-emerald-700"}`}>{price}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">{tr.checkIn}</p>
                  <h4 className="text-2xl font-bold text-stone-900">15:00 PM</h4>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">{tr.checkOut}</p>
                  <h4 className="text-2xl font-bold text-stone-900">11:00 AM</h4>
                </div>
              </div>
            </div>

            <div className="bg-stone-950 text-white rounded-[2rem] p-7 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-bold mb-6">{tr.bookingRequest}</h3>

              <div className="bg-white/10 rounded-3xl p-5 mb-6 text-sm text-stone-200 space-y-3 border border-white/10">
                <p><strong>{tr.checkIn}:</strong> {checkIn ? formatDate(checkIn) : "Select date"}</p>
                <p><strong>{tr.checkOut}:</strong> {checkOut ? formatDate(checkOut) : "Select date"}</p>
                <p><strong>{tr.nights}:</strong> {bookingNights > 0 ? bookingNights : "-"}</p>

                <div className="border-t border-white/20 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between"><span>{tr.apartmentPrice}</span><span>{bookingNights > 0 ? `€${apartmentPrice}` : "-"}</span></div>
                  <div className="flex justify-between"><span>{tr.cleaningFee}</span><span>{bookingNights > 0 ? `€${cleaningFee}` : "€100"}</span></div>
                  <div className="flex justify-between text-xl font-bold text-white pt-3"><span>{tr.totalPrice}</span><span>{bookingNights > 0 ? `€${totalPrice}` : "-"}</span></div>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="text" placeholder="Full name" value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" required />
                <input type="email" placeholder="Email address" value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" required />
                <input type="tel" placeholder="Phone number" value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" />
                <select value={bookingForm.guests} onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white">
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                </select>
                <textarea placeholder="Extra message" value={bookingForm.message} onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white min-h-[110px]" />
                <button type="submit" disabled={!checkIn || !checkOut} className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-500 disabled:cursor-not-allowed transition px-6 py-4 rounded-2xl text-center text-lg font-bold shadow-lg">
                  {tr.sendRequest}
                </button>
              </form>

              {bookingSent && (
                <div className="mt-6 bg-emerald-500/20 border border-emerald-400 text-emerald-100 rounded-2xl p-4 leading-6">
                  {tr.success}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">{tr.location}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-7">{tr.locationTitle}</h2>
            <p className="text-lg text-stone-600 leading-9 mb-8">
              Casa Hermanos is located at Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain.
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)] w-full bg-stone-100 border border-stone-100">
            <div className="h-[430px] w-full">
              <iframe title="Casa Hermanos Google Maps Location" src="https://maps.google.com/maps?hl=en&q=Calle%20Patricio%20Zammit%206%2C%2003182%20Torrevieja%2C%20Alicante%2C%20Spain&t=&z=17&ie=UTF8&iwloc=B&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">{tr.contact}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{tr.contactTitle}</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-8">{tr.contactText}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="https://wa.me/31639315783" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">WhatsApp</a>
            <a href="mailto:manios-13@hotmail.com" className="w-full sm:w-auto bg-white text-stone-950 hover:bg-stone-200 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">Email</a>
          </div>

          <div className="mt-14 text-stone-500">
           <div className="mt-24">

  <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">
    Guest Reviews
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    What Guests Say
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
      <p className="text-stone-300 leading-7 mb-6">
        “Perfect location near the beach. Very clean apartment and amazing communication.”
      </p>
      <div className="font-bold text-white">— Emma, Sweden</div>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
      <p className="text-stone-300 leading-7 mb-6">
        “Beautiful apartment and modern interior. We loved staying here.”
      </p>
      <div className="font-bold text-white">— Carlos, Spain</div>
    </div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
  <div className="text-yellow-400 text-2xl mb-4">★★★★☆</div>
  <p className="text-stone-300 leading-7 mb-6">
    “Very nice apartment, great location close to the beach and restaurants. We had a comfortable and relaxing stay.”
  </p>
  <div className="font-bold text-white">— Daniel, Germany</div>
</div>
    
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
      <p className="text-stone-300 leading-7 mb-6">
        “Excellent stay. Close to restaurants and only 1 minute from the beach.”
      </p>
      <div className="font-bold text-white">— Sophie, Netherlands</div>
    </div>

  </div>
<div className="mt-24">

  <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">
    Leave a Review
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-10">
    Share Your Experience
  </h2>

  <form
    action="https://formspree.io/f/mredkzvo"
    method="POST"
    className="max-w-3xl mx-auto space-y-5"
  >

    <input
      type="text"
      name="review_name"
      placeholder="Your name"
      className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none"
      required
    />

    <select
      name="review_rating"
      className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none"
      required
    >
      <option value="">Select Rating</option>
      <option value="5">★★★★★ Excellent</option>
      <option value="4">★★★★ Very Good</option>
      <option value="3">★★★ Good</option>
      <option value="2">★★ Fair</option>
      <option value="1">★ Poor</option>
    </select>

    <textarea
      name="review_message"
      placeholder="Write your experience..."
      className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none min-h-[180px]"
      required
    />

    <button
      type="submit"
      className="bg-amber-600 hover:bg-amber-700 transition px-10 py-4 rounded-full text-lg font-bold shadow-lg"
    >
      Submit Review
    </button>

  </form>

</div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}
