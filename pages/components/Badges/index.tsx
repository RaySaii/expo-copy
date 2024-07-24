import { Speedometer02Icon } from "@expo/styleguide-icons/outline/Speedometer02Icon"
import { FolderIcon } from "@expo/styleguide-icons/outline/FolderIcon"
import { NpmIcon } from "@expo/styleguide-icons/custom/NpmIcon"
import { Users01Icon } from "@expo/styleguide-icons/outline/Users01Icon"
import { motion } from "framer-motion"

export default function Badges() {
  function getScrollInView(index: number) {
    return {
      initial: { opacity: 0, scale: 0.9, y: 40 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
      viewport: { once: true },
    }
  }

  return (
    <section className={"relative bg-screen py-24"}>
      <svg
        className="absolute inset-0 fill-palette-gray7 dark:fill-palette-gray4"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="statsPattern"
            patternUnits="userSpaceOnUse"
            width="60"
            height="60"
            patternTransform="scale(0.4) rotate(0)"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="transparent"
            ></rect>
            <path
              d="M 4.95 2.7 a 2.25 2.25 90 0 1 -2.25 2.25 a 2.25 2.25 90 0 1 -2.25 -2.25 a 2.25 2.25 90 0 1 2.25 -2.25 a 2.25 2.25 90 0 1 2.25 2.25"
              stroke-width="1"
              stroke="none"
              fill="inherit"
            ></path>
          </pattern>
        </defs>
        <rect
          width="800%"
          height="400%"
          transform="translate(15,20)"
          fill="url(#statsPattern)"
        ></rect>
      </svg>
      <div className="relative mx-auto w-full !max-w-[775px] max-w-screen-xl-gutters px-6">
        <h2 className="mb-12 text-center text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
          An open-source platform built for production apps
        </h2>
        <div className="grid grid-cols-4 gap-6 max-md-gutters:grid-cols-2 max-md-gutters:gap-y-12">
          <motion.div
            {...getScrollInView(0)}
            className="flex flex-col items-center"
          >
            <div className="mb-4 rounded-md border border-secondary bg-default p-2 shadow-xs">
              <Speedometer02Icon className="icon-xl text-palette-blue10" />
            </div>
            <h3 className="text-[25px] font-semibold leading-[1.4] !tracking-[0.01em] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
              120 FPS
            </h3>
            <p className="text-center text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
              Animations
            </p>
          </motion.div>
          <motion.div
            {...getScrollInView(1)}
            className="flex flex-col items-center"
          >
            <div className="mb-4 rounded-md border border-secondary bg-default p-2 shadow-xs">
              <FolderIcon className="icon-xl text-palette-orange9" />
            </div>
            <h3 className="text-[25px] font-semibold leading-[1.4] !tracking-[0.01em] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
              750K+
            </h3>
            <p className="text-center text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
              Projects
            </p>
          </motion.div>
          <motion.div
            {...getScrollInView(2)}
            className="flex flex-col items-center"
          >
            <div className="mb-4 rounded-md border border-secondary bg-default p-2 shadow-xs">
              <NpmIcon className="icon-xl text-palette-red9" />
            </div>
            <h3 className="text-[25px] font-semibold leading-[1.4] !tracking-[0.01em] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
              75+
            </h3>
            <p className="text-center text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
              Premade modules
            </p>
          </motion.div>
          <motion.div
            {...getScrollInView(3)}
            className="flex flex-col items-center"
          >
            <div className="mb-4 rounded-md border border-secondary bg-default p-2 shadow-xs">
              <Users01Icon className="icon-xl text-palette-pink9" />
            </div>
            <h3 className="text-[25px] font-semibold leading-[1.4] !tracking-[0.01em] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
              &gt;50%
            </h3>
            <p className="text-center text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
              React Native projects using Expo
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
