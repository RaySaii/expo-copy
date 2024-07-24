import { ArrowRightIcon } from "@expo/styleguide-icons/outline/ArrowRightIcon"
import { XLogoIcon } from "@expo/styleguide-icons/custom/XLogoIcon"
import { useEffect, useRef, useState } from "react"
import useMeasure from "react-use-measure"
import {
  animate,
  motion,
  useAnimate,
  useAnimationControls,
  useMotionValue,
} from "framer-motion"

export default function Feedback() {
  const ref = useRef<any>()
  const controls = useRef<any>()
  useEffect(() => {
    controls.current = animate(
      ref.current,
      { x: [0, -370 * feedbacks.length - 32 * feedbacks.length] },
      {
        ease: "linear",
        duration: 40,
        repeat: Infinity,
      },
    )
    return () => controls.current.stop()
  }, [])
  const feedbacks = [
    {
      img: "/static/home/avatars/GroundControl.webp",
      name: "Rafael Mendiola",
      username: "GroundControl",
      text: [
        'From the Q&A panel: "If I were starting a new React Native app I would use ',
        "@expo",
        '". The whole group endorsed it #ReactNativeEU',
      ],
    },
    {
      img: "/static/home/avatars/LisaMillerCool.webp",
      name: "Lisa Miller",
      username: "LisaMillerCool",
      text: [
        "If you are planning to develop an app using react native, it's a no-brainer to go with Expo. It's like a package of goodies. I don't even understand why it's so awesome. Good job ",
        "@expo",
        " team. You've made our lives simpler.",
      ],
    },
    {
      img: "/static/home/avatars/WesleyJohnson.webp",
      name: "Wes Johnson",
      username: "WesleyJohnson",
      text: [
        "As a career-long web developer, getting push notifications working in ",
        "@reactnative",
        " via ",
        "@expo",
        " feels like black magic. Loving it.",
      ],
    },
    {
      img: "/static/home/avatars/irfan__zainudin.webp",
      name: "ipey",
      username: "irfan__zainudin",
      text: [
        "It is so easy to build your own mobile app nowadays. With technologies like ",
        "@reactnative",
        " and ",
        "@expo",
        " , literally anyone with an idea can rapidly build their dream app. What a time to be alive!",
      ],
    },
    {
      img: "/static/home/avatars/mwarger.webp",
      name: "Mat Warger",
      username: "mwarger",
      text: [
        "I don't know who needs to hear this but ",
        "@expo",
        " is the future.",
      ],
    },
    {
      img: "/static/home/avatars/wcandillon.webp",
      name: "William Candillon",
      username: "wcandillon",
      text: [
        "The speed at which React Native Web via ",
        "@expo",
        " has evolved in the past 6 months is absolutely wild. My head is spinning.",
      ],
    },
    {
      img: "/static/home/avatars/devth.webp",
      name: "Trevor Hartman",
      username: "devth",
      text: [
        "Expo recently made it possible to target web, so you can write a single UI for native and web. I’m continually impressed.\n\n Otherwise next.js by ",
        "@zeithq",
        " is incredible.\n\n Both of these projects have amazing docs, DX, and fast release cycles.",
      ],
    },
    {
      img: "/static/home/avatars/jamonholmgren.webp",
      name: "Jamon Holmgren",
      username: "jamonholmgren",
      text: [
        "So ",
        "@expo",
        "’s over the air update feature just saved us on launch day (yes, Friday, sorry). We had a crash happening on a critical path (didn’t happen in dev testing) but narrowed it down and deployed a fix using OTA in about an hour.",
      ],
    },
    {
      img: "/static/home/avatars/AnnieElequin.webp",
      name: "Annie Elequin",
      username: "AnnieElequin",
      text: [
        "@expo",
        "made notifications so easy, I almost cried tears of joy 😭 using expo is just a delightful experience",
      ],
    },
    {
      img: "/static/home/avatars/bakerofbytes.webp",
      name: "Ryan Baldwin",
      username: "bakerofbytes",
      text: [
        "It’s difficult to make a tool that is powerful, easy to use, and stays out of the way. ",
        "@expo",
        " has figured it out and it’s one of the most pleasurable dev experiences I’ve had in my career.",
      ],
    },
    {
      img: "/static/home/avatars/caseyli23.webp",
      name: "Casey Li",
      username: "caseyli23",
      text: [
        "I love how ",
        "@expo",
        " allows me to build my standalone apps remotely on their much more powerful servers! Saves time and allows me to continue to use my computer while I wait for the build!",
      ],
    },
    {
      img: "/static/home/avatars/thebigredgeek.webp",
      name: "The Big Red Geek",
      username: "thebigredgeek",
      text: [
        "I think ",
        "@expo",
        " is one of the most beautiful ****ing pieces of engineering I’ve seen in a very long time",
      ],
    },
    {
      img: "/static/home/avatars/Ipse_dixt_T.webp",
      name: "Tyler H",
      username: "Ipse_dixt_T",
      text: [
        "Arkansas Western District Court uses expo web. I chose ",
        "@expo",
        " because it was the fastest way for a single developer to achieve our mandate—mobile/desktop/web.",
      ],
    },
  ]
  return (
    <section className={"relative overflow-hidden bg-palette-blue3 pb-28"}>
      <div
        className={"relative z-20 mx-auto flex w-full items-center gap-8 px-6"}
      >
        <motion.div
          ref={ref}
          onHoverStart={() => controls.current.pause()}
          onHoverEnd={() => controls.current.play()}
          className={
            "backface-hidden flex transform-gpu items-center gap-[32px]"
          }
        >
          {[...feedbacks, ...feedbacks].map((item, index) => (
            <div
              className={
                "w-[370px] rounded-md border border-secondary bg-default shadow-xs"
              }
            >
              <div className={"px-6 py-5"}>
                <div className={"flex gap-2 pb-4"}>
                  <img
                    src={item.img}
                    height="44"
                    width="44"
                    loading="lazy"
                    alt="Rafael Mendiola's avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semiBold text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-default">
                      {item.name}
                    </p>
                    <p className="text-[14px] font-normal !leading-tight leading-[1.5715] tracking-[-0.006rem] text-secondary">
                      @&nbsp;{item.username}
                    </p>
                  </div>
                  <XLogoIcon
                    className={
                      "icon-md ml-auto min-w-[24px] text-palette-black dark:text-palette-white"
                    }
                  />
                </div>
                <p className="!whitespace-pre-line text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-default">
                  {item.text.map((text, index) => (
                    <span
                      key={index}
                      className={text.startsWith("@") ? "text-link" : ""}
                    >
                      {text}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <h2 className="relative z-20 mt-16 !text-center text-[39px] font-black leading-[1.3076] tracking-[-0.021rem] text-palette-blue12 max-md-gutters:text-[34px] max-md-gutters:leading-[1.2941] max-sm-gutters:text-[29px] max-sm-gutters:leading-[1.3103]">
        Upgrade your team’s workflow
        <br />
        and iterate with stability.
      </h2>
      <div className={"relative z-20 mt-[32px] flex w-full justify-center"}>
        <a
          className="mb-4 inline-flex h-15 items-center gap-2 whitespace-nowrap rounded-lg border border-solid border-button-primary bg-button-primary px-8 text-lg font-medium text-button-primary shadow-xs transition active:scale-98 hocus:bg-button-primary-hover"
          href="/signup"
        >
          <span className="flex select-none self-center text-inherit leading-none">
            Sign Up
          </span>
          <ArrowRightIcon className="icon-lg text-button-primary-icon" />
        </a>
      </div>
      <img
        width="140vw"
        height="120%"
        src="/static/home/signup-stripes.svg"
        className="absolute left-[-20vw] top-0 z-10 min-h-[120%] min-w-[140vw] opacity-60 dark:opacity-[2.5%] max-xl-gutters:min-w-[160vw] max-lg-gutters:min-w-[180vw] max-md-gutters:min-w-[1600px]"
        alt="pattern"
      />
      <div className="absolute top-0 z-10 h-[158px] w-full bg-default"></div>
    </section>
  )
}
