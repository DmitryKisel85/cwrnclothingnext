import { Header } from "components/common/Header";

import s from "./Layout.module.scss";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={s.root}>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
