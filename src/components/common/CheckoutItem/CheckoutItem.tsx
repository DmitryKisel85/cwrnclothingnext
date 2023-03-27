import { FC, memo } from "react";

import Image from "next/image";

import { useAppDispatch } from "../../store/store";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cartSlice";

import { CartItem as TCartItem } from "../../store/cart/cartTypes";

import s from "./CheckoutItem.module.scss";
import { Button } from "../Button";

type CheckoutItemProps = {
	cartItem: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useAppDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

	return (
		<div className={s.root}>
			<div className={s.imgbox}>
				<Image className={s.img} src={imageUrl} alt={name} />
			</div>
			<span className={s.text}>{name}</span>
			<span className={s.quantity}>
				<span className={s.icon} onClick={removeItemHandler}>
					&#10094;
				</span>
				<span className={s.quantityNum}>{quantity}</span>
				<span className={s.icon} onClick={addItemHandler}>
					&#10095;
				</span>
			</span>
			<span className={s.price}>${price}</span>
			<Button className={s.btn} onClick={clearItemHandler}>
				&#10005;
			</Button>
		</div>
	);
});

export { CheckoutItem };
