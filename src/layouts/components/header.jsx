import { A } from "@solidjs/router"

function Header({ setShowOption }) {
  return (
    <header class="flex justify-between">
      <h1>
        <A href="/" class="w-0 animate-[1s_slideIn_1s_cubic-bezier(0,0,0.3,1)_forwards] inline-grid overflow-hidden">
          IK62
        </A>
        <span class="animate-[1s_fadeOut_1s_cubic-bezier(0.8,0,1,1)_forwards]">|</span>
      </h1>
      <div
        class={
          'w-5 h-5 bg-[var(--text-color)] flex justify-center items-center [clip-path:circle(50%_at_50%_50%)] animate-[1s_showOption_1s_ease-in-out_forwards] transition-all cursor-pointer'
        }
        onClick={() => {
          setShowOption(true)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3 text-[var(--background-color)]"
        >
          <path
            fillRule="evenodd"
            d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </header>
  )
}

export default Header
