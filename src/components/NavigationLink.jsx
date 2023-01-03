import { Link } from 'react-router-dom';

const NavigationLink = ({ to, title, setShowMenu }) => {
  return (
    <li>
      <Link
        to={`${to}`}
        className="text-blue-500 py-3 border-t border-b block"
        onClick={setShowMenu}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavigationLink;
