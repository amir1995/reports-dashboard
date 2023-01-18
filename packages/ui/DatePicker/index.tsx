import Image from 'next/image';
import React, { useCallback, useRef } from 'react';

import { Button } from '../Button';

type TDropDownProps = {
  title: string;
  onSelectDate: (x: string) => void;
  selectedDate: string;
};

export const DatePicker = (props: TDropDownProps) => {
  const { title, selectedDate, onSelectDate } = props;
  const dateRef = useRef<any>(null);

  const handleOpenDatePicker = () => {
    if (dateRef) {
      dateRef.current.showPicker();
    }
  };

  const handleSelectItem = useCallback(
    (item: string) => {
      onSelectDate(item);
    },
    [onSelectDate],
  );

  return (
    <Button className="bg-colour-g1 mx-2.75 p-0 px-0 py-0 min-w-30" onClick={handleOpenDatePicker}>
      <input
        type="date"
        className="opacity-0 absolute"
        ref={dateRef}
        value={selectedDate}
        max="2021-12-31"
        min="2021-01-01"
        onChange={(e) => handleSelectItem(e.target.value)}
      />
      <div className="flex justify-center">
        <div className="relative px-2.5 py-2">
          <span className="inline-block w-full rounded">
            <div className="flex items-center space-x-3">
              <span className="block">{title}</span>
              <Image src="/png/date.png" alt="date" width={14} height={14} />
            </div>
          </span>
        </div>
      </div>
    </Button>
  );
};
