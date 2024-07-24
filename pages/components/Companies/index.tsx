import { ArrowRightIcon } from "@expo/styleguide-icons/outline/ArrowRightIcon"
import { mergeClasses } from "@expo/styleguide"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { wrap } from "popmotion"

export default function Companies() {
  const companies = [
    [
      "better-color.svg",
      "blackline-color.svg",
      "bounce-color.svg",
      "brex-color.svg",
    ],
    [
      "cameo-color.svg",
      "codecademy-color.svg",
      "dailypay-color.svg",
      "facepunch-color.svg",
    ],
    [
      "few-color.svg",
      "front-color.svg",
      "goody-color.svg",
      "insider-color.svg",
      "lirr-color.svg",
    ],
    [
      "petal-color.svg",
      "pizza-hut-color.svg",
      "plt-color.svg",
      "portify-color.svg",
      "prodigy-color.svg",
    ],
    [
      "shapeshift-color.svg",
      "spikeball-color.svg",
      "trinet-color.svg",
      "zoe-color.svg",
    ],
  ]

  // State to store the start position and time
  const [startPosition, setStartPosition] = useState({ x: 0, time: Date.now() })
  const [offset, setOffset] = useState({ x: 0 })
  const timer = useRef<any>()

  const swipeConfidenceThreshold = 100
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const [[page, direction], setPage] = useState([0, 0])
  const activeIndex = wrap(0, companies.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    // Set the start position and current time
    setStartPosition({ x: event.clientX, time: Date.now() })
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    // Calculate and set the offset from the start position
    const offsetX = event.clientX - startPosition.x
    setOffset({ x: offsetX })
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    // Calculate the time difference
    const timeDiff = Date.now() - startPosition.time
    // Calculate and set the velocity
    const velocityX = offset.x / timeDiff
    const swipe = swipePower(offset.x, velocityX)
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
    // Reset startPosition for the next interaction
    setStartPosition({ x: 0, time: Date.now() })
  }

  useEffect(() => {
    autoPlay()
  }, [activeIndex])

  function autoPlay() {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
    }
    timer.current = setInterval(() => {
      paginate(1)
    }, 10000)
  }

  return (
    <section className={"py-20 max-md-gutters:pt-12"}>
      <div className={"relative mx-auto w-full max-w-screen-xl-gutters px-6"}>
        <div
          className={
            "mb-10 flex items-center justify-between max-md-gutters:flex-col max-md-gutters:items-center max-md-gutters:gap-y-3"
          }
        >
          <p className="text-[16px] font-medium leading-[1.625] tracking-[-0.011rem] text-default">
            Trusted by top companies
          </p>
          <a
            className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full border border-solid border-button-secondary bg-button-secondary px-5 text-xs font-medium text-button-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
            href="#"
          >
            <span className="flex select-none self-center text-inherit leading-none">
              Read Their Stories
            </span>
            <ArrowRightIcon className={"icon-sm text-button-secondary-icon"} />
          </a>
        </div>
        <div className={"max-lg-gutters:hidden"}>
          <AnimatePresence>
            <motion.div
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerMove={onPointerMove}
              className={
                "flex cursor-grab select-none items-center justify-center gap-x-28"
              }
              draggable="false"
            >
              {companies[activeIndex].map((logo, index) => {
                return (
                  <motion.div
                    key={logo}
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, delay: 0.05 * index }}
                    className={
                      "flex min-h-[100px] max-w-[184px] items-center justify-center"
                    }
                  >
                    <img
                      key={logo}
                      draggable="false"
                      onDragEnd={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                      }}
                      className={
                        "backface-hidden pointer-events-none transform-gpu select-none !rounded-none dark:brightness-[0.35] dark:grayscale dark:invert dark:saturate-[0.15] dark:sepia-[0.01]"
                      }
                      src={`/static/home/logos/${logo}`}
                      alt={"Company logo"}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-3">
            {companies.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    paginate(index - activeIndex)
                  }}
                  className={mergeClasses(
                    "size-2.5 cursor-pointer rounded-full",
                    index === activeIndex ? "bg-palette-gray8" : "bg-element",
                  )}
                ></div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
