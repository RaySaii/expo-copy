import { ArrowUpRightIcon } from "@expo/styleguide-icons/outline/ArrowUpRightIcon"

export default function ToolPopover() {
  return (
    <>
      <div className={"absolute -top-3 left-0 h-3 w-[560px]"}></div>
      <div className={"grid w-[560px] grid-cols-2 gap-x-4 gap-y-2 p-3"}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="#"
        >
          <div
            className={
              "relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover"
            }
          >
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    iOS Client
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                iOS client for viewing projects
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="https://play.google.com/store/apps/details?id=host.exp.exponent&amp;referrer=www"
        >
          <div
            className={
              "relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover"
            }
          >
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Android Client
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                Android client for viewing projects
              </p>
            </div>
          </div>
        </a>
        <a
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="/tools#cli"
        >
          <div
            className={
              "relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover"
            }
          >
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    CLI
                  </p>
                </div>
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                Command-line interface for building projects called Expo CLI
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="https://snack.expo.dev/"
        >
          <div className="relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover">
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Snack
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                Expo in the browser
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          referrerPolicy="origin"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="https://chat.expo.dev"
        >
          <div className="relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover">
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Discord
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                Community chat for Expo developers
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="https://github.com/expo/expo"
        >
          <div className="relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover">
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Expo on GitHub
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                GitHub repo for the Expo platform
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="https://github.com/expo/expo/tree/main/packages/@expo/cli"
        >
          <div className="relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover">
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Expo CLI on GitHub
                  </p>
                </div>
                <ArrowUpRightIcon className="icon-sm text-icon-secondary" />
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                GitHub repo for Expo CLI
              </p>
            </div>
          </div>
        </a>
        <a
          className="cursor-pointer decoration-0 transition-opacity hocus:opacity-80"
          href="/orbit"
        >
          <div className="relative z-40 flex h-full cursor-pointer select-none items-center justify-between rounded-sm px-3 py-2 outline-0 hocus:bg-hover">
            <div className="flex flex-1 flex-col gap-0.5 self-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-normal leading-[1.5715] tracking-[-0.006rem] text-default">
                    Orbit
                  </p>
                </div>
              </div>
              <p className="text-[13px] font-normal !leading-[18px] leading-[1.6154] tracking-[-0.003rem] text-tertiary">
                Orbit simplifies the process of installing and running mobile
                apps on macOS
              </p>
            </div>
          </div>
        </a>
      </div>
      <span
        style={{
          position: "absolute",
          top: 0,
          transformOrigin: "center 0px",
          transform: "rotate(180deg)",
          left: "279px",
        }}
      >
        <div
          className={
            "height-[5px] relative -top-1 size-2.5 w-[10px] rotate-45 border-b border-r border-default bg-default"
          }
        ></div>
      </span>
    </>
  )
}
