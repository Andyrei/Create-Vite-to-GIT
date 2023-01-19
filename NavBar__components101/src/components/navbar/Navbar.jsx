import './style/navbar.css'


export default function Navbar() {
  let navItems =['Contact Us','About Us','Service']
  return (
    <header className='main_header'>
      <div className="logo">LEGO</div>
      <nav className="main_nav">
        <ul>
          {
            navItems.map( (item)=>{
              return <li><a href="#">{item}</a></li>
            })
          }
        </ul>
      </nav>
    </header>
  )
}