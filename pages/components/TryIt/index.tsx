import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"
import { AppleIcon } from "@expo/styleguide-icons/custom/AppleIcon"
import { Earth02Icon } from "@expo/styleguide-icons/outline/Earth02Icon"
import { AndroidIcon } from "@expo/styleguide-icons/custom/AndroidIcon"
import { motion } from "framer-motion"

export default function TryIt() {
  function getScrollInView(index: number) {
    return {
      initial: { scale: 0.95 },
      whileInView: { scale: 1 },
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
        delay: 0.05 * index,
      },
      viewport: { once: true },
    }
  }

  return (
    <section className={"pb-24 pt-32 max-md-gutters:py-16"}>
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6">
        <div className="flex gap-16 max-xl-gutters:flex-col max-xl-gutters:items-center max-md-gutters:gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="mt-6 text-[39px] font-bold leading-[1.3076] tracking-[-0.021rem] text-default max-md-gutters:text-[34px] max-md-gutters:leading-[1.2941] max-sm-gutters:text-[29px] max-sm-gutters:leading-[1.3103]">
              Try it for yourself
            </h2>
            <p className="text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
              Fast animations. Genuine native components. Edit in your browser
              and preview on your device in seconds.
            </p>
            <div>
              <p className="mb-3 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Runs natively on:
              </p>
              <div className="flex gap-2">
                <div className="inline-flex h-[30px] select-none items-center gap-2 rounded-xl bg-element px-3">
                  <div className="relative flex items-center justify-center">
                    <AndroidIcon className="icon-sm text-icon-default" />
                  </div>
                  <span className="text-[14px] font-medium leading-[1.5715] tracking-[-0.006rem] text-secondary">
                    Android
                  </span>
                </div>
                <div className="inline-flex h-[30px] select-none items-center gap-2 rounded-xl bg-element px-3">
                  <div className="relative flex items-center justify-center">
                    <AppleIcon className="icon-sm text-icon-default" />
                  </div>
                  <span className="text-[14px] font-medium leading-[1.5715] tracking-[-0.006rem] text-secondary">
                    iOS
                  </span>
                </div>
                <div className="inline-flex h-[30px] select-none items-center gap-2 rounded-xl bg-element px-3">
                  <div className="relative flex items-center justify-center">
                    <Earth02Icon className="icon-sm text-icon-default" />
                  </div>
                  <span className="text-[14px] font-medium leading-[1.5715] tracking-[-0.006rem] text-secondary">
                    Web
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative z-10">
              <div className="framer-scroll flex overflow-x-hidden overflow-y-hidden pb-8 max-lg-gutters:max-w-[100vw] max-lg-gutters:overflow-x-auto max-md-gutters:w-screen">
                <motion.div
                  {...getScrollInView(0)}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="dark-theme relative min-h-[512px] min-w-[278px] duration-500 hocus:scale-1025">
                    <div className="absolute bottom-[26px] z-10 mx-[31px] min-h-[174px] rounded-b-[36px] bg-[rgba(32,42,47,0.75)] px-6 py-5 backdrop-blur-sm">
                      <h3 className="text-[16px] font-semibold leading-relaxed tracking-[-0.011rem] text-default">
                        Finance app
                      </h3>
                      <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default opacity-80">
                        Track expenses. 60 FPS animations.
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid border-button-quaternary bg-palette-white px-4 text-xs font-medium text-palette-black shadow-none transition active:scale-98 hocus:bg-palette-white hocus:text-palette-black hocus:opacity-80"
                        href="https://snack.expo.dev/@expo-team-snacks/finance-app"
                      >
                        <span className="flex select-none self-center text-inherit leading-none">
                          Try It
                        </span>
                        <ArrowUpRightIcon
                          className={"icon-sm text-palette-gray6"}
                        />
                      </a>
                    </div>
                    <img
                      src="/static/home/app-finance.webp"
                      className="absolute inset-0"
                      alt="Finance app"
                      loading="lazy"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </motion.div>
                <motion.div
                  {...getScrollInView(1)}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="dark-theme relative min-h-[512px] min-w-[270px] duration-500 hocus:scale-1025">
                    <div className="absolute bottom-[30px] z-10 mx-[31px] rounded-b-2xl bg-[rgba(32,42,47,0.75)] px-6 py-5 backdrop-blur-sm">
                      <h3 className="text-[16px] font-semibold leading-relaxed tracking-[-0.011rem] text-default">
                        Image app
                      </h3>
                      <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default opacity-80">
                        Upload images. Add stickers. Save to device.
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid border-button-quaternary bg-palette-white px-4 text-xs font-medium text-palette-black shadow-none transition active:scale-98 hocus:bg-palette-white hocus:text-palette-black hocus:opacity-80"
                        href="https://snack.expo.dev/@expo-team-snacks/image-app"
                      >
                        <span className="flex select-none self-center text-inherit leading-none">
                          Try It
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="icon-sm text-palette-gray6"
                          role="img"
                        >
                          <g id="arrow-up-right-outline-icon">
                            <path
                              id="Icon"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 17L17 7M17 7H7M17 7V17"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <img
                      src="/static/home/app-image.webp"
                      className="absolute inset-0"
                      alt="Image app"
                      loading="lazy"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative -mt-3 inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-secondary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
                    href="https://docs.expo.dev/tutorial/create-your-first-app"
                  >
                    <span className="flex select-none self-center text-inherit leading-none">
                      Build It Step-by-Step
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="icon-sm text-button-quaternary-icon"
                      role="img"
                    >
                      <g id="arrow-up-right-outline-icon">
                        <path
                          id="Icon"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </motion.div>
                <motion.div
                  {...getScrollInView(2)}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="dark-theme relative min-h-[512px] min-w-[266px] duration-500 hocus:scale-1025">
                    <div className="absolute bottom-[30px] left-[-1px] z-10 mx-6 min-h-[170px] rounded-b-md bg-[rgba(32,42,47,0.75)] px-6 py-5 backdrop-blur-sm">
                      <h3 className="text-[16px] font-semibold leading-relaxed tracking-[-0.011rem] text-default">
                        Social media app
                      </h3>
                      <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default opacity-80">
                        Native navigation. Fast lists. Ready to scroll.
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid border-button-quaternary bg-palette-white px-4 text-xs font-medium text-palette-black shadow-none transition active:scale-98 hocus:bg-palette-white hocus:text-palette-black hocus:opacity-80"
                        href="https://snack.expo.dev/@expo-team-snacks/social-app"
                      >
                        <span className="flex select-none self-center text-inherit leading-none">
                          Try It
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="icon-sm text-palette-gray6"
                          role="img"
                        >
                          <g id="arrow-up-right-outline-icon">
                            <path
                              id="Icon"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 17L17 7M17 7H7M17 7V17"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <img
                      src="/static/home/app-social.webp"
                      className="absolute inset-0"
                      alt="Social media app"
                      loading="lazy"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-x-16 h-1 rounded-sm bg-element opacity-0 max-md-gutters:opacity-100">
                <div className="h-1 w-16 rounded-sm bg-palette-gray8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
