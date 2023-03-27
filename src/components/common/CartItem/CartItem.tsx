import { memo } from "react";
import Image from "next/image";

import type { CartItem as TCartItem } from "store/cart/cartTypes";

import s from "./CartItem.module.scss";

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem = memo(({ cartItem }: CartItemProps) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<div className={s.root}>
			<Image className={s.img} src={imageUrl} alt={name} />
			<div className={s.box}>
				<span>{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
});

export { CartItem };
