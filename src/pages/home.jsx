import ChangingText from '../components/changingText'
import works from '../assets/works.json'
import { For } from 'solid-js'
import { useNavigate, useParams } from '@solidjs/router'

function Home() {
  const currentWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )

  return (
    <main class="flex flex-col gap-8">
      <div class="headerToBottomHeight [--heightToSubstract:1.75rem] sm:[--heightToSubstract:2.25rem] xl:[--heightToSubstract:2.75rem] flex items-end">
        <p class="flex flex-col text-xs/3 sm:text-base/4 md:text-xl/5 xl:text-2xl/6 2xl:text-3xl/7">
          <span>BAKING</span>
          <span>IMPRESSIVE</span>
          <span class="rounded-lg xl:p-1 p-[0.20rem] bg-[var(--text-color)] text-[var(--background-color)] w-fit text-base/4 sm:text-xl/5 md:text-3xl/6 xl:text-4xl/8 2xl:text-5xl/10">
            <ChangingText content={['CODE', 'ART', 'STYLE']} />
          </span>
        </p>
      </div>
      <div>
        <p class="text-[0.4rem] mb-1 opacity-60">recent work</p>
        {currentWidth > 1536 ? (
          <ul class="relative flex flex-col justify-center">
            <For each={works}>
              {(item) => (
                <>
                  <span class="sectionDivider"></span>
                  <li class="group cursor-pointer h-24 w-[calc(100%-4rem)] mx-auto py-4">
                    <a
                      href={`./work/${item.title}`}
                      class="flex justify-between items-center"
                    >
                      <h3 class="onTextHover">{item.title}</h3>
                      <div class="h-16 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                        <img
                          class="h-[inherit] scale-110 group-hover:scale-100 transition-all duration-500"
                          src={
                            new URL(
                              `../assets/images/${item.cover}`,
                              import.meta.url
                            ).href
                          }
                          alt={`the presentation of ${item.title}`}
                        />
                      </div>
                      <h4 class="onTextHover">{item.type}</h4>
                    </a>
                  </li>
                </>
              )}
            </For>
            <span class="sectionDivider"></span>
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    </main>
  )
}

export default Home
