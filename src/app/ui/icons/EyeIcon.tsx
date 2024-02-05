import { IconProps } from '.';
import { iconDefaults } from '.';
import clsx from 'clsx';

function EyeIcon(props: IconProps) {
	const { width, height, className } = { ...iconDefaults, ...props };
	return (
		<svg className={clsx('fill-current', className)} xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 16 17" fill="none">
			<title>Eye icon</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.00003 7.40153C7.33843 7.40153 6.80003 7.9444 6.80003 8.61148C6.80003 9.27856 7.33843 9.82142 8.00003 9.82142C8.66163 9.82142 9.20003 9.27856 9.20003 8.61148C9.20003 7.9444 8.66163 7.40153 8.00003 7.40153ZM7.99997 11.4347C6.45597 11.4347 5.19997 10.1683 5.19997 8.61148C5.19997 7.05469 6.45597 5.78827 7.99997 5.78827C9.54397 5.78827 10.8 7.05469 10.8 8.61148C10.8 10.1683 9.54397 11.4347 7.99997 11.4347ZM15.8944 8.20975C15.3832 7.31277 12.5648 2.81661 7.7832 2.96745C3.3616 3.08119 0.7888 7.00948 0.1056 8.20975C-0.0352 8.45899 -0.0352 8.7639 0.1056 9.01315C0.6096 9.89802 3.3296 14.2579 8.02 14.2579C8.0848 14.2579 8.1504 14.2571 8.2168 14.2554C12.6384 14.1417 15.2112 10.2134 15.8944 9.01315C16.0352 8.7639 16.0352 8.45899 15.8944 8.20975Z"
			/>
		</svg>
	);
}

export { EyeIcon };