import classNames from 'classnames';
import React from 'react';

import Header from './Header';

type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className="h-full w-full">
      <Header />
      <div
        role="main"
        id="mainLayout"
        className={classNames('pt-20 bg-neutral-1000 mx-auto', className)}
      >
        {children}
      </div>
    </div>
  );
};
