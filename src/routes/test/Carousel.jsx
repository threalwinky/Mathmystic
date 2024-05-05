import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { motion } from "framer-motion"
export default function Carousel({
    slides,
    autoSlide = true,
    autoSlideInterval = 7000,
}) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="overflow-hidden relative h-56  p-5">
            <motion.div
            key={curr}
            // style={{x: 200}}
            whileInView={{x: [200, -200, 0]}}
            transition={{
                type: "spring",
                stiffness: "300",
                damping: "20"
            }}
            className="h-full w-full  items-center justify-center flex">
                <img className="h-28" src={slides[curr]} alt="" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (

                        <div

                            className={`
              transition-all w-2 h-2 bg-black rounded-full cursor-pointer
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                            onClick={() => setCurr(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}