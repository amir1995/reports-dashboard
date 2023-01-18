import { useGetFetchQuery } from 'hooks';
import Image from 'next/image';
import React from 'react';
import { TUserData } from 'tasks/types/types/serviceCallTypes';

import { UserAvatar } from './UserAvatar';

const Header = () => {
  const handleShowMenu = () => {
    // we can handle toggle menu in this block with any functionality
    return true;
  };

  const userData: TUserData[] = useGetFetchQuery<TUserData[]>(['usersList']);

  return (
    <div
      role="navigation"
      className="bg-neutral-1000 px-8.75 fixed z-50 flex h-20 w-full items-center justify-between border-b-2"
    >
      <div className="flex items-center justify-start">
        <div className="pr-9.5 flex h-full items-center">
          <Image alt="logo" src="/png/logo.png" width="27" height="40" />
        </div>
        <button onClick={handleShowMenu}>
          <div className="flex h-full items-center">
            <Image alt="logo" src="/png/menu.png" width="31" height="27" />
          </div>
        </button>
      </div>

      <div className="pr-16.25 flex h-full items-center justify-end">
        <UserAvatar userName={userData[0].firstName} userLastName={userData[0].lastName} />
      </div>
    </div>
  );
};

export default Header;
