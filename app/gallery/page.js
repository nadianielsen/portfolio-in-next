import { Bodoni_Moda, Oranienbaum, Prata, Tienne } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const prata = Prata({ subsets: ['latin'], weight: "400" })

const Gallery = () => {

    const galleryImg = [
        {
            img: "/gallery/eyes.jpg",
            title: "Eyes"
        },
    ]

    return (
        <main className="grid">
            <section className="flex">
                <div className="w-[50%] h-screen bg-black flex flex-col justify-center items-center">
                    <div className="w-60 h-[25rem] bg-white rounded-t-full"></div>
                    <h2>something...</h2>
                </div>
                <article className="m-auto">
                    <h1 className={`text-6xl ${prata.className}`}>Gallery</h1>
                    <div className=" border-t-2 my-4 border-black"></div>
                    <div className="flex gap-x-3 justify-center">
                        <Link href={"/"} className="hover:font-bold transition-all hover:text-[#BFA5D9] hover:underline">Home</Link>
                        <FiArrowRight className="mt-1" />
                        <Link href={"/gallery"} className="font-bold hover:text-neutral-600 dark:hover:text-neutral-200">Gallery</Link>
                    </div>
                </article>
            </section>
            <article className="w-full h-screen grid grid-cols-4">
                {galleryImg.map(({ img, title }) => (
                    <div>
                        <Image src={img} width={1000} height={1000} className="rounded-2xl" />
                        <h2>{title}</h2>
                    </div>
                ))}
            </article>
        </main>
    );
}

export default Gallery;