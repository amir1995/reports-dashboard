import classNames from 'classnames';
import React from 'react';

type TUserAvatar = {
  userName: string;
  userLastName: string;
};

export const UserAvatar = (props: TUserAvatar) => {
  const { userName, userLastName } = props;
  const userAvatarName = `${userName.charAt(0).toUpperCase()}${userLastName
    .charAt(0)
    .toUpperCase()}`;

  return (
    <div className="">
      <div className="">
        <div className="relative flex items-center font-bold">
          <div
            className={classNames(
              'bg-colour-f1 relative mr-2.75 flex h-10.75 w-10.75 items-center justify-center rounded',
            )}
          >
            <div className="flex cursor-pointer items-center justify-center focus:outline-none text-neutral-1000">
              {userAvatarName}
            </div>
          </div>
          <div className="flex items-center justify-center">{userName} {userLastName}</div>
        </div>
      </div>
    </div>
  );
};
