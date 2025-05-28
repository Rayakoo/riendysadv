"use client";
export default function MapsContact() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black" data-aos="fade-up">
      <div className="w-full h-[70vh] md:h-[80vh] flex flex-col md:flex-row items-center justify-center gap-0">
        <div className="flex-1 h-full w-full">
          <iframe
            title="Lokasi Workshop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.577016420599!2d112.57987279999999!3d-7.9391665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883331665312f%3A0x88999c30a76e57e1!2sRiendys%20Advertising!5e0!3m2!1sen!2sid!4v1748423281718!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex-1 h-full w-full flex items-center justify-center bg-black">
          <div className="bg-black rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto border border-gray-800">
            <div className="text-yellow-100 text-sm mb-2 font-semibold">Riendys Advertising</div>
            <div className="text-2xl font-bold mb-2 text-white">WORKSHOP</div>
            <div className="mb-4 text-gray-200">
              Jln. Joyo Agung Atas, Perum Grand Soeroso 2 No.Kavling 11, Merjosari, <br />
              Kec. Lowokwaru, Kota Malang, <br />
              Jawa Timur 65144 <br />
            </div>
            <a
              href="https://maps.app.goo.gl/CGon1GAK8r3PJGDt6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-yellow-100 hover:text-yellow-300 transition"
            >
              LIHAT GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
