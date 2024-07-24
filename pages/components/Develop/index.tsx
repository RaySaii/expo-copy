import { TerminalBrowserDuotoneIcon } from "@expo/styleguide-icons/duotone/TerminalBrowserDuotoneIcon"
import { Map01Icon } from "@expo/styleguide-icons/outline/Map01Icon"
import { Camera02Icon } from "@expo/styleguide-icons/outline/Camera02Icon"
import { Image01Icon } from "@expo/styleguide-icons/outline/Image01Icon"
import { Compass03Icon } from "@expo/styleguide-icons/outline/Compass03Icon"
import { motion } from "framer-motion"
import MotionDot from "@/pages/components/MotionDot"

export default function Develop() {
  return (
    <section className={"pt-20"}>
      <div className={"relative mx-auto w-full max-w-screen-xl-gutters px-6"}>
        <div>
          <div className="flex justify-center">
            <div
              className={
                "relative flex size-56 items-center justify-center self-center max-lg-gutters:size-48"
              }
            >
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-blue3 opacity-40"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-blue3 opacity-0"></div>
              <div
                className={
                  "relative z-20 flex size-[168px] flex-col items-center justify-center overflow-hidden rounded-full bg-palette-blue3 max-lg-gutters:size-36"
                }
              >
                <div className="flex flex-col items-center">
                  <TerminalBrowserDuotoneIcon className="icon-xl text-palette-blue10" />
                  <h2 className="relative z-10 text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-palette-blue10 max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
                    Develop
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-40 max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10">
            <div
              className={
                "relative mt-12 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12"
              }
            >
              <MotionDot />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Get started
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Initialize a new project or bring an existing React Native
                project.
              </p>
              <div className="flex justify-center">
                <img
                  src="/static/home/cli-terminal.png"
                  alt="Expo CLI"
                  className="asset-shadow pointer-events-none select-none"
                  loading="lazy"
                  width="1029"
                  height="313"
                />
              </div>
            </div>
            <div className="relative mt-48 prose-em:-left-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
              <MotionDot />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                File-based routing, TypeScript ready
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Create stack and modal screens with minimal boilerplate using
                your filesystem. Feel confident with TypeScript.
              </p>
              <div className="flex justify-center">
                <img
                  src="/static/home/editor-router.png"
                  alt="File-based routing"
                  className="asset-shadow pointer-events-none !w-full select-none"
                  loading="lazy"
                  width="1047"
                  height="823"
                />
              </div>
            </div>
            <div className="relative -mt-80 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:-mt-64 max-lg-gutters:prose-em:-left-12">
              <MotionDot />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Get going, then keep going with fast refresh
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Run your project on your own device with Expo Go. See your app
                update in milliseconds as you make changes.
              </p>
              <div className="flex justify-center">
                <picture>
                  <img
                    className="asset-shadow hidden w-full max-w-[522px] cursor-default select-none dark:block"
                    src="/static/home/hello-world-dark.png"
                    alt="Expo workflow"
                    width="1010"
                    height="643"
                    loading="lazy"
                  />
                  <img
                    className="asset-shadow w-full max-w-[522px] cursor-default select-none dark:hidden"
                    src="/static/home/hello-world.png"
                    alt="Expo workflow"
                    width="1010"
                    height="643"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className="absolute bottom-0 left-[calc(50%-0.5px)] top-[196px] z-[1] w-px bg-palette-blue7 max-lg-gutters:left-8 max-lg-gutters:top-[262px]"></div>
          </div>
          <div className="mt-24 flex flex-col max-lg-gutters:mt-16 max-lg-gutters:pl-10">
            <div className="w-[calc(50%-80px)] max-lg-gutters:w-full">
              <div className="relative prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
                <MotionDot />
                <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                  Use any library, SDK, or write your own native code
                </h3>
                <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                  You’ll never be limited by Expo. Write native code. Access
                  every device API. Write anything, then run it everywhere.
                </p>
                <div className="flex justify-center"></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="framer-scroll mx-[-7.5%] -mb-4 flex gap-16 overflow-x-hidden overflow-y-hidden pb-8 pt-4 max-xl-gutters:-mx-6 max-xl-gutters:overflow-x-auto max-xl-gutters:px-6 max-lg-gutters:max-w-[100vw] max-lg-gutters:overflow-x-auto max-md-gutters:-ml-16 max-md-gutters:w-screen max-md-gutters:pl-16">
                <div className="flex min-w-[250px] flex-col justify-between gap-5">
                  <img
                    src="/static/home/api-maps.webp"
                    alt="Maps API showcase"
                    className="asset-shadow pointer-events-none select-none"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 mt-3 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-solid border-secondary bg-button-secondary px-4 text-xs font-medium text-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
                    href="https://docs.expo.dev/versions/latest/sdk/map-view/"
                  >
                    <Map01Icon className="icon-sm text-icon-tertiary" />
                    <span className="flex select-none self-center text-inherit leading-none">
                      Maps
                    </span>
                  </a>
                </div>
                <div className="flex min-w-[250px] flex-col justify-between gap-5">
                  <img
                    src="/static/home/api-camera.webp"
                    alt="Camera API showcase"
                    className="asset-shadow pointer-events-none select-none"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 mt-3 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-solid border-secondary bg-button-secondary px-4 text-xs font-medium text-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
                    href="https://docs.expo.dev/versions/latest/sdk/camera/"
                  >
                    <Camera02Icon className="icon-sm text-icon-tertiary" />
                    <span className="flex select-none self-center text-inherit leading-none">
                      Camera
                    </span>
                  </a>
                </div>
                <div className="flex min-w-[250px] flex-col justify-between gap-5">
                  <img
                    src="/static/home/api-image.webp"
                    alt="Image API showcase"
                    className="asset-shadow pointer-events-none select-none"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 mt-3 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-solid border-secondary bg-button-secondary px-4 text-xs font-medium text-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
                    href="https://docs.expo.dev/versions/latest/sdk/image/"
                  >
                    <Image01Icon className="icon-sm text-icon-tertiary" />
                    <span className="flex select-none self-center text-inherit leading-none">
                      Image
                    </span>
                  </a>
                </div>
                <div className="flex min-w-[250px] flex-col justify-between gap-5">
                  <img
                    src="/static/home/api-navigation.webp"
                    alt="Navigation API showcase"
                    className="asset-shadow pointer-events-none select-none"
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 mt-3 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-solid border-secondary bg-button-secondary px-4 text-xs font-medium text-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
                    href="https://docs.expo.dev/routing/introduction/"
                  >
                    <Compass03Icon className="icon-sm text-icon-tertiary" />
                    <span className="flex select-none self-center text-inherit leading-none">
                      Navigation
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={
                  "absolute inset-x-16 -bottom-4 h-1 rounded-sm bg-element opacity-0 max-xl-gutters:inset-x-[33vw] max-xl-gutters:opacity-100 max-md-gutters:inset-x-16 max-md-gutters:opacity-100"
                }
              >
                <div className="h-1 w-16 rounded-sm bg-palette-gray8"></div>
              </div>
            </div>
            <div
              className={
                "absolute bottom-0 left-[calc(50%-0.5px)] z-[1] w-px bg-palette-blue7 max-lg-gutters:left-8 max-lg-gutters:top-[262px]"
              }
            ></div>
          </div>
          <div
            className={
              "max-lg-gutters:bg-default-fade h-40 max-lg-gutters:relative max-lg-gutters:z-10 max-lg-gutters:h-32"
            }
          ></div>
        </div>
      </div>
    </section>
  )
}
