import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-orange-200/30">
			<Head>
				<title>Techsauce</title>
				<meta name="description" content="Smartphone Information" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<div className="justify-center w-full h-auto p-10 text-center  space-y-3.5">
					<div className="flex content-center justify-center w-auto">
						<img src="/logo/techsauce-header.png" alt="logo" className="w-auto h-32" />
					</div>
					<div className="flex justify-center space-x-8 text-2xl font-bold tracking-wide text-gray-700 uppercase ">
						<Link href="/">
							<a>Berita</a>
						</Link>
						<Link href="/">
							<a>Informasi</a>
						</Link>
						<Link href="/">
							<a>Daftar Gawai</a>
						</Link>
						<Link href="/">
							<a>Perbandingan</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="container mx-auto">
				<Component {...pageProps} />
			</section>
			<section className="px-20 py-3 text-center bg-amber-700/80">
				<div className="flex items-center justify-between w-full h-auto pb-20 text-center">
					<div>
						<Image src="/logo/techlogo.png" width={200} height={50} alt="logo" />
					</div>
					<div className="flex space-x-4">
						<div>
							<Image src="/icon/facebook.svg" width={30} height={30} alt="facebook-icon" />
						</div>
						<div>
							<Image src="/icon/youtube.svg" width={30} height={30} alt="facebook-icon" />
						</div>
						<div>
							<Image src="/icon/twitter.svg" width={30} height={30} alt="facebook-icon" />
						</div>
						<div>
							<Image src="/icon/instagram.svg" width={30} height={30} alt="facebook-icon" />
						</div>
					</div>
				</div>
				<div className="p-5 font-semibold border-t-2 border-black">
					Techsauce &copy; {new Date().getFullYear()}. All Rights Reserved.
				</div>
			</section>
		</div>
	);
}

export default MyApp;
