import React, { FC } from "react";
import { Panel, Badge, Heading } from "./styled";

type HeaderProps = {
	count?: number;
};

const Header: FC<HeaderProps> = () => {
	return (
		<Panel>
			<Heading>Main Header</Heading>
		</Panel>
	);
};

export default Header;
