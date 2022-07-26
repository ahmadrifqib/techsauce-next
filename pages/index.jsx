import Head from "next/head";
import Image from "next/image";

const Index = () => {
	return (
		<div>
			<div>
				<div className=" rounded-xl justify-center p-7 mx-20 text-center text-gray-800 bg-gradient-to-r from-orange-300 via-rose-300 to-blue-300 space-y-1.5">
					<div className="text-3xl font-semibold">Daftar Gawai</div>
					<div className="text-2xl font-medium">
						Disini ditampilkannya berupa informasi mengenai smartphone apa saja sesuai dengan kebutuhan.
					</div>
				</div>

				<div className="flex flex-row">
					<div className="grid grid-cols-4 gap-4 basis-3/4">
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
						</div>
					</div>
					<div className="text-center basis-1/4">Info General</div>
				</div>

				<div className="my-20">
					<div className="text-2xl font-bold">Gawai Terlaris</div>
					<div className="flex justify-around">
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
							<p className="font-medium">Baca Selengkapnya...</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
							<p className="font-medium">Baca Selengkapnya...</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
							<p className="font-medium">Baca Selengkapnya...</p>
						</div>
						<div className="items-center m-5 text-center">
							<Image src={"/assets/smartphone/az9.jpg"} width={120} height={200} alt="smarphone" />
							<p className="font-semibold">ASUS ZENFONE 9</p>
							<p className="font-medium">Baca Selengkapnya...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
