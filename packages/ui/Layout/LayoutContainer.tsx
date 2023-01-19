import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { routes } from 'tasks/constant/routes';
import {TRoute} from "tasks/types/types/constantTypes";

import {Title} from "../Title";

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = (props: LayoutContainerProps): JSX.Element => {
  const { children } = props;

  return (
    <div className="flex justify-between">
      <div className="pl-8.75 top-20 h-sidebar w-25 sticky pt-10.25">
        {routes.map((item: TRoute) =>
          item.active ? (
            <div className="mb-6">
              <Link key={item.url} href={item.url}>
                <Image src={item.image} alt={item.name} width={25} height={25} />
              </Link>
            </div>
          ) : (
            <Image src={item.image} alt={item.name} width={25} height={25} className="mb-6"/>
          ),
        )}
      </div>
      <div className="2-full pr-25 flex items-start justify-center flex-col w-main relative">
        <div className="w-full pt-9.5 min-h-screen">{children}</div>
        <div className="absolute bottom-5.5">
          <Title title="Terms&Conditions | Privacy policy" titleClassName="text-base text-colour-b4 font-bold" />
        </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
