"use client";
import { useState } from "react";

const faqData = [
	{
		q: "Bagaimana cara order di riendysadv.com",
		a: "Anda dapat melakukan pemesanan melalui website, WhatsApp, atau datang langsung ke workshop kami. Pilih produk, konsultasikan kebutuhan, lalu lakukan pembayaran.",
	},
	{
		q: "Bagaimana mengetahui harga produk yang diinginkan",
		a: "Harga dapat diketahui dengan menghubungi customer service kami dan menyebutkan spesifikasi produk yang diinginkan.",
	},
	{
		q: "Metode pembayaran",
		a: "Kami menerima pembayaran melalui transfer bank, e-wallet, dan pembayaran tunai di tempat.",
	},
	{
		q: "Proses produksi",
		a: "Proses produksi dimulai setelah pembayaran DP diterima. Lama produksi tergantung jenis dan jumlah pesanan.",
	},
	{
		q: "Seputar pengiriman",
		a: "Pengiriman dilakukan menggunakan jasa ekspedisi terpercaya. Kami juga melayani pengantaran langsung untuk area tertentu.",
	},
	{
		q: "Kebijakan retur dan garansi",
		a: "Kami memberikan garansi produk sesuai ketentuan. Retur dapat dilakukan jika produk cacat produksi.",
	},
	{
		q: "Apakah bisa custom desain?",
		a: "Tentu, kami melayani custom desain sesuai kebutuhan Anda.",
	},
	{
		q: "Bagaimana cara konsultasi gratis?",
		a: "Silakan hubungi kami melalui WhatsApp atau form kontak untuk konsultasi gratis.",
	},
];

export default function FaqContact() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	return (
		<section className="py-16 px-4 bg-black" data-aos="fade-up">
			<div className="max-w-3xl mx-auto">
				<div className="text-yellow-100 uppercase text-xs mb-2 font-semibold tracking-widest">
					Pertanyaan Seputar Pemesanan
				</div>
				<h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-100">
					Yang Sering Ditanyakan
				</h2>
				<div className="divide-y divide-gray-800 border-t border-b border-gray-800">
					{faqData.map((item, idx) => (
						<div key={idx}>
							<button
								className="w-full text-left py-5 px-2 flex justify-between items-center focus:outline-none font-semibold text-yellow-100 hover:text-yellow-300 transition"
								onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
							>
								<span>{item.q}</span>
								<span className="ml-2 text-xl">
									{openIdx === idx ? "▲" : "▼"}
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIdx === idx
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								{openIdx === idx && (
									<div className="px-4 pb-5 pt-2 bg-gray-900 border border-yellow-100 rounded-lg text-white text-base animate-fadeIn shadow-lg">
										{item.a}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.animate-fadeIn {
					animation: fadeIn 0.3s;
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(-8px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
}
