import { motion } from "framer-motion"
import { mergeClasses } from "@expo/styleguide"

type Type = "develop" | "review" | "deploy"

export default function MotionDot({ type = "develop" }: { type?: Type }) {
  const borderColor = {
    develop: "border-palette-blue7",
    review: "border-palette-orange7",
    deploy: "border-palette-green7",
  }
  const scrollInView = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
      delay: 0.3,
    },
    viewport: { once: true },
  }
  return (
    <motion.em
      {...scrollInView}
      className={mergeClasses(
        "absolute z-10 mx-1.5 block size-5 rounded-full border-2 bg-default",
        borderColor[type],
      )}
    ></motion.em>
  )
}
