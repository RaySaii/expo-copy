import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"

export default function GetStarted() {
  return (
    <section className={"dark-theme bg-[#1A1D1E] py-24"}>
      <div className="relative mx-auto w-full !max-w-[600px] max-w-screen-xl-gutters px-6">
        <h2 className="text-center text-[31px] font-semibold leading-[1.29] tracking-[-0.022rem] text-default max-md-gutters:text-[27px] max-md-gutters:leading-[1.3333] max-sm-gutters:text-[23px] max-sm-gutters:leading-[1.3913]">
          And you’ll get so much more…
        </h2>
        <div className="bg-statement-gradient my-14 flex cursor-default flex-col gap-8 bg-clip-text">
          <h3 className="text-[20px] font-semibold leading-normal tracking-[-0.017rem] text-default max-md-gutters:text-[18px] max-md-gutters:leading-[1.5555] max-sm-gutters:text-[16px] max-sm-gutters:leading-relaxed">
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Organization accounts.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Production-like development server.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Developer tools built in.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Automatic native code configuration.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Use any native code.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Simulator builds.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              File-based routing.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Automatic build submissions.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              App store metadata verification.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Usage-based pricing.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Team credential management.
            </span>
          </h3>
          <p className="text-[16px] font-medium leading-[1.625] tracking-[-0.011rem] text-default">
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Preview updates with a QR code.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Save app store metadata.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Automatic app store credentials management.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Ad-hoc builds.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              End-to-end code signing.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Build logs.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Member roles.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Web dashboards.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Submission logs.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Top-notch universal modules.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Expo Discord community.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              End-to-end testing.
            </span>
          </p>
          <p className="text-[14px] font-medium leading-[1.5715] tracking-[-0.006rem] text-secondary">
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Regular SDK releases.
            </span>{" "}
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Apple silicon builders for iOS.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Automatic version incrementing in CI.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              GitHub Actions-ready.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              Shareable Snack playgrounds.
            </span>
            <span className="transition-colors duration-[250ms] hocus:text-transparent">
              VS Code extension.
            </span>
          </p>
        </div>
        <div className="text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="dark-theme inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-palette-white bg-palette-white px-6 text-base font-medium text-palette-black shadow-xs transition active:scale-98 hocus:bg-palette-gray12"
            href="https://docs.expo.dev"
          >
            <span className="flex select-none self-center text-inherit leading-none">
              Get Started
            </span>
            <ArrowUpRightIcon className="icon-md text-icon-default" />
          </a>
        </div>
      </div>
    </section>
  )
}
