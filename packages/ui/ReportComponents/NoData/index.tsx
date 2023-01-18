import Image from "next/image";
import React from 'react';
import { texts } from 'tasks/constant/texts';

import { Title } from '../../Title';

export const NoData = () => {
  return (
    <div className="mt-35 flex h-full w-full flex-col items-center justify-center">
      <Title title={texts.noReport} />
      <div className="w-115">
        <Title
          title={texts.noReportDetail}
          titleClassName="text-base text-neutral-078 text-center text-pre whitespace-pre-wrap font-bold mt-1"
        />
      </div>
      <div className="mt-12.7">
        <Image src="/png/no-data.png" alt="noData"  width={402} height={171}/>
      </div>
    </div>
  );
};
