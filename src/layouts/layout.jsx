import { createSignal } from 'solid-js'
import Header from './components/header'
import PopUpOption from './components/popUpOption'

function Layout({ children }) {
  const [showOption, setShowOption] = createSignal(false)

  return (
    <>
      <PopUpOption showOption={() => showOption()} setShowOption={(boolean) => setShowOption(boolean)} />
      <Header setShowOption={(boolean) => setShowOption(boolean)}/>
      {children}
    </>
  )
}

export default Layout
