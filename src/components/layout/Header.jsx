import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Go to home page</Link>
        </li>

        <li>
           <Link to="/services">See Our Services</Link>
        </li>

        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>


    </nav>
  )
}