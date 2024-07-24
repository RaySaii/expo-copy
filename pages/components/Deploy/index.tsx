import { Rocket01DuotoneIcon } from "@expo/styleguide-icons/duotone/Rocket01DuotoneIcon"
import MotionDot from "@/pages/components/MotionDot"

export default function Deploy() {
  return (
    <section className={"pb-4"}>
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6">
        <div>
          <div className="flex justify-center">
            <div className="relative flex size-56 items-center justify-center self-center max-lg-gutters:size-48">
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-green3 opacity-40"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-green3 opacity-0"></div>
              <div className="relative z-20 flex size-[168px] flex-col items-center justify-center overflow-hidden rounded-full bg-palette-green3 max-lg-gutters:size-36">
                <div className="flex flex-col items-center">
                  <Rocket01DuotoneIcon className="icon-xl relative z-10 text-palette-green10" />
                  <h2 className="relative z-10 text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-palette-green10 max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
                    Deploy
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-40 max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10">
            <div className="relative mt-12 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"deploy"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Create and submit app store-ready builds
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Kick off a build. Then we’ll submit it to the App Store and Play
                Store automatically if you like.
              </p>
              <div className="flex justify-center">
                <picture>
                  <img
                    className="asset-sm-shadow hidden w-full max-w-[516px] cursor-default select-none dark:block"
                    src="/static/home/deploy-builds-dark.png"
                    alt="Expo Dashboard"
                    width="516"
                    height="244"
                    loading="lazy"
                  />
                  <img
                    className="asset-sm-shadow w-full max-w-[516px] cursor-default select-none dark:hidden"
                    src="/static/home/deploy-builds.png"
                    alt="Expo Dashboard"
                    width="516"
                    height="244"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className="relative mt-40 prose-em:-left-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"deploy"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Publish bug fixes in minutes
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Found a typo on your home screen? Don’t sweat: fix it, then
                publish an update that your users will receive the next time
                they launch your app.{" "}
              </p>
              <div className="flex justify-center">
                <img
                  src="/static/home/deploy-update.webp"
                  width="1029"
                  height="377"
                  alt="GitHub bot"
                  className="asset-shadow pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative mt-16 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:mt-8 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"deploy"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Dashboards to keep your team on track
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                We keep track of all of your builds, submissions, and
                deployments, organized on web dashboards for your whole team.
              </p>
              <div className="flex justify-center">
                <picture>
                  <img
                    className="asset-sm-shadow hidden w-full max-w-[516px] cursor-default select-none dark:block"
                    src="/static/home/deploy-dashboard-dark.webp"
                    alt="Expo Dashboard"
                    width="1034"
                    height="614"
                    loading="lazy"
                  />
                  <img
                    className="asset-sm-shadow w-full max-w-[516px] cursor-default select-none dark:hidden"
                    src="/static/home/deploy-dashboard.webp"
                    alt="Expo Dashboard"
                    width="1034"
                    height="614"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className="relative mt-48 prose-em:-left-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:mt-36 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"deploy"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Iterate with confidence
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                With flexible deployment patterns and the ability to rollback in
                seconds, you can iterate faster than ever before.
              </p>
              <div className="flex justify-center">
                <svg
                  viewBox="0 0 522 157"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[522px]"
                >
                  <rect
                    y="0.740723"
                    width="522"
                    height="155.424"
                    rx="12"
                    className="fill-palette-gray2"
                  ></rect>
                  <path
                    d="M202.094 91.3591C224.672 91.3591 218.401 125.924 239.865 125.924C257.035 125.924 262.35 125.924 262.861 125.924H278.053C277.681 125.924 281.788 125.924 301.189 125.924C325.441 125.924 315.127 91.3591 345.093 91.3591"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M150.42 58.5345C181.212 58.5345 166.878 37.636 206.274 37.636"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M150.42 58.5614C168.224 58.5614 160.559 90.9705 179.529 90.9705"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M57.5938 37.1641C100.232 37.1641 99.6022 58.8751 127.912 58.8751"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M58.3809 37.1641C92.9572 37.164 74.5741 92.2309 111.68 91.2387H168.702H378.909H480.268"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M46.875 37.28H184.956H304.895H480.268"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M367.988 91.4343C385.796 91.4343 366.304 37.4106 390.007 37.4106"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <path
                    d="M435.127 91.1877C417.319 91.1877 436.811 37.1641 413.108 37.1641"
                    stroke="#889096"
                    stroke-width="1.7145"
                  ></path>
                  <circle
                    cx="46.8749"
                    cy="37.2801"
                    r="11.2852"
                    className="fill-palette-blue9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="119.728"
                    cy="91.4542"
                    r="11.2852"
                    className="fill-palette-green9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="190.371"
                    cy="91.4542"
                    r="11.2852"
                    className="fill-palette-green9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="356.974"
                    cy="91.4542"
                    r="11.2852"
                    className="fill-palette-green9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="445.926"
                    cy="91.4542"
                    r="11.2852"
                    className="fill-palette-green9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="251.43"
                    cy="124.612"
                    r="11.2852"
                    className="fill-palette-orange8 dark:fill-palette-orange10"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="289.724"
                    cy="124.612"
                    r="11.2852"
                    className="fill-palette-orange8 dark:fill-palette-orange10"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="139.615"
                    cy="58.2955"
                    r="11.2852"
                    className="fill-palette-red9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="401.81"
                    cy="37.2801"
                    r="11.2852"
                    className="fill-palette-blue9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                  <circle
                    cx="216.328"
                    cy="37.2801"
                    r="11.2852"
                    className="fill-palette-blue9"
                    stroke="#11181C"
                    stroke-width="1.7145"
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-[calc(50%-0.5px)] top-[196px] z-[1] w-px bg-palette-green7 max-lg-gutters:left-8 max-lg-gutters:top-[262px]"></div>
          </div>
          <div className="max-lg-gutters:bg-default-fade bg-default-fade relative z-10 h-40 max-lg-gutters:relative max-lg-gutters:z-10 max-lg-gutters:h-32"></div>
        </div>
      </div>
    </section>
  )
}
