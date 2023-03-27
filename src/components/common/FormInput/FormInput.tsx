import { InputHTMLAttributes } from "react";

import s from "./FormInput.module.scss";

type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
	return (
		<div className={s.root}>
			<input className={s.input} {...otherProps} />
			{label && <label className={s.label}>{label}</label>}
		</div>
	);
};

export { FormInput };
