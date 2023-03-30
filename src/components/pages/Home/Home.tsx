import { categories } from "components/pages/Home/data";
import { DirectoryItem } from "components/common/DirectoryItem";
import Layout from "components/common/Layout";

import s from "./Home.module.scss";

const Home = () => {
	return (
		<Layout>
			<div className={s.root}>
				{categories.map((category) => {
					return <DirectoryItem key={category.id} category={category} />;
				})}
			</div>
		</Layout>
	);
};

export { Home };
