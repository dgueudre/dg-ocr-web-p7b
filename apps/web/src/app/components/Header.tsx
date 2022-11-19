import './Header.scss';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Logo color="#FF6060" />
      <Nav />
    </header>
  );
}
