import type { HTMLAttributes } from 'react';

import LogoImage from '@documenso/assets/logo.svg';

export type LogoProps = HTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ className, ...props }: LogoProps) => {
  return <img src={LogoImage} alt="Logo" className={className} {...props} />;
};
