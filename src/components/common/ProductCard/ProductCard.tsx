// import { useAppDispatch } from "../../store/store";

// import { addItemToCart } from "../../store/cart/cartSlice";

import { Button } from "components/common/Button";

// import { CategoryItem } from "../../store/categories/categoriesTypes";

import s from "./ProductCard.module.scss";
import Image from "next/image";

type ProductCardProps = {
	// product: CategoryItem;
	product: any;
};

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;

	// const dispatch = useAppDispatch();

	// const addProductToCart = () => dispatch(addItemToCart(product));
	const addProductToCart = () => {};

	return (
		<div className={s.root}>
			<Image className={s.img} src={imageUrl} alt={name} width={300} height={300} />
			<div className={s.box}>
				<span className={s.text}>{name}</span>
				<span>${price}</span>
			</div>
			<Button className={s.btn} isInverted onClick={addProductToCart}>
				Add to cart
			</Button>
		</div>
	);
};

export { ProductCard };
