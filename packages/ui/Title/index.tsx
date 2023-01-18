import React from 'react';

type TitleProps = {
  title: string;
  titleClassName?: string;
  detail?: string;
  detailSize?: string;
};

export const Title = (props: TitleProps): JSX.Element => {
  const { title, titleClassName, detail, detailSize } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className={titleClassName ?? 'text-colour-b4 text-1xl font-bold'}>
          {title}
        </div>
      </div>
      {detail?.length ? (
        <div className={`${detailSize ?? 'text-base'} text-neutral-078 mt-1 font-bold`}>
          {detail}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
