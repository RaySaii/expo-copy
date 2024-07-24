import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"
import { DiscordIcon } from "@expo/styleguide-icons/custom/DiscordIcon"
import { BuildNumberIcon } from "@expo/styleguide-icons/custom/BuildNumberIcon"
import { ArrowRightIcon } from "@expo/styleguide-icons/outline/ArrowRightIcon"
import { Announcement03Icon } from "@expo/styleguide-icons/outline/Announcement03Icon"
import { Announcement03SolidIcon } from "@expo/styleguide-icons/solid/Announcement03SolidIcon"
import usePerspective from "@/pages/components/usePerspective"
import { mergeClasses } from "@expo/styleguide"

export default function More() {
  const items = [
    {
      name: "Read the docs",
      icon: (
        <svg
          width="38"
          height="29"
          viewBox="0 0 38 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-2xl m-8 text-default"
        >
          <path
            d="M35.2997 28.1158H17.0503V5.41357H35.2997C36.2587 5.41357 37.0361 6.19097 37.0361 7.14994V26.3794C37.0361 27.3384 36.2587 28.1158 35.2997 28.1158Z"
            fill="var(--expo-theme-text-default)"
          ></path>
          <path
            d="M1.96566 28.1158H18.1238V5.41357H1.96566C1.00669 5.41357 0.229296 6.19097 0.229296 7.14994V26.3794C0.229296 27.3384 1.00669 28.1158 1.96566 28.1158Z"
            fill="var(--expo-theme-text-default)"
          ></path>
          <path
            d="M17.7134 5.0019V26.1359C14.7522 23.2061 4.00168 23.7112 4.00168 23.7112V0.34836C4.00168 0.34836 13.3913 -1.22351 17.7134 5.0019Z"
            fill="var(--expo-theme-icon-quaternary)"
          ></path>
          <path
            d="M19.5994 5.0019V26.1359C22.5606 23.2061 33.3111 23.7112 33.3111 23.7112V0.34836C33.3111 0.34836 23.9215 -1.22351 19.5994 5.0019Z"
            fill="var(--expo-theme-icon-quaternary)"
          ></path>
        </svg>
      ),
      arrow: <ArrowUpRightIcon className="icon-md ml-auto text-icon-default" />,
    },
    {
      name: "Join the community",
      icon: <DiscordIcon className="icon-2xl m-8 text-default" />,
      arrow: <ArrowUpRightIcon className="icon-md ml-auto text-icon-default" />,
    },
    {
      name: "Use our tools",
      icon: <BuildNumberIcon className="icon-2xl m-8 text-default" />,
      arrow: <ArrowRightIcon className="icon-md ml-auto text-icon-default" />,
    },
    {
      name: "Read our blog",
      icon: <Announcement03Icon className="icon-2xl m-8 text-default" />,
      arrow: <ArrowRightIcon className="icon-md ml-auto text-icon-default" />,
    },
  ]
  const { onMouseEnter, onMouseMove, onMouseLeave, className } =
    usePerspective()

  return (
    <section className={"border-t border-default bg-subtle py-24"}>
      <div className="relative mx-auto w-full !max-w-screen-lg-gutters max-w-screen-xl-gutters px-6">
        <h2 className="mb-8 text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-default max-md-gutters:text-center max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
          Want to learn more?
        </h2>
        <div className="grid grid-cols-4 gap-10 max-lg-gutters:grid-cols-auto-min-2 max-lg-gutters:justify-center max-sm-gutters:grid-cols-auto-min-1">
          {items.map((item, index) => (
            <div key={index} className={"[perspective:650px]"}>
              <div
                className={mergeClasses("inline-block", className)}
                onMouseEnter={onMouseEnter}
                onMouseMove={(ev) => {
                  onMouseMove(ev)
                  ev.currentTarget.style.setProperty("--scale", "1.025")
                }}
                onMouseLeave={onMouseLeave}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.expo.dev"
                >
                  <div className="flex w-56 flex-col items-center overflow-hidden rounded-md border border-secondary bg-default shadow-xs">
                    {item.icon}
                    <div className="flex w-full items-center border-t border-t-default bg-subtle px-4 py-2 text-secondary">
                      {item.name}
                      {item.arrow}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
