import svg from './assets/icons/Group.svg'
const Header = () =>{
  return(
    <header>
      <div className='container'>
        <nav className='nav'>
          <a href='#' className='nav__logo'>
            <img src={svg} />
          </a>
          <ul className='nav__list'>
            <li className='nav__list--item'>Home</li>
            <li className='nav__list--item'>Latest</li>
            <li className='nav__list--item'>About</li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  )
}
export default Header;