import Image from "next/image";
import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../Directory/Directory";

import s from "./DirectoryItem.module.scss";

type DirectoryItemProps = {
	category: DirectoryCategory;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const { imageUrl, title, route } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<div className={s.root} onClick={onNavigateHandler}>
			<Image className={s.img} src={imageUrl} alt={title} />
			<div className={s.box}>
				<h2 className={s.title}>{title}</h2>
				<p className={s.text}>Shop Now</p>
			</div>
		</div>
	);
};

export { DirectoryItem };
