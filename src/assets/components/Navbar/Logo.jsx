import { NavLink } from 'react-router-dom'

const Logo = ({Name}) => {
  return (
    <div className="text-xl font-bold tracking-widest text-black">
        <NavLink to="/">{Name}</NavLink>
      </div>
  )
}

export default Logo