import Image from "next/image";

import { DirectoryCategoryType } from "components/common/Directory";

import s from "./DirectoryItem.module.scss";
import Link from "next/link";

type DirectoryItemProps = {
	category: DirectoryCategoryType;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const { imageUrl, title, route } = category;

	return (
		<Link href={route} className={s.root}>
			<Image className={s.img} src={imageUrl} alt={title} width={400} height={300} />
			<div className={s.box}>
				<h2 className={s.title}>{title}</h2>
				<p className={s.text}>Shop Now</p>
			</div>
		</Link>
	);
};

export { DirectoryItem };
