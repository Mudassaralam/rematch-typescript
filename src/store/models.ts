import { Models } from "@rematch/core";
import { count } from "./test";
import { posts } from "./models/user";

export interface RootModel extends Models<RootModel> {
	count: typeof count;
	posts: typeof posts;
}
export const models: RootModel = { count, posts };
