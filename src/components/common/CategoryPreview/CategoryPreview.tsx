import Link from "next/link";

import { ProductCard } from "components/common/ProductCard";

// import { CategoryItem } from "../../store/categories/categoriesTypes";

import s from "./CategoryPreview.module.scss";

type CategoryPreviewProps = {
	title: string;
	// products: CategoryItem[];
	products: any;
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
	return (
		<div className={s.root}>
			<h2>
				<Link className={s.link} href={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className={s.list}>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export { CategoryPreview };
