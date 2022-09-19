import React, { FC, useEffect } from "react";
import { Container, Title } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch, RootState } from "../../store/index";
const User = () => {
	const dispatch = useDispatch<Dispatch>();
	const postList = useSelector((state: RootState) => state.posts);
	console.log("post list", postList);

	useEffect(() => {
		dispatch.posts.loadPosts(0);
	}, []);

	return (
		<Container>
			<Title>User List</Title>
			{postList?.payload?.map((item: any, key: any) => {
				return <div key={key}>{item?.title}</div>;
			})}
		</Container>
	);
};
export default User;
