import { createIcon } from './create-icon';
import { IconBase } from './types';

export const GridFillIcon = (props: IconBase) => {
  return createIcon({
    ...props,
    path: (
      <path d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z" />
    ),
    displayName: 'GridFill',
  });
};
