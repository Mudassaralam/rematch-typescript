import { createModel } from "@rematch/core";
import { User } from "../types/User";

type UserResponse = {
	result: ReadonlyArray<User>;
};

export const posts = createModel()({
	state: { payload: [] },
	reducers: {
		loadPost: (state, payload) => ({
			...state,
			payload,
		}),
	},
	effects: (dispatch) => ({
		async loadPosts(state, payload) {
			const data = await fetch("https://jsonplaceholder.typicode.com/posts");
			const res = (await data.json()) as UserResponse;
			// console.log(res);
			dispatch.posts.loadPost(res);
			// return data.res.map((user) => ({
			// 	...user,
			// 	id: nanoid(),
			// })) as ReadonlyArray<User>;
		},
	}),
});
