import { JSX } from 'react';
declare const withIconHoc: (Icon: JSX.Element) => ({ size, ...props }: {
    [x: string]: any;
    size?: string | undefined;
}) => JSX.Element;
export default withIconHoc;
