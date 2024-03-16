function CarouselButtons({ toRight, increment, decrement }) {
  return (
    <div
      class={
        'absolute z-10 h-4 min-[450px]:h-8 lg:h-12 flex items-center backdrop-blur-md opacity-50 bg-zinc-200 ' +
        (toRight
          ? 'right-0 [clip-path:polygon(25%_0%,100%_0%,100%_100%,25%_100%,0%_50%)]'
          : 'left-0 [clip-path:polygon(0%_0%,75%_0%,100%_50%,75%_100%,0%_100%)]')
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={
          'w-2 h-2 min-[450px]:h-4 min-[450px]:w-4 lg:w-6 lg:h-6 stroke-[var(--text-color)]' +
          (toRight ? ' rotate-180' : '')
        }
        onClick={toRight ? () => increment() : () => decrement()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  )
}

export default CarouselButtons
