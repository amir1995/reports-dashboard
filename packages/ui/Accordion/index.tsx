import React from 'react';

import { Title } from '../Title';

type TAccordionProps = {
  title: string;
  detail?: string;
  children: React.ReactNode;
  index: string;
  canShowHeader: boolean;
  selectedIndex: string;
  setSelectedIndex: (x: string) => void;
};

export const Accordion = (props: TAccordionProps) => {
  const { title, detail, children, index, selectedIndex, setSelectedIndex, canShowHeader } = props;

  return (
    <div className="mb-1.25">
      {canShowHeader ? (
        <div
          role="button"
          className="bg-neutral-1000 rounded-xl px-0 py-0"
          onClick={() => setSelectedIndex(index)}
        >
          <div className="bg-neutral-1000 p-6.5 flex items-center justify-between rounded-xl">
            <Title title={title} titleClassName="text-base text-colour-b4 font-bold" />
            {detail ? (
              <Title title={detail} titleClassName="text-base text-colour-b4 font-bold" />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
          index === selectedIndex ? 'max-h-100' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
