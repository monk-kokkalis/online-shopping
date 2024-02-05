import clsx from "clsx";
import { iconDefaults } from '.';
import type { IconProps } from '.';

const StripeIcon = (props: IconProps) => {
  const { width, height, className } = { ...iconDefaults, ...props };
  return (
    <svg className={clsx('fill-current', className)} width={`${width}`} height={`${height}`} viewBox="0 0 103 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.5554 3.79318L19.5868 5.25682L19.5547 27.9114C19.5547 32.0955 22.7412 34.8 26.9739 34.8C29.3236 34.8 31.0456 34.3705 31.9951 33.8614V28.4841C31.0778 28.85 26.5715 30.1546 26.5715 25.9864V15.9318H31.9951V9.91818H26.5715L26.5554 3.79318ZM40.895 12.0023L40.4604 9.91818H34.2804V34.2909H41.41V17.8886C43.0998 15.6932 45.9484 16.1227 46.8658 16.4091V9.91818C45.9001 9.58409 42.5687 8.96364 40.895 12.0023ZM55.7495 0.5L48.5717 2.01136V7.77045L55.7495 6.25909V0.5ZM7.22685 17.0932C7.22685 15.9955 8.16028 15.5659 9.657 15.55C11.8297 15.55 14.5978 16.2023 16.7704 17.3636V10.7136C14.4047 9.79091 12.0389 9.425 9.6731 9.425C3.87935 9.425 0.0168457 12.4159 0.0168457 17.4114C0.0168457 25.2386 10.8801 23.9659 10.8801 27.3386C10.8801 28.6432 9.73747 29.0727 8.14419 29.0727C5.77841 29.0727 2.7206 28.1023 0.322627 26.8136V33.1773C2.9781 34.3068 5.66575 34.7841 8.1281 34.7841C14.0667 34.7841 18.1545 32.2705 18.1545 27.1796C18.1545 18.7636 7.22685 20.275 7.22685 17.0932ZM103.001 22.3909C103.001 15.1523 99.4601 9.44091 92.6686 9.44091C85.877 9.44091 81.7409 15.1523 81.7409 22.3432C81.7409 30.8545 86.6173 34.7841 93.5698 34.7841C96.9817 34.7841 99.5406 34.0205 101.488 32.9545V27.6409C99.5406 28.6114 97.3036 29.2 94.4711 29.2C91.6869 29.2 89.2406 28.2295 88.9187 24.9205H102.904C102.936 24.5545 103.001 23.075 103.001 22.3909ZM88.8544 19.7182C88.8544 16.5364 90.8339 15.2 92.6203 15.2C94.3745 15.2 96.2414 16.5364 96.2414 19.7182H88.8544ZM70.6845 9.44091C67.8842 9.44091 66.0817 10.7455 65.0839 11.6523L64.7137 9.90227H58.4211V42.4841L65.5667 40.9886L65.5828 33.0023C66.6128 33.75 68.1417 34.7841 70.6362 34.7841C75.754 34.7841 80.4212 31.0932 80.4212 22.1205C80.4373 13.9114 75.7058 9.44091 70.6845 9.44091ZM68.9786 28.9296C67.3048 28.9296 66.307 28.325 65.615 27.5932L65.5667 17.0932C66.307 16.2818 67.337 15.6932 68.9786 15.6932C71.5858 15.6932 73.3883 18.5886 73.3883 22.2795C73.4044 26.0818 71.634 28.9296 68.9786 28.9296ZM48.5878 34.2909H55.7656V9.91818H48.5878V34.2909Z" fill="#737373"/>
    </svg>
  )
}

export { StripeIcon }