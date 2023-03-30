import { getCategoriesAndDocuments } from "utils/firebase";
import { Shop } from "components/pages/Shop";

import type { CategoryType } from "types";

type ShopPageProps = {
	categories: CategoryType[];
};

const ShopPage = ({ categories }: ShopPageProps) => {
	return <Shop data={categories} />;
};

export async function getStaticProps() {
	const data = await getCategoriesAndDocuments();

	return {
		props: {
			categories: data,
		},
	};
}

export default ShopPage;
