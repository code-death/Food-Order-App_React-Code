import { Fragment, useState } from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandle = () => {
    setCartIsShown(true)
  }

  const hideCartHandle = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandle} />}
      <Header onButtonClick={showCartHandle} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
