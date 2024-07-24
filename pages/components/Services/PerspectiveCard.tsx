import { useRef, useState } from "react"
import { mergeClasses } from "@expo/styleguide"
import { className } from "postcss-selector-parser"
import { motion } from "framer-motion"
import usePerspective from "@/pages/components/usePerspective"

export default function PerspectiveCard(props: { children: any }) {
  const scrollView = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.4,
    },
    viewport: { once: true },
  }
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const { onMouseEnter, onMouseMove, onMouseLeave, className } =
    usePerspective()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top
    setMousePosition({ x, y })
  }
  return (
    <motion.div {...scrollView}>
      <div className={"flex h-full [perspective:650px]"}>
        <div
          className={mergeClasses(
            className,
            "group relative w-full rounded-lg border border-default bg-element p-5 pb-8",
          )}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseMove={(ev) => {
            onMouseMove(ev)
            handleMouseMove(ev)
          }}
        >
          {props.children}
          <div
            className={
              "absolute -inset-px rounded-lg opacity-0 transition duration-500 group-hover:opacity-100"
            }
            style={{
              background: `radial-gradient(200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(142, 78, 198, 0.125), transparent 80%)`,
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  )
}
