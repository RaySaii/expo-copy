import { ArrowRightIcon } from "@expo/styleguide-icons/outline/ArrowRightIcon"
import { Stars02DuotoneIcon } from "@expo/styleguide-icons/duotone/Stars02DuotoneIcon"
import { TerminalBrowserDuotoneIcon } from "@expo/styleguide-icons/duotone/TerminalBrowserDuotoneIcon"
import { StoplightDuotoneIcon } from "@expo/styleguide-icons/custom/StoplightDuotoneIcon"
import { Rocket01DuotoneIcon } from "@expo/styleguide-icons/duotone/Rocket01DuotoneIcon"
import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"
import BannerItem1 from "@/pages/components/Banner/BannerItem1"
import BannerItem2 from "@/pages/components/Banner/BannerItem2"
import BannerItem3 from "@/pages/components/Banner/BannerItem3"
import { mergeClasses } from "@expo/styleguide"
import React, { useEffect, useRef, useState } from "react"
import { wrap } from "popmotion"
import { AnimatePresence, motion } from "framer-motion"

export default function Banner() {
  const activeColor = [
    "bg-palette-blue7",
    "bg-palette-orange7",
    "bg-palette-green7",
  ]
  const [[page, direction], setPage] = useState([0, 0])
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
      }
    },
  }
  const timer = useRef<any>()
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  const activeIndex = wrap(0, 3, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
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
    <section
      className={
        "select-none overflow-x-hidden pb-28 pt-32 max-lg-gutters:pb-16 max-lg-gutters:pt-12 max-md-gutters:pb-8"
      }
    >
      <div
        className={
          "relative mx-auto grid w-full max-w-screen-xl-gutters grid-cols-2 gap-2 px-6 max-lg-gutters:grid-cols-1 max-lg-gutters:gap-20"
        }
      >
        <div>
          <a
            className="mb-8 inline-flex items-center rounded-full border border-palette-red6 bg-palette-red2 text-xs text-palette-red10 transition-colors duration-300 hocus:bg-palette-red3"
            href="#"
          >
            <div className="flex items-center gap-2 py-1 pl-4 pr-5">
              <Stars02DuotoneIcon className="icon-sm text-palette-red10" />
              Learn what’s new!
              <ArrowRightIcon className="icon-sm text-palette-red10" />
            </div>
          </a>
          <h1 className="mb-6 mt-2 select-text !text-[37px] text-[31px] !font-normal font-semibold !leading-[59px] leading-[1.29] !tracking-tight tracking-[-0.022rem] text-default max-xl-gutters:!text-[32px] max-xl-gutters:!leading-[51px] max-md-gutters:text-[27px] max-md-gutters:leading-[1.3333] max-sm-gutters:!text-[28px] max-sm-gutters:text-[23px] max-sm-gutters:!leading-[45px] max-sm-gutters:leading-[1.3913]">
            <span className="relative top-[3px] max-sm-gutters:top-0">
              Expo and EAS are
            </span>
            <br />
            an ecosystem of tools that help you{" "}
            <br className="max-sm-gutters:hidden" />
            <span className="inline-block rounded-md bg-palette-blue3 px-2 pb-1.5 !leading-[1.37] text-palette-blue10 max-sm-gutters:pb-1">
              <TerminalBrowserDuotoneIcon
                className={
                  "icon-md inline size-7 text-palette-blue10 max-sm-gutters:icon-lg"
                }
              />
              &nbsp;develop
            </span>{" "}
            <span className="inline-block rounded-md bg-palette-orange3 px-2 pb-1.5 !leading-[1.37] text-palette-orange10 max-sm-gutters:pb-1">
              <StoplightDuotoneIcon
                className={
                  "icon-md -mx-0.5 inline size-7 text-palette-orange10 max-sm-gutters:icon-lg"
                }
              />
              &nbsp;review
            </span>
            <span className="px-2">&amp;</span>
            <span className="inline-block rounded-md bg-palette-green3 px-2 pb-1.5 !leading-[1.37] text-palette-green10 max-sm-gutters:pb-1">
              <Rocket01DuotoneIcon
                className={
                  "icon-md inline size-7 text-palette-green10 max-sm-gutters:icon-lg"
                }
              />
              &nbsp;deploy
            </span>
          </h1>
          <p className="mb-14 max-w-[540px] select-text !text-lg text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary max-lg-gutters:mr-0 max-md-gutters:mb-10">
            Create universal native apps with React that run on Android, iOS,
            and the web. Iterate with confidence.
          </p>
          <div className="flex gap-5 max-sm-gutters:flex-col">
            <a
              className="inline-flex h-15 items-center gap-2 whitespace-nowrap rounded-[12px] border-0 border-solid border-button-primary bg-palette-black px-6 text-lg font-semibold text-palette-white shadow-xs transition active:scale-98 hocus:bg-palette-black hocus:opacity-80 dark:bg-palette-white dark:text-palette-black dark:hocus:bg-palette-white max-sm-gutters:justify-center"
              href="#"
            >
              <span className="flex select-none self-center text-inherit leading-none">
                Sign Up for Free
              </span>
              <ArrowRightIcon
                className={"icon-lg text-palette-white dark:text-palette-black"}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-15 items-center gap-2 whitespace-nowrap rounded-[12px] border border-solid border-button-secondary bg-button-secondary px-6 text-lg font-semibold text-button-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover max-sm-gutters:justify-center"
              href="https://docs.expo.dev"
            >
              <span className="flex select-none self-center text-inherit leading-none">
                Read the Docs
              </span>
              <ArrowUpRightIcon
                className={"icon-lg text-button-secondary-icon"}
              />
            </a>
          </div>
        </div>
        <div className={"max-lg-gutters:hidden"}>
          <div className={"relative min-h-[500px] max-lg-gutters:hidden"}>
            <AnimatePresence>
              <motion.div
                className={
                  "backface-hidden absolute flex size-full flex-1 grow transform-gpu cursor-grab justify-center"
                }
                key={page}
                custom={direction}
                variants={variants}
                initial={"enter"}
                animate={"center"}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                draggable="false"
              >
                {activeIndex === 0 && <BannerItem1 />}
                {activeIndex === 1 && <BannerItem2 />}
                {activeIndex === 2 && <BannerItem3 />}
              </motion.div>
            </AnimatePresence>
            <div
              className={
                "absolute inset-x-0 bottom-0 z-10 flex max-w-[596px] justify-center gap-2.5 py-8"
              }
            >
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      paginate(index - activeIndex)
                    }}
                    className={mergeClasses(
                      "h-1.5 w-[90px] cursor-pointer rounded-sm bg-element",
                      index === activeIndex ? activeColor[index] : "",
                    )}
                  ></div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
