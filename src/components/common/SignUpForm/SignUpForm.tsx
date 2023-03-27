import { useState, FormEvent, ChangeEvent } from "react";

import { AuthError, AuthErrorCodes } from "firebase/auth";

import { useAppDispatch } from "../../store/store";

import { FormInput } from "components/common/FormInput";
import { Button } from "components/common/Button";

// import { signUpStart } from "../../store/user/userAction";

import { signUpStart } from "../../store/user/userSlice";

import s from "./SignUpForm.module.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const dispatch = useAppDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match!");
			return;
		}

		try {
			dispatch(signUpStart({ email, password, displayName }));
			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert("Cannot create user, email already in use");
			}

			console.log("User creation encountered an error", error);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	return (
		<div className={s.root}>
			<h2 className={s.title}>{`Don't have an account?`}</h2>
			<span>Sign Up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export { SignUpForm };
