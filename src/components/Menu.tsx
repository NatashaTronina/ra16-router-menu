import { NavLink } from 'react-router-dom';

const items = [
  { to: '/', label: 'Главная' },
  { to: '/drift', label: 'Дрифт-такси' },
  { to: '/timeattack', label: 'Time Attack' },
  { to: '/forza', label: 'Forza Karting' },
];

function getLinkClass({ isActive }: { isActive: boolean }): string {
  return isActive ? 'menu__item menu__item-active' : 'menu__item';
}

function Menu() {
  return (
    <nav className="menu">
      {items.map(({ to, label }) => (
        <NavLink key={to} className={getLinkClass} to={to} end={to === '/'}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
