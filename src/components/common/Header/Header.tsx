// import { useSelector } from "react-redux";
// import { useAppDispatch } from "../../store/store";

import Image from "next/image";

import { ShoppingIcon } from "components/common/Icons/ShoppingIcon";
import { CartDropdown } from "components/common/CartDropdown";

import crwnLogo from "assets/crown.svg";

// import { selectIsCartOpen } from "../../store/cart/cartSelector";
// import { selectCurrentUser } from "../../store/user/userSelector";

// import { signOutStart } from "../../store/user/userSlice";

import s from "./Header.module.scss";
import Link from "next/link";
import { Button } from "components/common/Button";

const Header = () => {
	// const currentUser = useSelector(selectCurrentUser);
	// const isCartOpen = useSelector(selectIsCartOpen);

	// const dispatch = useAppDispatch();

	// const signOutUser = () => dispatch(signOutStart());

	return (
		<div className={s.root}>
			<Link href='/' className={s.logo}>
				<Image src={crwnLogo} alt='logo' />
			</Link>
			<div className={s.nav}>
				<Link href='/shop' className={s.link}>
					<span>SHOP</span>
				</Link>
				{/* {currentUser ? (
					<Button className={s.link} onClick={signOutUser}>
						SIGN OUT
					</Button>
				) : (
					<Link href='/auth'>SIGN IN</Link>
				)} */}
				<ShoppingIcon />
			</div>
			{/* {isCartOpen && <CartDropdown />} */}
		</div>
	);
};

export { Header };
