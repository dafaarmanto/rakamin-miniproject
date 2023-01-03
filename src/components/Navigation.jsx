import { useState } from 'react';

import NavigationMenu from './NavigationMenu';

import { useTransition, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {maskTransitions(
        (style, item) =>
          item && (
            <animated.div
              className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
              style={style}
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}
      {menuTransitions(
        (style, item) =>
          item && (
            <animated.div
              className="fixed p-3 bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
              style={style}
            >
              <NavigationMenu setShowMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
};

export default Navigation;
