import classes from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../Store/CartContext'

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx
  const [btnAnimated, setBtnAnimated] = useState(false)
  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)
  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ''}`
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnAnimated(true)

    const timer = setTimeout(() => {
      setBtnAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCardButton
