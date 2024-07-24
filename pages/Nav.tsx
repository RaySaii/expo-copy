import { WordMarkLogo } from "@expo/styleguide"
import { SearchSmIcon } from "@expo/styleguide-icons/outline/SearchSmIcon"
import * as Popover from "@radix-ui/react-popover"
import { useState } from "react"
import { useDebounce } from "ahooks"
import ToolPopover from "@/pages/components/ToolPopover"
import { Menu01Icon } from "@expo/styleguide-icons/outline/Menu01Icon"
import { ChevronDownIcon } from "@expo/styleguide-icons/outline/ChevronDownIcon"
import { Star01Icon } from "@expo/styleguide-icons/outline/Star01Icon"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const debouncedOpen = useDebounce(open, {
    wait: 200,
  })

  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }

  return (
    <nav>
      <div
        className={
          "sticky top-0 z-20 grid h-15 grid-cols-[1fr_auto] items-center gap-4 border-b border-default bg-default px-4"
        }
      >
        <button
          className="mt-px flex cursor-pointer max-md-gutters:mt-0"
          type="button"
          aria-label="Navigate to home"
        >
          <WordMarkLogo className="w-[74px] text-default" />
        </button>
        <div
          className={
            "grid grid-flow-col items-center gap-2 max-lg-gutters:hidden"
          }
        >
          <button
            className="cmdk-trigger inline-flex h-9 min-h-[40px] min-w-[226px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-md border border-solid border-default bg-default px-4 pl-2.5 pr-3 text-xs font-medium text-button-secondary shadow-xs transition active:scale-98 hocus:bg-button-secondary-hover max-xl-gutters:min-w-[180px]"
            type="button"
          >
            <SearchSmIcon />
            <span className="flex self-center text-inherit leading-none">
              <p className="text-xs font-normal leading-normal text-secondary">
                Search
              </p>
            </span>
            <div className={"ml-auto max-md-gutters:hidden"}>
              <kbd className="!h-5 !leading-[19px]">Ctrl</kbd>{" "}
              <kbd className="!h-5 !leading-[19px]">K</kbd>
            </div>
          </button>
          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href="https://docs.expo.dev"
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>Docs</div>
            </span>
          </a>
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger
              className={"outline-none"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
                type="button"
                key={"tool"}
                href={"#"}
              >
                <span className="flex select-none self-center text-inherit leading-none">
                  <div className={"transition-opacity"}>Tools</div>
                </span>
                <ChevronDownIcon className="icon-sm text-icon-secondary" />
              </a>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={7}
                className={
                  "flex flex-col gap-0.5 rounded-lg border border-default bg-default p-1 shadow-md outline-none will-change-[opacity,transform]"
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ToolPopover />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href={"#"}
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>EAS</div>
            </span>
          </a>
          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href={"#"}
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>Pricing</div>
            </span>
          </a>
          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href={"#"}
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>Careers</div>
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 pl-3 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href="https://github.com/expo/expo"
          >
            <Star01Icon className={"icon-sm text-button-quaternary-icon"} />
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>
                <span className="pr-1 max-xl-gutters:hidden">Star Us on</span>{" "}
                GitHub
              </div>
            </span>
          </a>
          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-palette-gray12 bg-palette-gray12 px-4 text-xs font-medium text-palette-gray1 shadow-none transition active:scale-98 hocus:bg-palette-gray12 hocus:opacity-80"
            type="button"
            href={"#"}
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>Sign Up</div>
            </span>
          </a>
          <a
            className="relative inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-4 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover"
            type="button"
            href={"#"}
          >
            <span className="flex select-none self-center text-inherit leading-none">
              <div className={"transition-opacity"}>Log In</div>
            </span>
          </a>
        </div>
        <button
          className="relative hidden h-9 w-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-solid border-button-quaternary bg-button-quaternary px-0 text-xs font-medium text-button-quaternary shadow-none transition active:scale-98 hocus:bg-button-quaternary-hover max-lg-gutters:flex"
          type="button"
          aria-label="Open menu"
        >
          <Menu01Icon className={"icon-md text-icon-default"} />
        </button>
      </div>
    </nav>
  )
}
