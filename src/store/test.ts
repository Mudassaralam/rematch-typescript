import { createModel } from "@rematch/core";

export const count = createModel()({
	state: 0,
	reducers: {
		increment(state, payload) {
			return state + payload;
		},
		decrement(state, payload) {
			return state - payload;
		},
	},
	effects: (dispatch) => ({
		incrementAysnc(payload: number, state) {
			dispatch.count.increment(payload);
		},
		decrementAysnc(payload: number, state) {
			dispatch.count.decrement(payload);
		},
	}),
});
