import { Prata } from "next/font/google"


const prata = Prata({ subsets: ['latin'], weight: "400" })


export default function Home() {

  return (
    <main className="">
      <article className="flex flex-col w-full h-screen bg-gradient-to-t from-black to-transparent">
          <h1 className={`text-6xl ${prata.className} justify-center items-center my-32 z-10`}>Welcome to my portfolio</h1>
          <span className="w-80 h-4 border-b justify-center items-center"></span>
          <img src={"/gallery/hero-portfolio.jpg"} className="w-full h-full object-cover absolute -z-10 "/>
      </article>
      {/* some borders to split while scrolling down page */}
      {/* maybe a hero that fills half of the width with text on the right side of it */}
      {/* react icons with trendy star */}
    </main>
  )
}
