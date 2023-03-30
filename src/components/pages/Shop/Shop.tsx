import Layout from "components/common/Layout";
import { CategoryPreview } from "components/common/CategoryPreview";

import type { CategoryType } from "types";

type ShopProps = {
	data: CategoryType[];
};

const Shop = ({ data }: ShopProps) => {
	return (
		<Layout>
			{data.map(({ title, items }) => {
				return <CategoryPreview key={title} title={title} products={items} />;
			})}
		</Layout>
	);
};

export { Shop };
