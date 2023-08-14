import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import PropTypes from 'prop-types';

export const FadeIn = ({ className, children }) => {
  const items = React.Children.toArray(children);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  if (!items.length) return;
  return (
    <animated.ul className={className} style={props}>
      {items}
    </animated.ul>
  );
};

FadeIn.propTypes = {
  className: PropTypes.string,
};
