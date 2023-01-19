import classNames from "classnames";
import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button(props: IButtonProps) {
  const { children, className, onClick, ...rest } = props;
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center justify-center rounded bg-colour-b2 px-2.5 py-2 text-sm font-medium text-neutral-1000',
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
};
