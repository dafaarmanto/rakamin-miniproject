import NavigationLink from './NavigationLink';

const NavigationMenu = ({ setShowMenu }) => {
  return (
    <div>
      <div className="font-bold">AppName</div>
      <ul className="mt-4">
        <NavigationLink to="/" title="Home" setShowMenu={setShowMenu} />
        <NavigationLink to="/about" title="About" setShowMenu={setShowMenu} />
        <NavigationLink
          to="/product"
          title="Product"
          setShowMenu={setShowMenu}
        />
        <NavigationLink
          to="/contact"
          title="Contact"
          setShowMenu={setShowMenu}
        />
      </ul>
    </div>
  );
};

export default NavigationMenu;
