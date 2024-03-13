import { createEffect, createSignal } from 'solid-js'

function ChangingText({ content }) {
  const [index, setIndex] = createSignal(0)
  const [text, setText] = createSignal(content[index()])
  const [displayText, setDisplayText] = createSignal(content[index()])

  let isFirstRender = true
  let animationPauseTime = 2000

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  function crypticDisappear() {
    let currentText = text().split('')
    let textToDisplay = currentText
    for (let i = 0; i <= currentText.length * 2; i++) {
      setTimeout(() => {
        textToDisplay = textToDisplay.map((e, currentIndex) =>
          currentIndex <= i
            ? alphabet[Math.floor(Math.random() * alphabet.length)]
            : e
        )
        if (currentText.length < i) {
          textToDisplay.pop()
        }
        setDisplayText(textToDisplay)
        if (i === currentText.length * 2) {
          setIndex(index() < content.length - 1 ? index() + 1 : 0)
        }
      }, 100 * i)
    }
  }

  function crypticAppear() {
    let currentText = text().split('')
    let textToDisplay = ''
    let textSize = currentText.length - 1
    for (let i = 0; i <= currentText.length * 2; i++) {
      setTimeout(() => {
        textToDisplay = ''
        if (i < currentText.length) {
          for (let index = 0; index <= i; index++) {
            let currentLetter =
              alphabet[Math.floor(Math.random() * alphabet.length)]
            textToDisplay += currentLetter
          }
        }
        if (i >= currentText.length && i !== currentText.length * 2) {
          for (let index = 0; index < textSize; index++) {
            let currentLetter =
              alphabet[Math.floor(Math.random() * alphabet.length)]
            textToDisplay += currentLetter
          }
          textToDisplay = textToDisplay.concat(
            currentText.slice(-(i - currentText.length + 1)).join('')
          )
          textSize = textSize - 1
        }
        if (i === currentText.length * 2) {
          setTimeout(() => crypticDisappear(), animationPauseTime)
        } else {
          setDisplayText(textToDisplay)
        }
      }, 100 * i)
    }
  }

  createEffect(() => {
    setText(content[index()])
    if (isFirstRender) {
      setTimeout(() => {
        crypticDisappear()
      }, animationPauseTime)
      isFirstRender = false
    } else {
      crypticAppear()
    }
  })

  return <>{displayText()}</>
}

export default ChangingText
