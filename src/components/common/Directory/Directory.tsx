import { categories } from "./data";

import { DirectoryItem } from "components/common/DirectoryItem";

import s from "./Directory.module.scss";

const Directory = () => {
	return (
		<div className={s.root}>
			{categories.map((category) => {
				return <DirectoryItem key={category.id} category={category} />;
			})}
		</div>
	);
};

export { Directory };
