import PerspectiveCard from "@/pages/components/Services/PerspectiveCard"
import { LayersTwo02Icon } from "@expo/styleguide-icons/outline/LayersTwo02Icon"
import { PieChart03Icon } from "@expo/styleguide-icons/outline/PieChart03Icon"
import { BuildIcon } from "@expo/styleguide-icons/custom/BuildIcon"
import { EasSubmitIcon } from "@expo/styleguide-icons/custom/EasSubmitIcon"
import { LineChartUp02Icon } from "@expo/styleguide-icons/outline/LineChartUp02Icon"
import { LifeBuoy01Icon } from "@expo/styleguide-icons/outline/LifeBuoy01Icon"

export default function Services() {
  const services = [
    {
      name: "Build",
      icon: BuildIcon,
      description: "Create builds for your team and for the app stores.",
    },
    {
      name: "Submit",
      icon: EasSubmitIcon,
      description: "Submit apps to the App Store and Google Play store.",
    },
    {
      name: "Update",
      icon: LayersTwo02Icon,
      description: "Get the latest changes to your users in minutes, not days.",
    },
    {
      name: "Insights",
      icon: PieChart03Icon,
      description: "Learn how users use your app as you deploy.",
    },
    {
      name: "On-demand",
      icon: LineChartUp02Icon,
      description: "Pay for the services you use, as you grow.",
    },
    {
      name: "Support",
      icon: LifeBuoy01Icon,
      description: "Get unstuck with help from the Expo team.",
    },
  ]
  return (
    <section className={"dark-theme relative bg-[#1A1D1E] py-24"}>
      <svg
        className="dark-theme absolute inset-0 fill-icon-quaternary"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="servicesPattern"
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
          fill="url(#servicesPattern)"
        ></rect>
      </svg>
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6">
        <h2 className="mb-12 text-center text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-default max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
          Services made for professionals
        </h2>
        <div className="mx-auto grid max-w-[775px] grid-cols-3 gap-6 max-lg-gutters:grid-cols-2 max-sm-gutters:grid-cols-auto-min-1">
          {services.map((service, index) => (
            <PerspectiveCard key={index}>
              <service.icon className="icon-md absolute -bottom-8 -right-8 size-40 text-palette-gray7 opacity-10" />
              <div className="flex flex-col max-sm-gutters:flex-row max-sm-gutters:items-center max-sm-gutters:gap-4">
                <service.icon className="icon-xl mb-4 text-palette-white" />
                <h3 className="relative z-10 mb-4 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                  {service.name}
                </h3>
              </div>
              <p className="relative z-10 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                {service.description}
              </p>
            </PerspectiveCard>
          ))}
        </div>
      </div>
    </section>
  )
}
