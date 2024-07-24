import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"
import { ChevronDownIcon } from "@expo/styleguide-icons/outline/ChevronDownIcon"
import { GithubIcon } from "@expo/styleguide-icons/custom/GithubIcon"
import { XLogoIcon } from "@expo/styleguide-icons/custom/XLogoIcon"
import { DiscordIcon } from "@expo/styleguide-icons/custom/DiscordIcon"
import { SunSolidIcon } from "@expo/styleguide-icons/solid/SunSolidIcon"

export default function Footer() {
  return (
    <footer className={"border-t border-t-default bg-default"}>
      <div className="relative mx-auto w-full max-w-screen-xl-gutters px-6 pb-20 pt-16 max-md-gutters:pb-10 max-md-gutters:pt-8">
        <nav
          className="grid grid-cols-4 gap-8 max-md-gutters:grid-cols-1 max-md-gutters:gap-0"
          aria-label="Expo Directory"
          role="navigation"
        >
          <div aria-label="Open Navigation Menu">
            <input
              id="footerLinks-Product"
              type="checkbox"
              className="invisible max-md-gutters:flex"
            />
            <label
              htmlFor="footerLinks-Product"
              className="pointer-events-none flex items-center justify-between rounded-md px-3.5 py-2 max-md-gutters:pointer-events-auto max-md-gutters:cursor-pointer max-md-gutters:border max-md-gutters:border-secondary max-md-gutters:px-3.5 max-md-gutters:hocus:bg-subtle"
            >
              <span className="font-medium text-default">Product</span>
              <ChevronDownIcon
                className={
                  "icon-md hidden text-icon-secondary transition-transform duration-300 max-md-gutters:block"
                }
              />
            </label>
            <ul className="list-none max-md-gutters:mt-2 max-md-gutters:hidden">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://www.github.com/expo/expo"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Expo on GitHub
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://github.com/expo/expo/tree/main/packages/%40expo/cli"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Expo CLI on GitHub
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/eas"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    EAS
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://github.com/expo/eas-cli"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    EAS CLI on GitHub
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://snack.expo.dev"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Snack
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/go"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Expo Go
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/orbit"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Expo Orbit
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://github.com/expo/expo"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Star Us on GitHub
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div aria-label="Open Navigation Menu">
            <input
              id="footerLinks-Resources"
              type="checkbox"
              className="invisible max-md-gutters:flex"
            />
            <label
              htmlFor="footerLinks-Resources"
              className="pointer-events-none flex items-center justify-between rounded-md px-3.5 py-2 max-md-gutters:pointer-events-auto max-md-gutters:cursor-pointer max-md-gutters:border max-md-gutters:border-secondary max-md-gutters:px-3.5 max-md-gutters:hocus:bg-subtle"
            >
              <span className="font-medium text-default">Resources</span>
              <ChevronDownIcon
                className={
                  "icon-md hidden text-icon-secondary transition-transform duration-300 max-md-gutters:block"
                }
              />
            </label>
            <ul className="list-none max-md-gutters:mt-2 max-md-gutters:hidden">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://docs.expo.dev/"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Docs
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="https://jobs.expo.dev"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Job Board
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  referrerPolicy="origin"
                  href="https://chat.expo.dev"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Join Discord
                    <ArrowUpRightIcon
                      className={"icon-sm text-icon-secondary"}
                    />
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/changelog"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Changelog
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/support"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Support
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div aria-label="Open Navigation Menu">
            <input
              id="footerLinks-Company"
              type="checkbox"
              className="invisible max-md-gutters:flex"
            />
            <label
              htmlFor="footerLinks-Company"
              className="pointer-events-none flex items-center justify-between rounded-md px-3.5 py-2 max-md-gutters:pointer-events-auto max-md-gutters:cursor-pointer max-md-gutters:border max-md-gutters:border-secondary max-md-gutters:px-3.5 max-md-gutters:hocus:bg-subtle"
            >
              <span className="font-medium text-default">Company</span>
              <ChevronDownIcon
                className={
                  "icon-md hidden text-icon-secondary transition-transform duration-300 max-md-gutters:block"
                }
              />
            </label>
            <ul className="list-none max-md-gutters:mt-2 max-md-gutters:hidden">
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/home"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Home
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/pricing"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Pricing
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/about"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    About
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/careers"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Work at Expo
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Blog
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/mailing-list/signup"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Newsletter
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div aria-label="Open Navigation Menu">
            <input
              id="footerLinks-Legal"
              type="checkbox"
              className="invisible max-md-gutters:flex"
            />
            <label
              htmlFor="footerLinks-Legal"
              className="pointer-events-none flex items-center justify-between rounded-md px-3.5 py-2 max-md-gutters:pointer-events-auto max-md-gutters:cursor-pointer max-md-gutters:border max-md-gutters:border-secondary max-md-gutters:px-3.5 max-md-gutters:hocus:bg-subtle"
            >
              <span className="font-medium text-default">Legal</span>
              <ChevronDownIcon
                className={
                  "icon-md hidden text-icon-secondary transition-transform duration-300 max-md-gutters:block"
                }
              />
            </label>
            <ul className="list-none max-md-gutters:mt-2 max-md-gutters:hidden">
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/terms"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Terms of service
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/eas/fair-use"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Fair use policy
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/privacy"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Privacy policy
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/privacy-explained"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Privacy explained
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-3.5 py-2 text-link transition-colors hocus:bg-subtle hocus:opacity-80"
                  href="/guidelines"
                >
                  <p className="inline-flex items-center gap-1 text-[16px] font-normal leading-[1.625] tracking-[-0.011rem] text-secondary">
                    Guidelines
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="mt-20 flex items-center justify-between gap-6 max-md-gutters:mt-8 max-md-gutters:flex-wrap-reverse">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <a href="/">
                <svg
                  viewBox="0 0 71 20"
                  fill="none"
                  role="img"
                  className="icon-lg min-w-[84px] text-icon-default"
                >
                  <path
                    d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="ml-4 mr-2 h-7 w-px bg-palette-gray5"></div>
              <div className="flex gap-0.5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-1.5 text-3xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
                  type="button"
                  title="GitHub"
                  href="https://www.github.com/expo/expo"
                >
                  <span className="flex select-none self-center text-inherit leading-none">
                    <div className="transition-opacity">
                      <GithubIcon className={"icon-md text-icon-default"} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-1.5 text-3xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
                  type="button"
                  title="X"
                  href="https://www.twitter.com/expo"
                >
                  <span className="flex select-none self-center text-inherit leading-none">
                    <div className="transition-opacity">
                      <XLogoIcon className={"icon-md text-icon-default"} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-1.5 text-3xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
                  type="button"
                  title="Discord"
                  href="https://chat.expo.dev"
                >
                  <span className="flex select-none self-center text-inherit leading-none">
                    <div className="transition-opacity">
                      <DiscordIcon className={"icon-md text-icon-default"} />
                    </div>
                  </span>
                </a>
              </div>
            </div>
            <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-secondary">
              Copyright © &nbsp;2024&nbsp; 650 Industries, Inc. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4 max-md-gutters:justify-between max-sm-gutters:flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
              type="button"
              aria-label="All Systems Operational"
              href="https://status.expo.dev"
            >
              <span className="mr-1 size-2 rounded-full bg-palette-green10"></span>
              <span className="flex select-none self-center text-inherit leading-none">
                <div className="transition-opacity">
                  All Systems Operational
                </div>
              </span>
              <ArrowUpRightIcon
                className={"icon-sm text-button-quaternary-icon"}
              />
            </a>
            <button
              className="relative flex h-9 min-h-[36px] transform-none cursor-pointer items-center justify-between gap-2 truncate whitespace-nowrap rounded-md border border-solid border-button-secondary bg-button-secondary px-3 text-xs font-medium text-button-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover"
              type="button"
              aria-label="Theme selector"
              role="combobox"
              aria-controls="radix-:R5a6m:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
            >
              <span className="flex self-center text-inherit leading-none">
                <div className="transition-opacity">
                  <span aria-label="light">
                    <span className="flex items-center gap-2 text-[14px] !font-normal font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                      <span aria-hidden="true">
                        <SunSolidIcon className={"icon-sm text-icon-default"} />
                      </span>
                      Light
                    </span>
                  </span>
                </div>
              </span>
              <ChevronDownIcon className={"icon-sm text-icon-secondary"} />
            </button>
          </div>
        </section>
      </div>
    </footer>
  )
}
