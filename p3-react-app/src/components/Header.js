import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/add-bills'>Add Bills</Link>
                    </li>
                    <li>
                        <Link to='/pending-bills'>Pending Bills</Link>
                    </li>
                    <li>
                        <Link to='/paid-bills'>Paid Bills</Link>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Header;