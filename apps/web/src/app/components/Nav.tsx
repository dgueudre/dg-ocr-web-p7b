import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">A Propos</Link></li>
      </ul>
    </nav>
  );
}
