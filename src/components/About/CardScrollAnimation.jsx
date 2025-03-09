import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Card from "./Card";

export const projects = [
  {
    title: "eCommerce, Manufacturing",
    description: "STVOL: eCommerce for a leading gun store",
    src: "https://wezom.com/storage/cases/small/2QWqUuz7107XAyGIpCHkYNh1CFWFaAd3rfggRRSQ.png.webp?v=1740504230",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#212121"
  },
  {
    title: "Clément Chapillon",
    description: "B2B ecommerce for medical devices",
    src: "https://wezom.com/storage/cases/small/Ma528qUFRb76OWmFTUph1dPysfI3J06ne6JR22Tm.png.webp?v=1731940495",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "ERP with Dedicated Team in OIL&GAS",
    src: "https://wezom.com/storage/cases/small/TPPhqBhChVYPOq17I1HdFSHf8hNVBIPo1ufA2J17.png.webp?v=1691049593",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D"
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description: "Cooper&Hunter: AI for customer calls",
    src: "https://wezom.com/storage/cases/small/E7Y4HeCkXh0Oi1TuOjy7dJ7XqSXcHYQ34Hyeus94.png.webp?v=1737118713",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429"
  }
]

export default function CardScrollAnimation() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} >
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}


