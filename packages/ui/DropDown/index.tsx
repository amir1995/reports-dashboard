import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { TDropDownItem } from 'tasks/types/types/dataTypes';

import { Button } from '../Button';

type TDropDownProps = {
  title: string;
  dataItems: TDropDownItem[];
  onSelectItem: (x: TDropDownItem) => void;
  selectedItem: TDropDownItem | null;
};

export const DropDown = (props: TDropDownProps) => {
  const { title, selectedItem, dataItems, onSelectItem } = props;
  const [open, setOpen] = useState(false);

  const handleSelectItem = useCallback(
    (item: TDropDownItem) => {
      setOpen(false);
      onSelectItem(item);
    },
    [onSelectItem],
  );

  return (
    <Button
      className="bg-colour-g1 mx-2.75 p-0 px-0 py-0"
      onClick={() => setOpen(!open)}
      disabled={!dataItems?.length}
    >
      <div className="flex justify-center">
        <div className="relative px-2.5 py-2">
          <span className="inline-block w-full rounded">
            <div className="flex items-center space-x-3">
              <span className="block">{selectedItem?.label ?? title}</span>
              <Image
                src={open ? '/png/arrow-up.png' : '/png/arrow-down.png'}
                alt="arrow"
                width={14}
                height={14}
              />
            </div>
          </span>
          {open && dataItems?.length ? (
            <div className="bg-colour-g1 absolute left-1/2 mt-3 w-max min-w-full translate-x-[-50%] rounded">
              <ul className="shadow-xs max-h-56 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                <li
                  className="text-neutral-1000 relative flex cursor-default select-none justify-between px-2 py-1"
                  onClick={() => handleSelectItem({ label: title, id: 'all' })}
                >
                  <div className="flex items-center pr-2">
                    <span className="block">{title}</span>
                  </div>
                  {selectedItem?.id === 'all' ? (
                    <span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </span>
                  ) : null}
                </li>
                {dataItems.map(item => (
                  <li
                    className="text-neutral-1000 relative flex cursor-default select-none justify-between px-2 py-1"
                    onClick={() => handleSelectItem(item)}
                    key={item.id}
                  >
                    <div className="flex items-center pr-2">
                      <span className="block">{item.label}</span>
                    </div>
                    {selectedItem?.id === item.id ? (
                      <span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Button>
  );
};
