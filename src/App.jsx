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

  const locales = {
    en: "en-US",
    nl: "nl-NL",
    es: "es-ES",
    de: "de-DE",
    sv: "sv-SE",
    ar: "ar-SA",
    uk: "uk-UA",
    pl: "pl-PL",
  };

  const t = {
    en: {
      hero: "Beautiful apartment only 80 meters from Playa del Cura - Torrevieja.",
      viewGallery: "View Gallery",
      checkAvailability: "Check Availability",
      videoTour: "Video Tour",
      explore: "Explore Casa Hermanos",
      videoText: "Experience the apartment, beach atmosphere and modern interior before your stay.",
      about: "About the apartment",
      stay: "A comfortable seaside stay in Torrevieja",
      aboutText: "Casa Hermanos is a beautiful apartment located just 80 meters from Playa del Cura in Torrevieja. Enjoy the sun, beach, restaurants, and relaxed atmosphere of the Spanish coast. Perfect for families, couples, or friends looking for a wonderful holiday near the sea.",
      gallery: "Gallery",
      photoGallery: "Photo Gallery",
      clickPhoto: "Click any photo to open fullscreen",
      availability: "Availability",
      howToBook: "How to Book",
      bookingText: "Select your check-in and check-out dates, fill in your details, and send a booking request directly from the website.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      bookingRequest: "Booking Request",
      nights: "Nights",
      apartmentPrice: "Apartment price",
      cleaningFee: "Cleaning fee",
      totalPrice: "Total price",
      sendRequest: "Send Booking Request",
      success: "Thank you! Your booking request has been sent successfully. We will contact you soon.",
      selectDate: "Select date",
      location: "Location",
      locationTitle: "80 meters from Playa del Cura",
      locationText: "Casa Hermanos is located at Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain.",
      contact: "Contact",
      contactTitle: "Questions about Casa Hermanos?",
      contactText: "For questions, details, or special requests, contact us directly.",
      whatsapp: "WhatsApp",
      email: "Email",
      acceptedPayments: "Accepted Payments",
      bankTransfer: "BANK TRANSFER",
      guestReviews: "Guest Reviews",
      whatGuestsSay: "What Guests Say",
      leaveReview: "Leave a Review",
      shareExperience: "Share Your Experience",
      yourName: "Your name",
      selectRating: "Select Rating",
      excellent: "★★★★★ Excellent",
      veryGood: "★★★★ Very Good",
      good: "★★★ Good",
      fair: "★★ Fair",
      poor: "★ Poor",
      writeExperience: "Write your experience...",
      submitReview: "Submit Review",
      fullName: "Full name",
      emailAddress: "Email address",
      phoneNumber: "Phone number",
      extraMessage: "Extra message",
      guests: ["1 guest", "2 guests", "3 guests", "4 guests", "5 guests"],
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      features: [
        ["🌊", "Sea View", "Beautiful sea view from the balcony"],
        ["❄️", "Air Conditioning", "Air conditioning available"],
        ["📶", "WiFi", "Free WiFi available"],
        ["📺", "Smart TV", "Smart TV available"],
        ["🛏️", "Bedrooms", "2 bedrooms"],
        ["🛁", "Bathroom", "1 bathroom"],
      ],
      beds: "Beds",
      bedText: "1 double bed (160x200 cm)",
      bedText2: "2 single beds (90x200 cm)",
      sofa: "Sofa",
      sofaText: "Sofa bed (140x180 cm)",
      noPets: "No Pets Allowed",
      noPetsText: "Animals are not allowed in the apartment",
      reviews: [
        ["★★★★★", "Perfect location near the beach. Very clean apartment and amazing communication.", "— Emma, Sweden"],
        ["★★★★★", "Beautiful apartment and modern interior. We loved staying here.", "— Carlos, Spain"],
        ["★★★★☆", "Very nice apartment, great location close to the beach and restaurants. We had a comfortable and relaxing stay.", "— Daniel, Germany"],
        ["★★★★★", "Excellent stay. Close to restaurants and only 1 minute from the beach.", "— Sophie, Netherlands"],
      ],
      photoTitles: ["Apartment", "Living Room", "Living Area", "Dining Room", "Dining Space", "Kitchen", "Apartment", "Bedroom 1", "Bedroom 2", "Bedroom Details", "Bathroom", "Nearby Area", "Nearby Area", "Nearby Area", "Nearby Area"],
    },

    nl: {
      hero: "Mooi appartement op slechts 80 meter van Playa del Cura - Torrevieja.",
      viewGallery: "Bekijk galerij",
      checkAvailability: "Bekijk beschikbaarheid",
      videoTour: "Videotour",
      explore: "Ontdek Casa Hermanos",
      videoText: "Bekijk het appartement, de strandsfeer en het moderne interieur vóór je verblijf.",
      about: "Over het appartement",
      stay: "Een comfortabel verblijf aan zee in Torrevieja",
      aboutText: "Casa Hermanos is een mooi appartement op slechts 80 meter van Playa del Cura in Torrevieja. Geniet van zon, strand, restaurants en de ontspannen sfeer van de Spaanse kust. Perfect voor families, koppels of vrienden die op zoek zijn naar een heerlijke vakantie aan zee.",
      gallery: "Galerij",
      photoGallery: "Fotogalerij",
      clickPhoto: "Klik op een foto om deze volledig scherm te openen",
      availability: "Beschikbaarheid",
      howToBook: "Hoe te boeken",
      bookingText: "Selecteer je aankomst- en vertrekdatum, vul je gegevens in en verstuur direct een boekingsaanvraag via de website.",
      checkIn: "Inchecken",
      checkOut: "Uitchecken",
      bookingRequest: "Boekingsaanvraag",
      nights: "Nachten",
      apartmentPrice: "Prijs appartement",
      cleaningFee: "Schoonmaakkosten",
      totalPrice: "Totale prijs",
      sendRequest: "Verstuur boekingsaanvraag",
      success: "Bedankt! Je boekingsaanvraag is succesvol verzonden. Wij nemen snel contact met je op.",
      selectDate: "Selecteer datum",
      location: "Locatie",
      locationTitle: "80 meter van Playa del Cura",
      locationText: "Casa Hermanos bevindt zich aan Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spanje.",
      contact: "Contact",
      contactTitle: "Vragen over Casa Hermanos?",
      contactText: "Voor vragen, details of speciale verzoeken kun je direct contact met ons opnemen.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      acceptedPayments: "Geaccepteerde betaalmethoden",
      bankTransfer: "BANKOVERSCHRIJVING",
      guestReviews: "Gastenbeoordelingen",
      whatGuestsSay: "Wat gasten zeggen",
      leaveReview: "Laat een beoordeling achter",
      shareExperience: "Deel je ervaring",
      yourName: "Je naam",
      selectRating: "Selecteer beoordeling",
      excellent: "★★★★★ Uitstekend",
      veryGood: "★★★★ Zeer goed",
      good: "★★★ Goed",
      fair: "★★ Redelijk",
      poor: "★ Slecht",
      writeExperience: "Schrijf je ervaring...",
      submitReview: "Beoordeling verzenden",
      fullName: "Volledige naam",
      emailAddress: "E-mailadres",
      phoneNumber: "Telefoonnummer",
      extraMessage: "Extra bericht",
      guests: ["1 gast", "2 gasten", "3 gasten", "4 gasten", "5 gasten"],
      weekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
      features: [
        ["🌊", "Zeezicht", "Prachtig zeezicht vanaf het balkon"],
        ["❄️", "Airconditioning", "Airconditioning aanwezig"],
        ["📶", "WiFi", "Gratis WiFi beschikbaar"],
        ["📺", "Smart-tv", "Smart-tv aanwezig"],
        ["🛏️", "Slaapkamers", "2 slaapkamers"],
        ["🛁", "Badkamer", "1 badkamer"],
      ],
      beds: "Bedden",
      bedText: "1 tweepersoonsbed (160x200 cm)",
      bedText2: "2 eenpersoonsbedden (90x200 cm)",
      sofa: "Bank",
      sofaText: "Slaapbank (140x180 cm)",
      noPets: "Geen huisdieren toegestaan",
      noPetsText: "Dieren zijn niet toegestaan in het appartement",
      reviews: [
        ["★★★★★", "Perfecte locatie vlak bij het strand. Zeer schoon appartement en geweldige communicatie.", "— Emma, Zweden"],
        ["★★★★★", "Mooi appartement en modern interieur. We hebben hier heerlijk verbleven.", "— Carlos, Spanje"],
        ["★★★★☆", "Heel mooi appartement, geweldige locatie dicht bij het strand en restaurants. We hadden een comfortabel en ontspannen verblijf.", "— Daniel, Duitsland"],
        ["★★★★★", "Uitstekend verblijf. Dicht bij restaurants en slechts 1 minuut van het strand.", "— Sophie, Nederland"],
      ],
      photoTitles: ["Appartement", "Woonkamer", "Woonruimte", "Eetkamer", "Eethoek", "Keuken", "Appartement", "Slaapkamer 1", "Slaapkamer 2", "Slaapkamer Details", "Badkamer", "Omgeving", "Omgeving", "Omgeving", "Omgeving"],
    },

    es: {
      hero: "Hermoso apartamento a solo 80 metros de Playa del Cura - Torrevieja.",
      viewGallery: "Ver galería",
      checkAvailability: "Ver disponibilidad",
      videoTour: "Video tour",
      explore: "Descubre Casa Hermanos",
      videoText: "Conoce el apartamento, el ambiente de la playa y el interior moderno antes de tu estancia.",
      about: "Sobre el apartamento",
      stay: "Una estancia cómoda junto al mar en Torrevieja",
      aboutText: "Casa Hermanos es un hermoso apartamento situado a solo 80 metros de Playa del Cura en Torrevieja. Disfruta del sol, la playa, los restaurantes y el ambiente relajado de la costa española. Perfecto para familias, parejas o amigos que buscan unas vacaciones maravillosas cerca del mar.",
      gallery: "Galería",
      photoGallery: "Galería de fotos",
      clickPhoto: "Haz clic en cualquier foto para verla en pantalla completa",
      availability: "Disponibilidad",
      howToBook: "Cómo reservar",
      bookingText: "Selecciona tus fechas de entrada y salida, completa tus datos y envía una solicitud de reserva directamente desde la web.",
      checkIn: "Entrada",
      checkOut: "Salida",
      bookingRequest: "Solicitud de reserva",
      nights: "Noches",
      apartmentPrice: "Precio del apartamento",
      cleaningFee: "Limpieza",
      totalPrice: "Precio total",
      sendRequest: "Enviar solicitud de reserva",
      success: "¡Gracias! Tu solicitud de reserva se ha enviado correctamente. Te contactaremos pronto.",
      selectDate: "Seleccionar fecha",
      location: "Ubicación",
      locationTitle: "A 80 metros de Playa del Cura",
      locationText: "Casa Hermanos se encuentra en Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, España.",
      contact: "Contacto",
      contactTitle: "¿Preguntas sobre Casa Hermanos?",
      contactText: "Para preguntas, detalles o solicitudes especiales, contáctanos directamente.",
      whatsapp: "WhatsApp",
      email: "Correo",
      acceptedPayments: "Pagos aceptados",
      bankTransfer: "TRANSFERENCIA BANCARIA",
      guestReviews: "Opiniones de huéspedes",
      whatGuestsSay: "Lo que dicen los huéspedes",
      leaveReview: "Dejar una opinión",
      shareExperience: "Comparte tu experiencia",
      yourName: "Tu nombre",
      selectRating: "Seleccionar valoración",
      excellent: "★★★★★ Excelente",
      veryGood: "★★★★ Muy bueno",
      good: "★★★ Bueno",
      fair: "★★ Regular",
      poor: "★ Malo",
      writeExperience: "Escribe tu experiencia...",
      submitReview: "Enviar opinión",
      fullName: "Nombre completo",
      emailAddress: "Correo electrónico",
      phoneNumber: "Número de teléfono",
      extraMessage: "Mensaje adicional",
      guests: ["1 huésped", "2 huéspedes", "3 huéspedes", "4 huéspedes", "5 huéspedes"],
      weekdays: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      features: [
        ["🌊", "Vista al mar", "Hermosa vista al mar desde el balcón"],
        ["❄️", "Aire acondicionado", "Aire acondicionado disponible"],
        ["📶", "WiFi", "WiFi gratuito disponible"],
        ["📺", "Smart TV", "Smart TV disponible"],
        ["🛏️", "Dormitorios", "2 dormitorios"],
        ["🛁", "Baño", "1 baño"],
      ],
      beds: "Camas",
      bedText: "1 cama doble (160x200 cm)",
      bedText2: "2 camas individuales (90x200 cm)",
      sofa: "Sofá",
      sofaText: "Sofá cama (140x180 cm)",
      noPets: "No se admiten mascotas",
      noPetsText: "No se permiten animales en el apartamento",
      reviews: [
        ["★★★★★", "Ubicación perfecta cerca de la playa. Apartamento muy limpio y comunicación excelente.", "— Emma, Suecia"],
        ["★★★★★", "Apartamento precioso e interior moderno. Nos encantó alojarnos aquí.", "— Carlos, España"],
        ["★★★★☆", "Apartamento muy bonito, gran ubicación cerca de la playa y restaurantes. Tuvimos una estancia cómoda y relajante.", "— Daniel, Alemania"],
        ["★★★★★", "Estancia excelente. Cerca de restaurantes y a solo 1 minuto de la playa.", "— Sophie, Países Bajos"],
      ],
      photoTitles: ["Apartamento", "Sala de estar", "Zona de estar", "Comedor", "Espacio comedor", "Cocina", "Apartamento", "Dormitorio 1", "Dormitorio 2", "Detalles dormitorio", "Baño", "Zona cercana", "Zona cercana", "Zona cercana", "Zona cercana"],
    },

    de: {
      hero: "Wunderschönes Apartment nur 80 Meter von Playa del Cura - Torrevieja entfernt.",
      viewGallery: "Galerie ansehen",
      checkAvailability: "Verfügbarkeit prüfen",
      videoTour: "Videotour",
      explore: "Casa Hermanos entdecken",
      videoText: "Erleben Sie das Apartment, die Strandatmosphäre und das moderne Interieur vor Ihrem Aufenthalt.",
      about: "Über das Apartment",
      stay: "Ein komfortabler Aufenthalt am Meer in Torrevieja",
      aboutText: "Casa Hermanos ist ein wunderschönes Apartment nur 80 Meter von Playa del Cura in Torrevieja entfernt. Genießen Sie Sonne, Strand, Restaurants und die entspannte Atmosphäre der spanischen Küste. Perfekt für Familien, Paare oder Freunde, die einen schönen Urlaub am Meer suchen.",
      gallery: "Galerie",
      photoGallery: "Fotogalerie",
      clickPhoto: "Klicken Sie auf ein Foto, um es im Vollbildmodus zu öffnen",
      availability: "Verfügbarkeit",
      howToBook: "So buchen Sie",
      bookingText: "Wählen Sie Ihr Anreise- und Abreisedatum, geben Sie Ihre Daten ein und senden Sie direkt über die Website eine Buchungsanfrage.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      bookingRequest: "Buchungsanfrage",
      nights: "Nächte",
      apartmentPrice: "Apartmentpreis",
      cleaningFee: "Reinigungskosten",
      totalPrice: "Gesamtpreis",
      sendRequest: "Buchungsanfrage senden",
      success: "Vielen Dank! Ihre Buchungsanfrage wurde erfolgreich gesendet. Wir kontaktieren Sie bald.",
      selectDate: "Datum auswählen",
      location: "Standort",
      locationTitle: "80 Meter von Playa del Cura entfernt",
      locationText: "Casa Hermanos befindet sich in der Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spanien.",
      contact: "Kontakt",
      contactTitle: "Fragen zu Casa Hermanos?",
      contactText: "Für Fragen, Details oder besondere Wünsche kontaktieren Sie uns direkt.",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      acceptedPayments: "Akzeptierte Zahlungsmethoden",
      bankTransfer: "BANKÜBERWEISUNG",
      guestReviews: "Gästebewertungen",
      whatGuestsSay: "Was Gäste sagen",
      leaveReview: "Bewertung hinterlassen",
      shareExperience: "Teilen Sie Ihre Erfahrung",
      yourName: "Ihr Name",
      selectRating: "Bewertung auswählen",
      excellent: "★★★★★ Ausgezeichnet",
      veryGood: "★★★★ Sehr gut",
      good: "★★★ Gut",
      fair: "★★ Ausreichend",
      poor: "★ Schlecht",
      writeExperience: "Schreiben Sie Ihre Erfahrung...",
      submitReview: "Bewertung senden",
      fullName: "Vollständiger Name",
      emailAddress: "E-Mail-Adresse",
      phoneNumber: "Telefonnummer",
      extraMessage: "Zusätzliche Nachricht",
      guests: ["1 Gast", "2 Gäste", "3 Gäste", "4 Gäste", "5 Gäste"],
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      features: [
        ["🌊", "Meerblick", "Schöner Meerblick vom Balkon"],
        ["❄️", "Klimaanlage", "Klimaanlage vorhanden"],
        ["📶", "WLAN", "Kostenloses WLAN verfügbar"],
        ["📺", "Smart-TV", "Smart-TV vorhanden"],
        ["🛏️", "Schlafzimmer", "2 Schlafzimmer"],
        ["🛁", "Badezimmer", "1 Badezimmer"],
      ],
      beds: "Betten",
      bedText: "1 Doppelbett (160x200 cm)",
      bedText2: "2 Einzelbetten (90x200 cm)",
      sofa: "Sofa",
      sofaText: "Schlafsofa (140x180 cm)",
      noPets: "Keine Haustiere erlaubt",
      noPetsText: "Tiere sind im Apartment nicht erlaubt",
      reviews: [
        ["★★★★★", "Perfekte Lage in Strandnähe. Sehr sauberes Apartment und fantastische Kommunikation.", "— Emma, Schweden"],
        ["★★★★★", "Wunderschönes Apartment und modernes Interieur. Wir haben unseren Aufenthalt sehr genossen.", "— Carlos, Spanien"],
        ["★★★★☆", "Sehr schönes Apartment, tolle Lage in der Nähe des Strandes und der Restaurants. Wir hatten einen komfortablen und erholsamen Aufenthalt.", "— Daniel, Deutschland"],
        ["★★★★★", "Ausgezeichneter Aufenthalt. In der Nähe von Restaurants und nur 1 Minute vom Strand entfernt.", "— Sophie, Niederlande"],
      ],
      photoTitles: ["Apartment", "Wohnzimmer", "Wohnbereich", "Esszimmer", "Essbereich", "Küche", "Apartment", "Schlafzimmer 1", "Schlafzimmer 2", "Schlafzimmer Details", "Badezimmer", "Umgebung", "Umgebung", "Umgebung", "Umgebung"],
    },

    sv: {
      hero: "Vacker lägenhet bara 80 meter från Playa del Cura - Torrevieja.",
      viewGallery: "Visa galleri",
      checkAvailability: "Kontrollera tillgänglighet",
      videoTour: "Videotur",
      explore: "Utforska Casa Hermanos",
      videoText: "Upplev lägenheten, strandkänslan och den moderna interiören före din vistelse.",
      about: "Om lägenheten",
      stay: "En bekväm vistelse vid havet i Torrevieja",
      aboutText: "Casa Hermanos är en vacker lägenhet bara 80 meter från Playa del Cura i Torrevieja. Njut av solen, stranden, restaurangerna och den avslappnade atmosfären vid den spanska kusten. Perfekt för familjer, par eller vänner som söker en härlig semester nära havet.",
      gallery: "Galleri",
      photoGallery: "Fotogalleri",
      clickPhoto: "Klicka på en bild för att öppna i helskärm",
      availability: "Tillgänglighet",
      howToBook: "Så bokar du",
      bookingText: "Välj in- och utcheckningsdatum, fyll i dina uppgifter och skicka en bokningsförfrågan direkt från webbplatsen.",
      checkIn: "Incheckning",
      checkOut: "Utcheckning",
      bookingRequest: "Bokningsförfrågan",
      nights: "Nätter",
      apartmentPrice: "Lägenhetspris",
      cleaningFee: "Städavgift",
      totalPrice: "Totalpris",
      sendRequest: "Skicka bokningsförfrågan",
      success: "Tack! Din bokningsförfrågan har skickats. Vi kontaktar dig snart.",
      selectDate: "Välj datum",
      location: "Plats",
      locationTitle: "80 meter från Playa del Cura",
      locationText: "Casa Hermanos ligger på Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spanien.",
      contact: "Kontakt",
      contactTitle: "Frågor om Casa Hermanos?",
      contactText: "För frågor, detaljer eller särskilda önskemål, kontakta oss direkt.",
      whatsapp: "WhatsApp",
      email: "E-post",
      acceptedPayments: "Accepterade betalningar",
      bankTransfer: "BANKÖVERFÖRING",
      guestReviews: "Gästrecensioner",
      whatGuestsSay: "Vad gäster säger",
      leaveReview: "Lämna en recension",
      shareExperience: "Dela din upplevelse",
      yourName: "Ditt namn",
      selectRating: "Välj betyg",
      excellent: "★★★★★ Utmärkt",
      veryGood: "★★★★ Mycket bra",
      good: "★★★ Bra",
      fair: "★★ Okej",
      poor: "★ Dåligt",
      writeExperience: "Skriv din upplevelse...",
      submitReview: "Skicka recension",
      fullName: "Fullständigt namn",
      emailAddress: "E-postadress",
      phoneNumber: "Telefonnummer",
      extraMessage: "Extra meddelande",
      guests: ["1 gäst", "2 gäster", "3 gäster", "4 gäster", "5 gäster"],
      weekdays: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"],
      features: [
        ["🌊", "Havsutsikt", "Vacker havsutsikt från balkongen"],
        ["❄️", "Luftkonditionering", "Luftkonditionering finns"],
        ["📶", "WiFi", "Gratis WiFi finns"],
        ["📺", "Smart-TV", "Smart-TV finns"],
        ["🛏️", "Sovrum", "2 sovrum"],
        ["🛁", "Badrum", "1 badrum"],
      ],
      beds: "Sängar",
      bedText: "1 dubbelsäng (160x200 cm)",
      bedText2: "2 enkelsängar (90x200 cm)",
      sofa: "Soffa",
      sofaText: "Bäddsoffa (140x180 cm)",
      noPets: "Husdjur ej tillåtna",
      noPetsText: "Djur är inte tillåtna i lägenheten",
      reviews: [
        ["★★★★★", "Perfekt läge nära stranden. Mycket ren lägenhet och fantastisk kommunikation.", "— Emma, Sverige"],
        ["★★★★★", "Vacker lägenhet och modern interiör. Vi älskade att bo här.", "— Carlos, Spanien"],
        ["★★★★☆", "Mycket fin lägenhet, bra läge nära stranden och restauranger. Vi hade en bekväm och avkopplande vistelse.", "— Daniel, Tyskland"],
        ["★★★★★", "Utmärkt vistelse. Nära restauranger och bara 1 minut från stranden.", "— Sophie, Nederländerna"],
      ],
      photoTitles: ["Lägenhet", "Vardagsrum", "Vardagsrum", "Matsal", "Matplats", "Kök", "Lägenhet", "Sovrum 1", "Sovrum 2", "Sovrumsdetaljer", "Badrum", "Närområde", "Närområde", "Närområde", "Närområde"],
    },

    ar: {
      hero: "شقة جميلة على بعد 80 مترًا فقط من Playa del Cura - Torrevieja.",
      viewGallery: "عرض المعرض",
      checkAvailability: "تحقق من التوفر",
      videoTour: "جولة بالفيديو",
      explore: "استكشف Casa Hermanos",
      videoText: "شاهد الشقة وأجواء الشاطئ والتصميم الداخلي الحديث قبل إقامتك.",
      about: "عن الشقة",
      stay: "إقامة مريحة بجانب البحر في توريفايجا",
      aboutText: "Casa Hermanos شقة جميلة تقع على بعد 80 مترًا فقط من Playa del Cura في توريفايجا. استمتع بالشمس والشاطئ والمطاعم والأجواء الهادئة على الساحل الإسباني. مثالية للعائلات أو الأزواج أو الأصدقاء الذين يبحثون عن عطلة رائعة بالقرب من البحر.",
      gallery: "المعرض",
      photoGallery: "معرض الصور",
      clickPhoto: "اضغط على أي صورة لفتحها بملء الشاشة",
      availability: "التوفر",
      howToBook: "طريقة الحجز",
      bookingText: "اختر تاريخ الوصول والمغادرة، املأ بياناتك، وأرسل طلب الحجز مباشرة من الموقع.",
      checkIn: "تسجيل الوصول",
      checkOut: "تسجيل المغادرة",
      bookingRequest: "طلب الحجز",
      nights: "الليالي",
      apartmentPrice: "سعر الشقة",
      cleaningFee: "رسوم التنظيف",
      totalPrice: "السعر الإجمالي",
      sendRequest: "إرسال طلب الحجز",
      success: "شكرًا لك! تم إرسال طلب الحجز بنجاح. سنتواصل معك قريبًا.",
      selectDate: "اختر التاريخ",
      location: "الموقع",
      locationTitle: "80 مترًا من Playa del Cura",
      locationText: "يقع Casa Hermanos في Calle Patricio Zammit 6، 03182 Torrevieja، Alicante، Spain.",
      contact: "اتصال",
      contactTitle: "هل لديك أسئلة حول Casa Hermanos؟",
      contactText: "للاستفسارات أو التفاصيل أو الطلبات الخاصة، تواصل معنا مباشرة.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      acceptedPayments: "طرق الدفع المقبولة",
      bankTransfer: "تحويل بنكي",
      guestReviews: "آراء الضيوف",
      whatGuestsSay: "ماذا يقول الضيوف",
      leaveReview: "اترك تقييمًا",
      shareExperience: "شارك تجربتك",
      yourName: "اسمك",
      selectRating: "اختر التقييم",
      excellent: "★★★★★ ممتاز",
      veryGood: "★★★★ جيد جدًا",
      good: "★★★ جيد",
      fair: "★★ مقبول",
      poor: "★ سيئ",
      writeExperience: "اكتب تجربتك...",
      submitReview: "إرسال التقييم",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      extraMessage: "رسالة إضافية",
      guests: ["ضيف واحد", "ضيفان", "3 ضيوف", "4 ضيوف", "5 ضيوف"],
      weekdays: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
      features: [
        ["🌊", "إطلالة على البحر", "إطلالة جميلة على البحر من الشرفة"],
        ["❄️", "تكييف", "يتوفر تكييف هواء"],
        ["📶", "واي فاي", "واي فاي مجاني متوفر"],
        ["📺", "تلفاز ذكي", "تلفاز ذكي متوفر"],
        ["🛏️", "غرف النوم", "غرفتا نوم"],
        ["🛁", "حمام", "حمام واحد"],
      ],
      beds: "الأسرّة",
      bedText: "سرير مزدوج واحد (160x200 سم)",
      bedText2: "سريران فرديان (90x200 سم)",
      sofa: "الأريكة",
      sofaText: "أريكة سرير (140x180 سم)",
      noPets: "الحيوانات غير مسموحة",
      noPetsText: "لا يُسمح بالحيوانات داخل الشقة",
      reviews: [
        ["★★★★★", "موقع مثالي بالقرب من الشاطئ. الشقة نظيفة جدًا والتواصل ممتاز.", "— إيما، السويد"],
        ["★★★★★", "شقة جميلة وتصميم داخلي حديث. أحببنا الإقامة هنا.", "— كارلوس، إسبانيا"],
        ["★★★★☆", "شقة جميلة جدًا وموقع رائع قريب من الشاطئ والمطاعم. كانت إقامتنا مريحة وهادئة.", "— دانيال، ألمانيا"],
        ["★★★★★", "إقامة ممتازة. قريبة من المطاعم وعلى بعد دقيقة واحدة فقط من الشاطئ.", "— صوفي، هولندا"],
      ],
      photoTitles: ["شقة", "غرفة المعيشة", "منطقة المعيشة", "غرفة الطعام", "منطقة الطعام", "المطبخ", "شقة", "غرفة النوم 1", "غرفة النوم 2", "تفاصيل الغرفة", "الحمام", "المنطقة القريبة", "المنطقة القريبة", "المنطقة القريبة", "المنطقة القريبة"],
    },

    uk: {
      hero: "Чудові апартаменти лише за 80 метрів від Playa del Cura - Torrevieja.",
      viewGallery: "Переглянути галерею",
      checkAvailability: "Перевірити доступність",
      videoTour: "Відеотур",
      explore: "Дослідіть Casa Hermanos",
      videoText: "Ознайомтеся з апартаментами, атмосферою пляжу та сучасним інтер’єром перед проживанням.",
      about: "Про апартаменти",
      stay: "Комфортне проживання біля моря в Торрев’єсі",
      aboutText: "Casa Hermanos — це чудові апартаменти лише за 80 метрів від Playa del Cura в Торрев’єсі. Насолоджуйтесь сонцем, пляжем, ресторанами та спокійною атмосферою іспанського узбережжя.",
      gallery: "Галерея",
      photoGallery: "Фотогалерея",
      clickPhoto: "Натисніть на будь-яке фото, щоб відкрити на весь екран",
      availability: "Доступність",
      howToBook: "Як забронювати",
      bookingText: "Оберіть дати заїзду та виїзду, заповніть свої дані та надішліть запит на бронювання прямо з сайту.",
      checkIn: "Заїзд",
      checkOut: "Виїзд",
      bookingRequest: "Запит на бронювання",
      nights: "Ночі",
      apartmentPrice: "Ціна апартаментів",
      cleaningFee: "Прибирання",
      totalPrice: "Загальна ціна",
      sendRequest: "Надіслати запит",
      success: "Дякуємо! Ваш запит на бронювання успішно надіслано. Ми скоро зв’яжемося з вами.",
      selectDate: "Оберіть дату",
      location: "Локація",
      locationTitle: "80 метрів від Playa del Cura",
      locationText: "Casa Hermanos знаходиться за адресою Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain.",
      contact: "Контакт",
      contactTitle: "Питання про Casa Hermanos?",
      contactText: "Для питань, деталей або спеціальних запитів зв’яжіться з нами напряму.",
      whatsapp: "WhatsApp",
      email: "Електронна пошта",
      acceptedPayments: "Прийняті способи оплати",
      bankTransfer: "БАНКІВСЬКИЙ ПЕРЕКАЗ",
      guestReviews: "Відгуки гостей",
      whatGuestsSay: "Що кажуть гості",
      leaveReview: "Залишити відгук",
      shareExperience: "Поділіться своїм досвідом",
      yourName: "Ваше ім’я",
      selectRating: "Оберіть оцінку",
      excellent: "★★★★★ Відмінно",
      veryGood: "★★★★ Дуже добре",
      good: "★★★ Добре",
      fair: "★★ Нормально",
      poor: "★ Погано",
      writeExperience: "Напишіть про свій досвід...",
      submitReview: "Надіслати відгук",
      fullName: "Повне ім’я",
      emailAddress: "Електронна адреса",
      phoneNumber: "Номер телефону",
      extraMessage: "Додаткове повідомлення",
      guests: ["1 гість", "2 гості", "3 гості", "4 гості", "5 гостей"],
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      features: [
        ["🌊", "Вид на море", "Гарний вид на море з балкона"],
        ["❄️", "Кондиціонер", "Кондиціонер доступний"],
        ["📶", "WiFi", "Безкоштовний WiFi доступний"],
        ["📺", "Smart TV", "Smart TV доступний"],
        ["🛏️", "Спальні", "2 спальні"],
        ["🛁", "Ванна кімната", "1 ванна кімната"],
      ],
      beds: "Ліжка",
      bedText: "1 двоспальне ліжко (160x200 см)",
      bedText2: "2 односпальні ліжка (90x200 см)",
      sofa: "Диван",
      sofaText: "Диван-ліжко (140x180 см)",
      noPets: "Домашні тварини заборонені",
      noPetsText: "Тварини не допускаються в апартаменти",
      reviews: [
        ["★★★★★", "Ідеальне розташування біля пляжу. Дуже чисті апартаменти та чудова комунікація.", "— Емма, Швеція"],
        ["★★★★★", "Гарні апартаменти та сучасний інтер’єр. Нам дуже сподобалось тут проживати.", "— Карлос, Іспанія"],
        ["★★★★☆", "Дуже гарні апартаменти, чудове розташування поруч із пляжем і ресторанами.", "— Даніель, Німеччина"],
        ["★★★★★", "Відмінне проживання. Поруч ресторани та лише 1 хвилина до пляжу.", "— Софі, Нідерланди"],
      ],
      photoTitles: ["Апартаменти", "Вітальня", "Житлова зона", "Їдальня", "Обідня зона", "Кухня", "Апартаменти", "Спальня 1", "Спальня 2", "Деталі спальні", "Ванна кімната", "Поруч", "Поруч", "Поруч", "Поруч"],
    },

    pl: {
      hero: "Piękny apartament tylko 80 metrów od Playa del Cura - Torrevieja.",
      viewGallery: "Zobacz galerię",
      checkAvailability: "Sprawdź dostępność",
      videoTour: "Wideo tour",
      explore: "Odkryj Casa Hermanos",
      videoText: "Zobacz apartament, atmosferę plaży i nowoczesne wnętrze przed pobytem.",
      about: "O apartamencie",
      stay: "Komfortowy pobyt nad morzem w Torrevieja",
      aboutText: "Casa Hermanos to piękny apartament położony tylko 80 metrów od Playa del Cura w Torrevieja. Ciesz się słońcem, plażą, restauracjami i spokojną atmosferą hiszpańskiego wybrzeża.",
      gallery: "Galeria",
      photoGallery: "Galeria zdjęć",
      clickPhoto: "Kliknij dowolne zdjęcie, aby otworzyć pełny ekran",
      availability: "Dostępność",
      howToBook: "Jak zarezerwować",
      bookingText: "Wybierz datę przyjazdu i wyjazdu, wpisz swoje dane i wyślij zapytanie rezerwacyjne bezpośrednio ze strony.",
      checkIn: "Zameldowanie",
      checkOut: "Wymeldowanie",
      bookingRequest: "Zapytanie o rezerwację",
      nights: "Noce",
      apartmentPrice: "Cena apartamentu",
      cleaningFee: "Opłata za sprzątanie",
      totalPrice: "Cena całkowita",
      sendRequest: "Wyślij zapytanie",
      success: "Dziękujemy! Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.",
      selectDate: "Wybierz datę",
      location: "Lokalizacja",
      locationTitle: "80 metrów od Playa del Cura",
      locationText: "Casa Hermanos znajduje się przy Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain.",
      contact: "Kontakt",
      contactTitle: "Pytania o Casa Hermanos?",
      contactText: "W przypadku pytań, szczegółów lub specjalnych próśb skontaktuj się z nami bezpośrednio.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      acceptedPayments: "Akceptowane płatności",
      bankTransfer: "PRZELEW BANKOWY",
      guestReviews: "Opinie gości",
      whatGuestsSay: "Co mówią goście",
      leaveReview: "Dodaj opinię",
      shareExperience: "Podziel się swoją opinią",
      yourName: "Twoje imię",
      selectRating: "Wybierz ocenę",
      excellent: "★★★★★ Doskonałe",
      veryGood: "★★★★ Bardzo dobre",
      good: "★★★ Dobre",
      fair: "★★ Przeciętne",
      poor: "★ Słabe",
      writeExperience: "Opisz swoje doświadczenie...",
      submitReview: "Wyślij opinię",
      fullName: "Imię i nazwisko",
      emailAddress: "Adres e-mail",
      phoneNumber: "Numer telefonu",
      extraMessage: "Dodatkowa wiadomość",
      guests: ["1 gość", "2 gości", "3 gości", "4 gości", "5 gości"],
      weekdays: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
      features: [
        ["🌊", "Widok na morze", "Piękny widok na morze z balkonu"],
        ["❄️", "Klimatyzacja", "Klimatyzacja dostępna"],
        ["📶", "WiFi", "Bezpłatne WiFi dostępne"],
        ["📺", "Smart TV", "Smart TV dostępny"],
        ["🛏️", "Sypialnie", "2 sypialnie"],
        ["🛁", "Łazienka", "1 łazienka"],
      ],
      beds: "Łóżka",
      bedText: "1 łóżko podwójne (160x200 cm)",
      bedText2: "2 łóżka pojedyncze (90x200 cm)",
      sofa: "Sofa",
      sofaText: "Sofa rozkładana (140x180 cm)",
      noPets: "Zwierzęta niedozwolone",
      noPetsText: "Zwierzęta nie są dozwolone w apartamencie",
      reviews: [
        ["★★★★★", "Idealna lokalizacja blisko plaży. Bardzo czysty apartament i świetna komunikacja.", "— Emma, Szwecja"],
        ["★★★★★", "Piękny apartament i nowoczesne wnętrze. Bardzo nam się podobało.", "— Carlos, Hiszpania"],
        ["★★★★☆", "Bardzo ładny apartament, świetna lokalizacja blisko plaży i restauracji.", "— Daniel, Niemcy"],
        ["★★★★★", "Doskonały pobyt. Blisko restauracji i tylko 1 minuta od plaży.", "— Sophie, Holandia"],
      ],
      photoTitles: ["Apartament", "Salon", "Strefa wypoczynku", "Jadalnia", "Miejsce do jedzenia", "Kuchnia", "Apartament", "Sypialnia 1", "Sypialnia 2", "Szczegóły sypialni", "Łazienka", "Okolica", "Okolica", "Okolica", "Okolica"],
    },
  };

  const tr = t[language];
  const isRTL = language === "ar";

  const monthName = currentDate.toLocaleString(locales[language], {
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
    "2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-05",
    "2026-10-06", "2026-10-07", "2026-10-08", "2026-10-09", "2026-10-10",
    "2026-10-11", "2026-10-12", "2026-10-13", "2026-10-14", "2026-10-15",
    "2026-10-16", "2026-10-17", "2026-10-18", "2026-10-19", "2026-10-20",
    "2026-10-21", "2026-10-22", "2026-10-23", "2026-10-24", "2026-10-25",
    "2026-10-26", "2026-10-27", "2026-10-28", "2026-10-29", "2026-10-30",
    "2026-10-31",
    "2026-08-04", "2026-08-05",
  "2026-08-06", "2026-08-07", "2026-08-08", "2026-08-09", "2026-08-10",
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
    const m = date.getMonth() + 1;
    if (m === 5) return 60;
    if (m === 6) return 70;
    if (m === 7 || m === 8) return 85;
    return 49;
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
    return date.toLocaleDateString(locales[language], {
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
        totalPrice,
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

  const heroPhoto = "/hero.jpeg";

  const photoSources = [
    "/Apartment.jpeg",
    "/living-room-1.jpeg",
    "/living-room-2.jpeg",
    "/dining-room-1.jpeg",
    "/dining-room-2.jpeg",
    "/kitchen.jpeg",
    "/apartment-2.jpeg",
    "/room-1.jpeg",
    "/room-2a.jpeg",
    "/room-2b.jpeg",
    "/bathroom.jpeg",
    "/omgeving.jpeg",
    "/omgeving-1.jpeg",
    "/omgeving-2.jpeg",
    "/omgeving-3.jpeg",
  ];

  const photos = photoSources.map((src, index) => ({
    src,
    title: tr.photoTitles[index],
  }));

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#f8f5ef] text-stone-900 font-[Poppins]">
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

          <h1 className="text-5xl md:text-8xl font-serif italic font-bold tracking-[0.12em] text-white drop-shadow-2xl">
            Casa Hermanos
          </h1>

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
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">{tr.videoTour}</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">{tr.explore}</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-8">{tr.videoText}</p>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline controls preload="metadata">
              <source src="/apartment-tour.mp4" type="video/mp4" />
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
          {tr.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 hover:-translate-y-1 transition">
              <p className="text-3xl mb-4">{feature[0]}</p>
              <h3 className="font-bold text-lg mb-1">{feature[1]}</h3>
              <p className="text-stone-500 leading-6">{feature[2]}</p>
            </div>
          ))}

          <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 sm:col-span-2">
            <p className="text-3xl mb-4">🛏️</p>
            <h3 className="font-bold text-lg mb-1">{tr.beds}</h3>
            <p className="text-stone-500 leading-7">
              {tr.bedText}
              <br />
              {tr.bedText2}
            </p>
            <div className="mt-5 pt-5 border-t border-stone-200">
              <h3 className="font-bold text-lg mb-1">{tr.sofa}</h3>
              <p className="text-stone-500 leading-7">{tr.sofaText}</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 sm:col-span-2">
            <p className="text-3xl mb-4">🚫🐾</p>
            <h3 className="font-bold text-lg mb-1">{tr.noPets}</h3>
            <p className="text-stone-500 leading-7">{tr.noPetsText}</p>
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
            <img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].title} className="max-w-[95%] max-h-[90vh] object-contain rounded-3xl shadow-2xl" />
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
                <h3 className="text-2xl md:text-3xl font-bold text-center capitalize">{monthName}</h3>
                <button onClick={nextMonth} className="bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-full w-12 h-12 text-3xl shadow-sm transition">›</button>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-xs md:text-sm font-bold text-stone-400 mb-3 uppercase tracking-wide">
                {tr.weekdays.map((day) => <div key={day}>{day}</div>)}
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
                  <h4 className="text-2xl font-bold text-stone-900">15:00</h4>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">{tr.checkOut}</p>
                  <h4 className="text-2xl font-bold text-stone-900">11:00</h4>
                </div>
              </div>
            </div>

            <div className="bg-stone-950 text-white rounded-[2rem] p-7 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-bold mb-6">{tr.bookingRequest}</h3>

              <div className="bg-white/10 rounded-3xl p-5 mb-6 text-sm text-stone-200 space-y-3 border border-white/10">
                <p><strong>{tr.checkIn}:</strong> {checkIn ? formatDate(checkIn) : tr.selectDate}</p>
                <p><strong>{tr.checkOut}:</strong> {checkOut ? formatDate(checkOut) : tr.selectDate}</p>
                <p><strong>{tr.nights}:</strong> {bookingNights > 0 ? bookingNights : "-"}</p>

                <div className="border-t border-white/20 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between"><span>{tr.apartmentPrice}</span><span>{bookingNights > 0 ? `€${apartmentPrice}` : "-"}</span></div>
                  <div className="flex justify-between"><span>{tr.cleaningFee}</span><span>{bookingNights > 0 ? `€${cleaningFee}` : "€100"}</span></div>
                  <div className="flex justify-between text-xl font-bold text-white pt-3"><span>{tr.totalPrice}</span><span>{bookingNights > 0 ? `€${totalPrice}` : "-"}</span></div>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="text" placeholder={tr.fullName} value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" required />
                <input type="email" placeholder={tr.emailAddress} value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" required />
                <input type="tel" placeholder={tr.phoneNumber} value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white" />

                <select value={bookingForm.guests} onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white">
                  {tr.guests.map((guest, index) => <option key={index} value={String(index + 1)}>{guest}</option>)}
                </select>

                <textarea placeholder={tr.extraMessage} value={bookingForm.message} onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })} className="w-full rounded-2xl px-4 py-3 text-stone-900 outline-none bg-white min-h-[110px]" />

                <button type="submit" disabled={!checkIn || !checkOut} className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-500 disabled:cursor-not-allowed transition px-6 py-4 rounded-2xl text-center text-lg font-bold shadow-lg">
                  {tr.sendRequest}
                </button>
              </form>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-5">{tr.acceptedPayments}</p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-white rounded-2xl px-6 py-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8 object-contain" />
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-4 text-black font-bold text-lg tracking-wide">WERO</div>
                  <div className="bg-white rounded-2xl px-6 py-4 text-black font-bold text-sm tracking-wide">{tr.bankTransfer}</div>
                </div>
              </div>

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
            <p className="text-lg text-stone-600 leading-9 mb-8">{tr.locationText}</p>
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
            <a href="https://wa.me/31639315783" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">{tr.whatsapp}</a>
            <a href="mailto:manios-13@hotmail.com" className="w-full sm:w-auto bg-white text-stone-950 hover:bg-stone-200 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">{tr.email}</a>
          </div>

          <div className="mt-24">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">{tr.guestReviews}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{tr.whatGuestsSay}</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {tr.reviews.map((review, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
                  <div className="text-yellow-400 text-2xl mb-4">{review[0]}</div>
                  <p className="text-stone-300 leading-7 mb-6">“{review[1]}”</p>
                  <div className="font-bold text-white">{review[2]}</div>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">{tr.leaveReview}</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">{tr.shareExperience}</h2>

              <form action="https://formspree.io/f/mredkzvo" method="POST" className="max-w-3xl mx-auto space-y-5">
                <input type="text" name="review_name" placeholder={tr.yourName} className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none" required />

                <select name="review_rating" className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none" required>
                  <option value="">{tr.selectRating}</option>
                  <option value="5">{tr.excellent}</option>
                  <option value="4">{tr.veryGood}</option>
                  <option value="3">{tr.good}</option>
                  <option value="2">{tr.fair}</option>
                  <option value="1">{tr.poor}</option>
                </select>

                <textarea name="review_message" placeholder={tr.writeExperience} className="w-full rounded-2xl px-5 py-4 text-stone-900 bg-white border border-stone-200 outline-none min-h-[180px]" required />

                <button type="submit" className="bg-amber-600 hover:bg-amber-700 transition px-10 py-4 rounded-full text-lg font-bold shadow-lg">
                  {tr.submitReview}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/31639315783?text=Hello%20Casa%20Hermanos%2C%20I%20would%20like%20more%20information%20about%20booking." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl">
        💬
      </a>
    </div>
  );
}
