import { useMemo } from "react";

import cx from "classnames";

import s from "./Button.module.scss";

interface IButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
	isGoogle?: boolean;
	isInverted?: boolean;
	href?: string;
	disabled?: boolean;
}

const Button = ({ onClick, children, isGoogle, isInverted, href, disabled }: IButtonProps) => {
	const CustomTag = useMemo(() => {
		if (href) return "a";
		return "button";
	}, [href]);

	return (
		<CustomTag
			className={cx(s.btn, { [s.btnGoogle]: isGoogle, [s.btnInverted]: isInverted })}
			onClick={onClick}
			href={href}
			disabled={disabled}
			target={href && "_blank"}>
			{children}
		</CustomTag>
	);
};

export { Button };
