import Image from "next/image";
import React from 'react';

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = (props: LayoutContainerProps): JSX.Element => {
  const { children } = props;

  return (
    <>
      <div className="sticky pl-8.75 top-30 w-25">
        <Image src="/png/report.png" alt="report" width={25} height={25} />
      </div>
      <div className="2-full mx-auto flex items-center justify-center px-25">
        <div className={'w-full'}>{children}</div>
      </div>
    </>
  );
};

export default LayoutContainer;
