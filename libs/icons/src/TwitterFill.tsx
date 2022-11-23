import { createIcon } from './create-icon';
import { IconBase } from './types';

export const TwitterFill = (props: IconBase) => {
  return createIcon({
    ...props,
    path: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.162 5.656a8.385 8.385 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.168 4.168 0 01-1.894-.522v.052a4.185 4.185 0 003.355 4.1 4.208 4.208 0 01-1.89.073A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.19 1.732 11.829 11.829 0 006.409 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.497 8.497 0 002.087-2.165v-.001z'
      />
    ),
    displayName: 'TwitterFill',
  });
};