import { useState } from "react";

export default function App() {
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
    "2026-05-25",
    "2026-05-26",
    "2026-05-27",
    "2026-05-28",
    "2026-05-29",
    "2026-05-30",
    "2026-05-31",
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
  return 85;
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
        <img
          src={heroPhoto}
          alt="Casa Hermanos"
          className="absolute inset-0 w-full h-full object-cover scale-110 saturate-[1.5] brightness-[1.15] contrast-[1.15] hue-rotate-[2deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-cyan-400/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/70" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <div className="mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur px-5 py-2 text-white/90 text-sm tracking-[0.35em] uppercase">
            Torrevieja · Spain
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-[0.18em] uppercase text-white drop-shadow-2xl">
            Casa Hermanos
          </h1>
          <div className="mt-6 h-px w-28 bg-white/70" />
          <p className="mt-8 text-white text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
            Beautiful apartment only 80 meters from Playa del Cura - Torrevieja
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-white/15 backdrop-blur border border-white/40 px-8 py-4 font-semibold text-white shadow-xl hover:bg-white hover:text-stone-900 transition"
            >
              View Gallery
            </button>
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-white/15 backdrop-blur border border-white/40 px-8 py-4 font-semibold text-white shadow-xl hover:bg-white hover:text-stone-900 transition"
            >
              Check Availability
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">About the apartment</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-7 leading-tight">A comfortable seaside stay in Torrevieja</h2>
          <p className="text-lg leading-9 text-stone-600">
            Casa Hermanos is a beautiful apartment located just 80 meters from Playa del Cura in Torrevieja. Enjoy the sun, beach, restaurants, and relaxed atmosphere of the Spanish coast. Perfect for families, couples, or friends looking for a wonderful holiday near the sea.
          </p>
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
              <p className="text-stone-500 leading-7">
                Sofa bed (140x180 cm)
              </p>
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
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">Gallery</p>
              <h2 className="text-4xl md:text-5xl font-bold">Photo Gallery</h2>
            </div>
            <p className="text-stone-500">Click any photo to open fullscreen</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 text-left hover:-translate-y-1 transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-[310px] object-cover group-hover:scale-110 transition duration-700"
                  />
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
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">Availability</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">How to Book</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-8">
              Select your check-in and check-out dates, fill in your details, and send a booking request directly from the website.
            </p>
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
                    <button
                      key={day}
                      onClick={() => selectBookingDate(day)}
                      disabled={closed}
                      className={`min-h-[76px] md:min-h-[96px] rounded-2xl p-3 flex flex-col justify-between text-left border transition ${
                        past
                          ? "bg-red-50 text-red-400 border-red-100 cursor-not-allowed"
                          : booked
                          ? "bg-stone-200 text-stone-500 border-stone-300 cursor-not-allowed"
                          : isSelectedDate(day)
                          ? "bg-stone-900 text-white border-stone-900 shadow-xl"
                          : isBetweenDates(day)
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-stone-50 border-stone-100 hover:bg-white hover:shadow-md"
                      }`}
                    >
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
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">Check-in</p>
                  <h4 className="text-2xl font-bold text-stone-900">15:00 PM</h4>
                  <p className="text-stone-500 mt-2 leading-6">
                    Guests can check in from 15:00 PM on the day of arrival.
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mb-2">Check-out</p>
                  <h4 className="text-2xl font-bold text-stone-900">11:00 AM</h4>
                  <p className="text-stone-500 mt-2 leading-6">
                    Check-out is before 11:00 AM on the departure day.
                  </p>
                </div>
              </div>

              <p className="text-sm text-stone-500 mt-6 leading-6">
                Click once to choose your check-in date, then click another date for check-out. Prices can be changed later for each date.
              </p>
            </div>

            <div className="bg-stone-950 text-white rounded-[2rem] p-7 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-bold mb-6">Booking Request</h3>

              <div className="bg-white/10 rounded-3xl p-5 mb-6 text-sm text-stone-200 space-y-3 border border-white/10">
                <p><strong>Check-in:</strong> {checkIn ? formatDate(checkIn) : "Select date"}</p>
                <p><strong>Check-out:</strong> {checkOut ? formatDate(checkOut) : "Select date"}</p>
                <p><strong>Nights:</strong> {bookingNights > 0 ? bookingNights : "-"}</p>

                <div className="border-t border-white/20 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between"><span>Apartment price</span><span>{bookingNights > 0 ? `€${apartmentPrice}` : "-"}</span></div>
                  <div className="flex justify-between"><span>Cleaning fee</span><span>{bookingNights > 0 ? `€${cleaningFee}` : "€70"}</span></div>
                  <div className="flex justify-between text-xl font-bold text-white pt-3"><span>Total price</span><span>{bookingNights > 0 ? `€${totalPrice}` : "-"}</span></div>
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
                  Send Booking Request
                </button>
              </form>

              {bookingSent && (
                <div className="mt-6 bg-emerald-500/20 border border-emerald-400 text-emerald-100 rounded-2xl p-4 leading-6">
                  Booking request created. After the website goes online, this form can be connected to email or a booking system.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-700 mb-4">Location</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-7">80 meters from Playa del Cura</h2>
            <p className="text-lg text-stone-600 leading-9 mb-8">
              Casa Hermanos is located at Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain. The apartment is only 80 meters from Playa del Cura, close to the promenade, restaurants, shops, and the Mediterranean Sea.
            </p>
            <div className="space-y-4 text-lg text-stone-700">
              <div className="flex gap-3"><span>📍</span><span>Calle Patricio Zammit 6, 03182 Torrevieja, Alicante, Spain</span></div>
              <div className="flex gap-3"><span>🏖️</span><span>80 meters from Playa del Cura</span></div>
              <div className="flex gap-3"><span>✈️</span><span>Close to Alicante Airport</span></div>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)] w-full bg-stone-100 border border-stone-100">
            <div className="h-[430px] w-full">
              <iframe
                title="Casa Hermanos Google Maps Location"
                src="https://maps.google.com/maps?hl=en&q=Calle%20Patricio%20Zammit%206%2C%2003182%20Torrevieja%2C%20Alicante%2C%20Spain&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle%20Patricio%20Zammit%206%2C%2003182%20Torrevieja%2C%20Alicante%2C%20Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-stone-950 text-white text-center font-bold py-4 hover:bg-amber-700 transition"
            >
              Open location in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-amber-500 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Questions about Casa Hermanos?</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-8">
            For questions, details, or special requests, contact us directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="https://wa.me/31639315783" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">
              WhatsApp
            </a>
            <a href="mailto:manios-13@hotmail.com" className="w-full sm:w-auto bg-white text-stone-950 hover:bg-stone-200 transition px-9 py-4 rounded-full text-lg font-bold shadow-lg">
              Email
            </a>
          </div>

          <div className="mt-14 text-stone-500">
            © 2026 Casa Hermanos · Torrevieja, Spain
          </div>
        </div>
      </section>
    </div>
  );
}
