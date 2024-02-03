import clsx from "clsx";
import { iconDefaults } from '.';
import type { IconProps } from '.';

const ChevronDownIcon = (props: IconProps) => {
  const { width, height, className } = { ...iconDefaults, ...props };
  return (
    <svg className={clsx('fill-current', className)} width={`${width}`} height={`${height}`} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z" />
    </svg>
  )
}

export { ChevronDownIcon }