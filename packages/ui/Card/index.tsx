import classNames from 'classnames';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div className={classNames('p-4.5 bg-neutral-040 rounded-xl', className)}>{children}</div>
  );
};

Card.defaultProps = {
  className: '',
};
