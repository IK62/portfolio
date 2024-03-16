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
          <div class='flex justify-between p-10 pb-5 items-end'>
            <h2 class='text-4xl font-normal'>{currentWork().title}</h2>
            <div class='h-28'>
              <img
                src={
                  new URL(
                    `../assets/images/${currentWork().cover}`,
                    import.meta.url
                  ).href
                }
                alt=""
                class='h-full'
              />
            </div>
          </div>
          <div class='sectionDivider'></div>
          <div class='mt-5'>
            <p class='text-sm'>
              <span class='float-right mb-4 ml-10 text-base'>{currentWork().type}</span>
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
            <h2 class="absolute text-xs lg:text-2xl 2xl:text-5xl 2xl:font-normal">{currentText()}</h2>
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
