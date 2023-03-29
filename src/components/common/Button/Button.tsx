import { useMemo } from "react";

import cx from "classnames";

import s from "./Button.module.scss";

interface IButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
	isGoogle?: boolean;
	isInverted?: boolean;
	isMain?: boolean;
	href?: string;
	disabled?: boolean;
	className?: string;
	type?: "submit" | "button";
}

const Button = ({ onClick, children, isGoogle, isInverted, isMain, href, disabled, className, type }: IButtonProps) => {
	const CustomTag = useMemo(() => {
		if (href) return "a";
		return "button";
	}, [href]);

	return (
		<CustomTag
			className={cx(s.root, className, {
				[s.btnGoogle]: isGoogle,
				[s.btnInverted]: isInverted,
				[s.btnMain]: isMain,
			})}
			onClick={onClick}
			href={href}
			disabled={disabled}
			target={href && "_blank"}
			type={type}>
			{children}
		</CustomTag>
	);
};

export { Button };
