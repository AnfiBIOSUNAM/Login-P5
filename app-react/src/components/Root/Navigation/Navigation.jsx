import './Navigation.css'
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
        <>
        <div id="sidebar">
          <div></div>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
}