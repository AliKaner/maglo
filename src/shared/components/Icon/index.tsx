'use client';

import styles from './Icon.module.scss';
import { icons } from './svgs';
import { type SVGProps } from 'react';

export type IconName = keyof typeof icons;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon = ({ name, ...rest }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;
  return <IconComponent className={styles.icon} {...rest} />;
};

export default Icon;
