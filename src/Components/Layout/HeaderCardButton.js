import classes from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/CartContext'

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount
  }, 0)

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCardButton
