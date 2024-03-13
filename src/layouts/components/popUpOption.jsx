import RouteButtons from './routeButtons'

function PopUpOption({ showOption, setShowOption }) {
  return (
    <div
      class={
        'font-["BespokeSerif"] fixed flex flex-col justify-between top-0 left-0 w-screen h-screen bg-[var(--text-color)] text-[var(--background-color)] transition-opacity duration-500 p-[inherit] ' +
        (showOption() ? 'opacity-100 z-10' : 'opacity-0 -z-10')
      }
    >
      <div class="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowOption(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="flex flex-col gap-4">
        <RouteButtons
          text={'HOME'}
          showOption={() => showOption()}
          route={'/'}
        />
        <RouteButtons
          text={'WORK'}
          showOption={() => showOption()}
          route={'/work'}
        />
        <RouteButtons
          text={'ABOUT'}
          showOption={() => showOption()}
          route={'/about'}
        />
      </div>
      <footer class="flex justify-between items-end">
        <h2 class="text-[0.25rem] sm:text-[0.35rem] lg:text-[0.5rem]">
          © all right reserved
        </h2>
        <h3 class="text-[0.25rem] sm:text-[0.35rem] lg:text-[0.5rem]">
          Est. 2024
        </h3>
      </footer>
    </div>
  )
}

export default PopUpOption
