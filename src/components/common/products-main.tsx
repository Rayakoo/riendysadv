"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
	{
		img: "/Neon1.jpg",
		title: "Neon Box",
		desc: "Neon box custom untuk branding usaha Anda, dengan pencahayaan LED yang terang dan desain menarik.",
		section: "neon-section",
	},
	{
		img: "/acrylic1.jpg",
		title: "Acrylic",
		desc: "Acrylic cutting, huruf timbul, plakat, dan display promosi dengan hasil potong rapi dan presisi.",
		section: "acrylic-section",
	},
	{
		img: "/exterior1.jpg",
		title: "Exterior Signage",
		desc: "Papan nama, billboard, dan signage luar ruangan yang tahan cuaca untuk memperkuat identitas bisnis Anda.",
		section: "exterior-section",
	},
	{
		img: "/interior1.jpg",
		title: "Interior Signage",
		desc: "Signage dan dekorasi interior untuk kantor, toko, dan ruang usaha agar tampil lebih profesional.",
		section: "interior-section",
	},
	{
		img: "/furniture1.jpg",
		title: "Furniture Custom",
		desc: "Pembuatan furniture custom untuk kebutuhan usaha, kantor, dan toko dengan desain modern dan material berkualitas.",
		section: "furniture-section",
	},
	{
		img: "/laser1.jpg",
		title: "Laser Cutting",
		desc: "Jasa laser cutting untuk acrylic, MDF, dan material lain, hasil potong presisi untuk berbagai kebutuhan promosi.",
		section: "laser-section",
	},
];

export default function ProductsMain() {
	const router = useRouter();

	const handleCardClick = (section: string) => {
		router.push(`/Gallery#${section}`);
	};

	return (
		<section className="py-20 px-6 bg-black" data-aos="fade-up">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
					Produk Kami
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{products.map((product, idx) => (
						<div
							key={idx}
							className="bg-yellow-100 rounded-xl p-8 flex flex-col items-center shadow-lg cursor-pointer hover:scale-105 transition"
							data-aos="fade-up"
							data-aos-delay={(idx % 3) * 80}
							onClick={() => handleCardClick(product.section)}
							tabIndex={0}
							role="button"
							aria-label={`Lihat ${product.title} di galeri`}
						>
							<Image
								src={product.img}
								alt={product.title}
								width={124}
								height={124}
								className="w-24 h-24 object-cover rounded-2xl"
							/>
							<h3 className="text-xl font-semibold mt-4 mb-2 text-black">
								{product.title}
							</h3>
							<p className="text-black text-center">{product.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
