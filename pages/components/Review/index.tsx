import { StoplightDuotoneIcon } from "@expo/styleguide-icons/custom/StoplightDuotoneIcon"
import MotionDot from "@/pages/components/MotionDot"

export default function Review() {
  return (
    <section>
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6">
        <div>
          <div className="flex justify-center">
            <div className="relative flex size-56 items-center justify-center self-center max-lg-gutters:size-48">
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-orange3 opacity-40"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full bg-palette-orange3 opacity-0"></div>
              <div className="relative z-20 flex size-[168px] flex-col items-center justify-center overflow-hidden rounded-full bg-palette-orange3 max-lg-gutters:size-36">
                <div className="flex flex-col items-center">
                  <StoplightDuotoneIcon className="icon-xl relative z-10 text-palette-orange10" />
                  <h2 className="relative z-10 text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] text-palette-orange10 max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263]">
                    Review
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-40 max-lg-gutters:mt-8 max-lg-gutters:grid-cols-auto-min-1 max-lg-gutters:gap-y-16 max-lg-gutters:pl-10">
            <div className="relative mt-12 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"review"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Invite your team
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                With adjustable roles, your whole team can contribute, test, and
                view the state of your deployments.
              </p>
              <div className="flex justify-center">
                <svg
                  viewBox="0 0 515 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 inline-block w-full max-w-[522px]"
                >
                  <rect
                    y="14"
                    width="515"
                    height="131"
                    rx="12"
                    className="fill-palette-orange3"
                  ></rect>
                  <image
                    href="/static/home/review-team-avatars.webp"
                    x="164"
                    width="184"
                    height="160"
                  ></image>
                </svg>
              </div>
            </div>
            <div className="relative mt-44 prose-em:-left-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"review"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Upgrade your PR reviews
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Commit, push to GitHub, and generate a QR code. That’s all
                that’s needed to let your team review a feature before merging.
              </p>
              <div className="flex justify-center">
                <picture>
                  <img
                    className="asset-sm-shadow hidden w-full max-w-[522px] cursor-default select-none dark:block"
                    src="/static/home/review-github-dark.png"
                    alt="Expo workflow"
                    width="1046"
                    height="689"
                    loading="lazy"
                  />
                  <img
                    className="asset-sm-shadow w-full max-w-[522px] cursor-default select-none dark:hidden"
                    src="/static/home/review-github.png"
                    alt="Expo workflow"
                    width="1046"
                    height="689"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div className="relative -mt-48 prose-em:-right-24 prose-em:top-1 max-lg-gutters:!mt-4 max-lg-gutters:-mt-32 max-lg-gutters:prose-em:-left-12">
              <MotionDot type={"review"} />
              <h3 className="mb-1 text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
                Run end-to-end tests
              </h3>
              <p className="mb-6 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                Use Detox to run automated end-to-end tests on EAS.
              </p>
              <div className="flex justify-center">
                <img
                  src="/static/home/review-e2e.webp"
                  alt="Fast refresh"
                  width="1029"
                  height="377"
                  className="asset-shadow pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-[calc(50%-0.5px)] top-[196px] z-[1] w-px bg-palette-orange7 max-lg-gutters:left-8 max-lg-gutters:top-[262px]"></div>
          </div>
          <div className="max-lg-gutters:bg-default-fade h-40 max-lg-gutters:relative max-lg-gutters:z-10 max-lg-gutters:h-32"></div>
        </div>
      </div>
    </section>
  )
}
