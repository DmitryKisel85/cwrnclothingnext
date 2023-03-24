// import { FC, useCallback } from "react";

// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

import { Button } from "components/common/Button";
// import CartItem from "../CartItem";

// import { selectCartItems } from "../../store/cart/cartSelector";

// import { CartDropdownContainer, CartItems, EmptyMessage } from "./cartDropdown.styles";

import s from "./CartDropdown.module.scss";

const CartDropdown = () => {
	// const cartItems = useSelector(selectCartItems);
	// const navigate = useNavigate();

	// const goToCheckoutHandler = useCallback(() => {
	// 	navigate("/checkout");
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div className={s.root}>
			<div className={s.container}>
				{/* {cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<span className={s.text}>Your cart is empty</span>
				)} */}
			</div>
			<Button
				className={s.btn}
				// onClick={goToCheckoutHandler}
			>
				GO TO CHECKOUT
			</Button>
		</div>
	);
};

export { CartDropdown };
