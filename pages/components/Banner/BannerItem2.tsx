import { motion } from "framer-motion"

export default function BannerItem2() {
  return (
    <>
      <div
        className={
          "absolute -top-10 flex h-[460px] w-[380px] max-w-[380px] rounded-3xl bg-palette-orange3"
        }
      ></div>
      <picture className="pointer-events-none absolute left-[5%] top-[10%] max-w-[440px] cursor-grab max-xl-gutters:max-w-screen-sm">
        <img
          className="hidden dark:block"
          src="/static/home/review-github-dark.png"
          alt="Expo workflow"
          width="1046"
          height="689"
          loading="lazy"
        />
        <img
          className="dark:hidden"
          src="/static/home/review-github.png"
          alt="Expo workflow"
          width="1046"
          height="689"
          loading="lazy"
        />
      </picture>
      <img
        className="asset-shadow pointer-events-none absolute right-[12.5%] top-[-4%] z-10 max-h-[420px] cursor-grab"
        src="/static/home/hero-review.webp"
        alt="Review"
      />
    </>
  )
}
