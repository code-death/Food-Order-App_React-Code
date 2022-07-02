import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onButtonClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Meals Table' />
      </div>
    </>
  )
}

export default Header
