import { useNavigate, useParams } from '@solidjs/router'
import works from '../assets/works.json'
import CarouselButtons from '../components/carouselButtons'
import { createEffect, createSignal } from 'solid-js'

function Works() {
  const params = useParams()
  const navigate = useNavigate()
  const [index, setIndex] = createSignal(0)
  const [currentImage, setCurrentImage] = createSignal('')
  const [currentText, setCurrentText] = createSignal('')
  const [currentWork, setCurrentWork] = createSignal(undefined)

  let firstRender = true

  params.name
    ? setCurrentWork(works.find((e) => e.title === params.name))
    : false

  if (currentWork === undefined) {
    navigate('/', { replace: true })
  }

  const increment = () => {
    if (index() < works.length - 1) {
      setIndex(index() + 1)
    } else {
      setIndex(0)
    }
  }
  const decrement = () => {
    if (index() <= 0) {
      setIndex(works.length - 1)
    } else {
      setIndex(index() - 1)
    }
  }

  createEffect(() => {
    index()
    if (firstRender) {
      setCurrentImage(works[index()].cover)
      setCurrentText(works[index()].title)
      firstRender = false
    } else {
      setCurrentImage(works[index()].cover)
      setCurrentText(works[index()].title)
    }
  })

  return (
    <>
      {currentWork() ? (
        <div>
          <div class="flex justify-between flex-wrap py-2 px-[2%] pb-2 items-end [&>*]:mx-auto gap-2">
            <a href={currentWork().link} target='_blank'>
              <h2 class="text-base font-normal underline sm:text-xl xl:text-2xl 2xl:text-3xl">{currentWork().title}</h2>
            </a>
            <div class="h-10 sm:h-16 xl:h-20 2xl:h-24">
              <img
                src={
                  new URL(
                    `../assets/images/${currentWork().cover}`,
                    import.meta.url
                  ).href
                }
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="sectionDivider"></div>
          <div class="mt-1">
            <p class="text-[0.25rem] min-[450px]:text-[0.4rem] sm:text-[0.6rem] lg:text-xs xl:text-sm 2xl:text-base">
              <span class="float-right mb-1 ml-1 text-[0.5rem] min-[450px]:text-[0.6rem] sm:text-xs lg:text-base sm:ml-2 sm:mb-0 lg:ml-3 lg:mb-2 2xl:text-xl 2xl:ml-5 2xl:mb-3">
                {currentWork().type}
              </span>
              {currentWork().description}
            </p>
          </div>
        </div>
      ) : (
        <div class="headerToBottomHeight [--heightToSubstract:2.75rem] sm:[--heightToSubstract:3.25rem] xl:[--heightToSubstract:3.75rem] flex items-center relative pt-8">
          <CarouselButtons
            increment={() => increment()}
            decrement={() => decrement()}
          />
          <div
            class="overflow-hidden h-2/4 lg:h-3/4 2xl:h-full w-full flex items-center justify-center"
            onClick={() => {
              navigate(`/work/${works[index()].title}`)
            }}
          >
            <img
              src={
                new URL(`../assets/images/${currentImage()}`, import.meta.url)
                  .href
              }
              alt=""
              class="object-cover w-full h-full blur-[3px]"
            />
            <h2 class="absolute text-xs lg:text-2xl 2xl:text-5xl 2xl:font-normal">
              {currentText()}
            </h2>
          </div>
          <CarouselButtons
            toRight={true}
            increment={() => increment()}
            decrement={() => decrement()}
          />
        </div>
      )}
    </>
  )
}

export default Works
