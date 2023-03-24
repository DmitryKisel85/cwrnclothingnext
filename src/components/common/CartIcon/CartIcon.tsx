// import { useSelector } from "react-redux";
// import { useAppDispatch } from "../../store/store";

// import { selectCartCount, selectIsCartOpen } from "../../store/cart/cartSelector";
// import { setIsCartOpen } from "../../store/cart/cartSlice";

import { ShoppingIcon } from "../Icons/ShoppingIcon";

import s from "./CartIcon.module.scss";

const CartIcon = () => {
	// const dispatch = useAppDispatch();

	// const cartCount = useSelector(selectCartCount);
	// const isCartOpen = useSelector(selectIsCartOpen);

	// const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<div
			className={s.root}
			// onClick={toggleIsCartOpen}
		>
			<ShoppingIcon className={s.icon} />
			{/* <span className={s.text}>{cartCount}</span> */}
		</div>
	);
};

export { CartIcon };
