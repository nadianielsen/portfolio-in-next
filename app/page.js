import { Prata } from "next/font/google"


const prata = Prata({ subsets: ['latin'], weight: "400" })


export default function Home() {

  return (
    <main className="">
      <article className="flex flex-col h-screen bg-gradient-to-t from-[#161416] to-transparent justify-center items-center">
          <img src={"/gallery/hero-portfolio.jpg"} className="w-full h-full object-cover absolute -z-10 opacity-75"/>
          <div className="border w-[40rem] h-[20rem]"></div>
      </article>
      <article className="h-screen">

      </article>
      {/* some borders to split while scrolling down page */}
      {/* maybe a hero that fills half of the width with text on the right side of it */}
      {/* react icons with trendy star */}
    </main>
  )
}
