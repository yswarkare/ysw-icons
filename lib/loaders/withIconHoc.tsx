import { JSX } from 'react';

const withIconHoc = (Icon: JSX.Element) => {
  const withIconHoc = ({ size = '', ...props }) => {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width={size || '1rem'} height={size || '1rem'} viewBox='0 0 24 24' {...props}>
        {Icon}
      </svg>
    )
  }
  return withIconHoc;
}

export default withIconHoc;