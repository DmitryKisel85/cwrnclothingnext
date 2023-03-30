export type CategoryItemType = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type CategoryType = {
	title: string;
	imageUrl: string;
	items: CategoryItemType[];
};
