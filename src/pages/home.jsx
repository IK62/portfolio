import ChangingText from '../components/changingText'

function Home() {
  const currentWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )

  return (
    <main>
      <div class="h-[calc(100svh-1.75rem)] sm:h-[calc(100svh-2.25rem)] xl:h-[calc(100svh-2.75rem)] flex items-end">
        <p class="flex flex-col text-xs/3 sm:text-base/4 md:text-xl/5 xl:text-2xl/6 2xl:text-3xl/7">
          <span>BAKING</span>
          <span>IMPRESSIVE</span>
          <span class="rounded-lg xl:p-1 p-[0.20rem] bg-[var(--text-color)] text-[var(--background-color)] w-fit text-base/4 sm:text-xl/5 md:text-3xl/6 xl:text-4xl/8 2xl:text-5xl/10">
            <ChangingText content={['CODE', 'ART', 'STYLE']} />
          </span>
        </p>
      </div>
      {currentWidth > 1024 ? <ul>

      </ul> : <ul>
        
        </ul>}
    </main>
  )
}

export default Home
