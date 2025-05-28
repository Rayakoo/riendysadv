import React from "react";

const WhatsappBtn = () => (
  <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
    <a
      href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 rounded-full shadow-lg hover:bg-green-600 px-4 py-2 transition"
    >
      <span className="block w-8 h-8 flex items-center justify-center">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.37-.22-3.69.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.34.99 2.63 1.13 2.81.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
        </svg>
      </span>
      <span className="font-bold text-white text-base">Hubungi Sekarang</span>
    </a>
  </div>
);

export default WhatsappBtn;