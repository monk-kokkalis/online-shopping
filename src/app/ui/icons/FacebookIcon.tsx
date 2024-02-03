import clsx from "clsx";
import { iconDefaults } from '.';
import type { IconProps } from '.';

const FacebookIcon = (props: IconProps) => {
  const { width, height, className } = { ...iconDefaults, ...props };
  return (
    <svg className={clsx('fill-current', className)} width={`${width}`} height={`${height}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.002 8.05C16.002 3.604 12.42 0 8.002 0C3.582 0.001 0 3.604 0 8.051C0 12.068 2.926 15.398 6.75 16.002V10.377H4.72V8.051H6.752V6.276C6.752 4.259 7.947 3.145 9.774 3.145C10.65 3.145 11.565 3.302 11.565 3.302V5.282H10.556C9.563 5.282 9.253 5.903 9.253 6.54V8.05H11.471L11.117 10.376H9.252V16.001C13.076 15.397 16.002 12.067 16.002 8.05Z"/>
    </svg>
  )
}

export { FacebookIcon }